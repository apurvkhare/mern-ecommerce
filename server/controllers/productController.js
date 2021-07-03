import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

/*
* Fetch all products
* GET /api/products
*/
export const getProducts = asyncHandler(async (req, res) => {
    const productName = req.query.searchByName

    let products
    if(productName)
        products = await Product.find({name: {
            $regex: productName,
            $options: 'i',
          }})
    else
        products = await Product.find()

    res.status(202).json({products})
})

export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product)
        res.status(202).json(product)
    else{
        res.status(404)
        throw new Error('Product not found')
    }
})