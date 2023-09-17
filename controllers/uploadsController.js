const path = require('path');
const {StatusCodes} = require('http-status-codes')
const customError = require('../errors')

const uploadProductImage = async (req,res)=>{
    // check if file exists
    // check format
    // check size

    if(!req.files){
        throw new customError.BadRequestError('No file uploaded')
    }
    const productImage = req.files.image;

    if(!productImage.mimetype.startsWith('image')){
        throw new customError.BadRequestError('Please upload an image')
    }

    const maxSize = 1000

    if(productImage.size > maxSize){
        throw new customError.BadRequestError('Image size should be less than 1KB')
    }

    const imagePath= path.join(__dirname, '../public/uploads/'+`${productImage.name}`);
    await productImage.mv(imagePath)

    return res.status(StatusCodes.OK).json({image:{src:`uploads/${productImage.name}`}})
}

module.exports = {uploadProductImage}