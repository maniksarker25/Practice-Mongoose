const { Product } = require("../schema/productSchema")

const createProduct = async(req,res)=>{
    try {
        const newProduct = new Product({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description
        })
        
        const result = await newProduct.save();
        res.status(200).send(result)
        
    } catch (error) {
        res.status(404).send({message:error.message})
    }
}

const getAllProduct = async(req,res)=>{
    try {
        const products = await Product.find();
        if(products){
            res.status(200).send(products)
        }
        else{
            res.status(400).send({message:"product not found"})
        }

    } catch (error) {
        res.status(500).send({message:error.message})
    }
}


module.exports = {createProduct,getAllProduct};