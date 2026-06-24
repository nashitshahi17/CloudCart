const Product = require('../models/products')

async function handleCreateProduct(req,res){
    try{
        const product = await Product.create(req.body)
        return res.status(201).json(product)

    }
    catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

async function handleGetProducts(req,res){
    try{
        const products = await Product.find()
        return res.status(200).json(products)
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

async function handleGetProduct(req,res){
    try{
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({message: "Product Not Found"})
        return res.status(200).json(product)
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

async function handleUpdateProduct(req,res){
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!product) return res.status(404).json({
            message: "Product Not Found"
        })
        return res.status(200).json({
            message: "Updated Successfully"
        },product)
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

async function handleDeleteProduct(req,res){
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product) return res.status(400).json({
            message: "Product Not Found"
        })
        return res.status(200).json({
            message: "Deleted Successfully"
        })
    }
    catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    handleCreateProduct,
    handleGetProducts,
    handleGetProduct,
    handleUpdateProduct,
    handleDeleteProduct
}