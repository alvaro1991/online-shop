'use strict'

const express = require('express')
const app = require('../app')
const productCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const api = express.Router()

//API Request examples
api.get("/product", productCtrl.getProducts)
api.get("/product/:productId", productCtrl.getProduct);
api.post("/product", productCtrl.saveProduct)
api.put("/product/:productId", productCtrl.updateProduct)
api.delete("/product/:productId", productCtrl.deleteProduct)
api.get('/private', auth.isAuth, function(req, res){
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api 


