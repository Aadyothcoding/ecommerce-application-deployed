import Product from '../models/product.model.js';
import mongoose from 'mongoose';


export const getProducts = async (req,res)=>{
     try{
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});

    }catch(error){
        res.status(500).json({success:false,message:"Error fetching products"});

    }
}

export const addNewProduct = async (req,res)=>{
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: "Please fill all the fields"});
    }
    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    }catch(error){
        return res.status(500).json({message: "Error creating product"});
    }
}


export const deleteProduct = async (req,res)=>{
    const {id}=req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product deleted successfully"});
    }catch(error){
        res.status(500).json({success:false,message:"Error deleting product"});
    }
    

}


export const updateProduct = async(req,res)=>{
    const {id}= req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false,message:"Invalid product ID"});
    }
    try{
        await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success:true,data:"Product updated successfully"});

    }catch(error){
        res.status(500).json({success:false,message:"Error updating product"});
    }

}