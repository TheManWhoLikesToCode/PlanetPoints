package com.example.planetpoints

import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import retrofit2.http.Query

interface ProductAPI {
    @GET("/getProduct")
    fun getProduct(@Query("barcode") barcode: String): Call<Product>
}

object RetrofitHelper {
    val baseUrl = "https://3347lhusyg.execute-api.us-east-2.amazonaws.com/default/"
    fun getInstance(): Retrofit {
        return Retrofit.Builder().baseUrl(baseUrl)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
}