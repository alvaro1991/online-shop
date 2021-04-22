"use strict";

const express = require("express");
const app = express();

const productCtrl = require('./controllers/product')


//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//API Request examples
app.get("/api/product", productCtrl.getProducts)
app.get("/api/product/:productId", productCtrl.getProduct);
app.post("/api/product", productCtrl.saveProduct)
app.put("/api/product/:productId", productCtrl.updateProduct)
app.delete("/api/product/:productId", productCtrl.deleteProduct)

module.exports = app