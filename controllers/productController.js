const Product = require('../models/Product');

const {StatusCodes} = require('http-status-codes')


const createProduct = async (req,res)=>{
    const product = await Product.create(req.body)
    if(!product){

    }

    res.send(StatusCodes.CREATED).json({product})
}

const getAllProducts = async(req,res)=>{
    res.send('list of products')
}

module.exports = {createProduct, getAllProducts}
