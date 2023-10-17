const { Product } = require("../schema/productSchema")

const createProduct = async(req,res)=>{
    try {
        const newProduct = new Product({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description
        })
        
        const result = await newProduct.save();
        if(result){
            res.status(200).send({message:"Product added successfully ",result})
        }
        
    } catch (error) {
        res.status(404).send({message:error.message})
    }
}

const getAllProduct = async(req,res)=>{
    try {
        // here use comparison operator
        const products = await Product.find({price:{$lt: 40000}});
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

const getSpecificProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await Product.findOne({_id:id});
        
        // if you want to see just title you can use select method-----------
        // const product = await Product.findOne({_id:id}).select({name:1,_id:0});
        if(product){
            res.status(200).send(product)
        }

        else{
            res.status(500).send({message:"Product is not found"})
        }

    } catch (error) {
        res.status(404).send({message:error.message})
    }
}


module.exports = {createProduct,getAllProduct,getSpecificProduct};