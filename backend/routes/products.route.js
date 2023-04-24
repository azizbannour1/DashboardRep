const express = require('express');
const { AddProduct, FindAllProducts, FindSingleProduct, UpdateProduct, DeleteProduct } = require('../controllers/products.controller');

const router = express.Router ()

 // add product
 router.post('/products',AddProduct)

  // find all products
  router.get('/products',FindAllProducts)

   // find single product
 router.get('/products/:id',FindSingleProduct)

  // update product
  router.put('/products/:id',UpdateProduct)

   // delete product
 router.delete('/products/:id',DeleteProduct)

 


module.exports= router; 