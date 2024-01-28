package com.example.planetpoints

import android.content.Intent
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.EditText
import android.widget.Spinner
import androidx.appcompat.app.AppCompatActivity


class AddProduct : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add_product)

        val spinnerPackagingType = findViewById<Spinner>(R.id.spinnerPackagingType)
        val packagingOptions = arrayOf("Paper", "Plastic (Recyclable)", "Plastic (Non-Recyclable)", "Metal", "Compostable", "Biodegradable", "Glass")
        val adapter = ArrayAdapter(this, android.R.layout.simple_spinner_item, packagingOptions)
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        spinnerPackagingType.adapter = adapter

        val code = intent.getStringExtra("code")!!.toLong().toString()

        val productName = findViewById<EditText>(R.id.editTextProductName)
        val brandName = findViewById<EditText>(R.id.editTextBrand)
        val addButton = findViewById<Button>(R.id.buttonAddProduct)
        var ingredients: ArrayList<String> = arrayListOf(" ")
        val productAPI = RetrofitHelper.getInstance().create(ProductAPI::class.java)

        val productInfoCall: Call<Item2> = productAPI.getProductInfo(code)

        productInfoCall.enqueue(object : Callback<Item2?> {
            override fun onResponse(call: Call<Item2?>, response: Response<Item2?>) {
                if (response.isSuccessful) {
                    val body = response.body()
                    if(body != null) {
                        Toast.makeText(this@AddProduct, "Product info obtained", Toast.LENGTH_SHORT)
                            .show()
                        productName.setText( body.name, TextView.BufferType.EDITABLE)
                        brandName.setText( body.brand, TextView.BufferType.EDITABLE)
                        ingredients = body.ingredients
                    } else {
                        Toast.makeText(this@AddProduct, "No product info found" + response.raw().code(), Toast.LENGTH_SHORT).show()
                    }
                } else {
                    Toast.makeText(this@AddProduct, "No product info found" + response.raw().code(), Toast.LENGTH_SHORT).show()

                }
            }

            override fun onFailure(call: Call<Item2?>, t: Throwable) {
                Toast.makeText(this@AddProduct, "Error connecting to server...", Toast.LENGTH_SHORT).show()
            }
        })


        addButton.setOnClickListener {
            // Create an Intent to launch the second activity
            val submitProduct = SubmitProduct(
                barcode = code,
                ingredients = ingredients,
                name = productName.text.toString(),
                brand = brandName.text.toString(),
                packaging = arrayListOf(spinnerPackagingType.selectedItem.toString()),
            )

            val call: Call<StatusCode> = productAPI.addProduct(submitProduct)

            call.enqueue(object : Callback<StatusCode?> {
                override fun onResponse(call: Call<StatusCode?>, response: Response<StatusCode?>) {
                    if (response.isSuccessful) {
                        Toast.makeText(this@AddProduct, "Product added", Toast.LENGTH_SHORT).show()
                        finish()
                    } else {
                        Toast.makeText(this@AddProduct, "Error: " + response.raw().code(), Toast.LENGTH_SHORT).show()

                    }
                }

                override fun onFailure(call: Call<StatusCode?>, t: Throwable) {
                    Toast.makeText(this@AddProduct, "Error connecting to server...", Toast.LENGTH_SHORT).show()
                }
            })
        }
    }
}