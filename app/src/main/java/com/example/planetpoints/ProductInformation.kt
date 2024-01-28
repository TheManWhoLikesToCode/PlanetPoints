package com.example.planetpoints

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class ProductInformation : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_product_information)

        val code = intent.getStringExtra("code")

        val barCodeText = findViewById<TextView>(R.id.bar_code_text)
        val productNameText = findViewById<TextView>(R.id.product_name_text)
        val brandNameText = findViewById<TextView>(R.id.brand_name_text)
        val pointsText = findViewById<TextView>(R.id.points_text)

        barCodeText.text = code

        val productAPI = RetrofitHelper.getInstance().create(ProductAPI::class.java)

        val call: Call<Product> = productAPI.getProduct(code!!.toLong().toString())

        call.enqueue(object : Callback<Product?> {
            override fun onResponse(call: Call<Product?>, response: Response<Product?>) {
                val body = response.body()
                if (response.isSuccessful && body != null){
                    val item = body.Item
                    if (item != null){
                        productNameText.text = item.name.S
                        brandNameText.text = item.brand.S
                        pointsText.text = item.scoreModifier.N
                        Toast.makeText(this@ProductInformation, "Got the data for " + item.name.S, Toast.LENGTH_SHORT).show()
                    } else {
                        Toast.makeText(this@ProductInformation, "Product not found.", Toast.LENGTH_SHORT).show()
                        val intent = Intent(this@ProductInformation, AddProduct::class.java)
                        intent.putExtra("code", code)
                        startActivity(intent)
                        finish()
                    }
                }

            }

            override fun onFailure(call: Call<Product?>, t: Throwable) {
                Toast.makeText(this@ProductInformation, "Error connecting to server...", Toast.LENGTH_SHORT).show()
            }
        })
    }
}