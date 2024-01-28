package com.example.planetpoints

data class Product(
    var Item: Item,
)

data class Item(
    var barcode: barcode,
    var packaging: packaging,
    var scoreModifier: scoreModifier,
    var ingredients: ingredients,
    var name: name,
    var brand: brand,
)

data class barcode(
    var N: String,
)

data class packaging(
    var SS: ArrayList<String>,
)

data class scoreModifier(
    var N: String,
)

data class ingredients(
    var SS: ArrayList<String>,
)

data class name(
    var S: String,
)

data class brand(
    var S: String,
)