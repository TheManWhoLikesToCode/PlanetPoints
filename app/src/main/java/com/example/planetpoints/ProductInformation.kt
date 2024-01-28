package com.example.planetpoints

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

        barCodeText.text = code

        val productAPI = RetrofitHelper.getInstance().create(ProductAPI::class.java)

        val call: Call<Product> = productAPI.getProduct(code!!.toLong().toString())

        call.enqueue(object : Callback<Product?> {
            override fun onResponse(call: Call<Product?>, response: Response<Product?>) {
                val body = response.body()
                if (response.isSuccessful && body != null){
                    productNameText.text = body.Item.name.S
                    brandNameText.text = body.Item.brand.S
                    Toast.makeText(this@ProductInformation, "Got the data for " + body.Item.name.S, Toast.LENGTH_SHORT).show()
                }

            }

            override fun onFailure(call: Call<Product?>, t: Throwable) {
                Toast.makeText(this@ProductInformation, "Product not found.", Toast.LENGTH_SHORT).show()

            }
        })
    }
}