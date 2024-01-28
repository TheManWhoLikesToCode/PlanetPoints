package com.example.planetpoints

import android.content.Intent
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import android.widget.ArrayAdapter
import android.widget.Spinner
import androidx.appcompat.app.AppCompatActivity


class AddProduct : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add_product)

        val code = intent.getStringExtra("code")!!

        val productName = findViewById<TextView>(R.id.editTextProductName)
        //val productNameText = findViewById<TextView>(R.id.)
        //val brandNameText = findViewById<TextView>(R.id.)

        val name = "name"
        val brand = "brand"

        val submitProduct = SubmitProduct(
            barcode = code,
            ingredients = ArrayList(),
            name = name,
            brand = brand,
            packaging = ArrayList(),
        )

        val productAPI = RetrofitHelper.getInstance().create(ProductAPI::class.java)

        val call: Call<StatusCode> = productAPI.addProduct(submitProduct)

        call.enqueue(object : Callback<StatusCode?> {
            override fun onResponse(call: Call<StatusCode?>, response: Response<StatusCode?>) {
                if (response.isSuccessful) {
                    Toast.makeText(this@AddProduct, "Product added", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<StatusCode?>, t: Throwable) {
                Toast.makeText(this@AddProduct, "Error connecting to server...", Toast.LENGTH_SHORT).show()
            }
        })

        val spinnerPackagingType = findViewById<Spinner>(R.id.spinnerPackagingType)
        val packagingOptions = arrayOf("Paper", "Plastic", "Metal", "Compostable", "Biodegradable")
        val adapter = ArrayAdapter(this, R.layout.simple_spinner_item, packagingOptions)
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        spinnerPackagingType.adapter = adapter
    }
}