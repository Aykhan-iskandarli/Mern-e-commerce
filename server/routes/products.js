const express = require("express")
const data= require("../data")
const expressAsyncHandler = require('express-async-handler')
const Product = require("../models/product")


const productRouter = express.Router()


productRouter.get("/",expressAsyncHandler(async(req,res)=>{
   const products = await Product.find({})
   console.log(products)
   res.send(products)
    
}))

productRouter.get("/seed",expressAsyncHandler(async(req,res)=>{
   //await Product.remove({})
   const createdProducts = await Product.insertMany(data.products);
   console.log({createdProducts})
   res.send({createdProducts})
    
}))



productRouter.get("/:id",expressAsyncHandler(async(req,res)=>{
  const product = await Product.findById(req.params.id)

  if(product){
    res.send(product)
  }
  else{
    res.status(404).send({message:"Product not found"})
  }
    
}))

module.exports =productRouter