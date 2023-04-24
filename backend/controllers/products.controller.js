
const Products = require ('../models/products.models')
const ValidateProduct = require ('../validation/Products.validation')

const AddProduct = async (req,res)=> {
try {
    await Products.create(req.body)
    res.status(201).json ({message: 'Product added succesfully'})
}
catch (error) {
console.log(error.message)
}
}

const FindAllProducts = async (req,res)=> {
    try {
        const data= await Products.find ()
        res.status(201).json(data)
     }
    catch (error) {
    console.log(error.message)
    }
}

const FindSingleProduct = async (req,res)=> {
    try {
        const data= await Products.findOne({_id:req.params.id})
        res.status(201).json(data)
     }
    catch (error) {
    console.log(error.message)
}
    
}

const UpdateProduct = async (req,res)=> {

    try {
        const data= await Products.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
            )
        res.status(201).json(data)
     }
    catch (error) {
    console.log(error.message)
}

}

const DeleteProduct = async (req,res)=> {

    try {
        await Products.deleteOne({_id:req.params.id})
        res.status(201).json({message:"Product deleted succesfully"})
     }
    catch (error) {
    console.log(error.message)
    }

}

module.exports = {
    AddProduct,
    FindAllProducts,
    FindSingleProduct,
    UpdateProduct,
    DeleteProduct
}
 