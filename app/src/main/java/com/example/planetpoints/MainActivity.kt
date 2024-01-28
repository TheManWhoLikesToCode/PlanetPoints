package com.example.planetpoints

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button = findViewById<View>(R.id.button)

        // Set a click listener for the button
        button.setOnClickListener {
            // Create an Intent to launch the second activity
            val intent = Intent(this, scan::class.java)
            startActivity(intent)
        }
    }
}