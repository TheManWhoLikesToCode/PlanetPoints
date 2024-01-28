package com.example.planetpoints

import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Query

interface ProductAPI {
    @GET("/default/getProduct")
    fun getProduct(@Query("barcode") barcode: String): Call<Product>

    @POST("/default/addProduct")
    fun addProduct(@Body product: SubmitProduct): Call<StatusCode>
}

object RetrofitHelper {
    val baseUrl = "https://3347lhusyg.execute-api.us-east-2.amazonaws.com/"
    fun getInstance(): Retrofit {
        return Retrofit.Builder().baseUrl(baseUrl)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }
}