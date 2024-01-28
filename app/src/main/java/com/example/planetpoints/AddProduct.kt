package com.example.planetpoints

import android.R
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Spinner
import androidx.appcompat.app.AppCompatActivity


class AddProduct : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add_product)

        val spinnerPackagingType = findViewById<Spinner>(R.id.spinnerPackagingType)
        val packagingOptions = arrayOf("Paper", "Plastic", "Metal", "Compostable", "Biodegradable")
        val adapter = ArrayAdapter(this, R.layout.simple_spinner_item, packagingOptions)
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)
        spinnerPackagingType.adapter = adapter
    }
}