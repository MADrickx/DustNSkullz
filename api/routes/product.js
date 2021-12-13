const router = require("express").Router();
const Product = require("../models/Product");
const {verifyTokenAndAuthorized, verifyTokenAndAdmin} = require("./verifyToken");

//create 
router.post("/", verifyTokenAndAdmin, async (req,res)=>{
    const newProduct = new Product(req.body)

    try{
        console.log(req.body)
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
})

//update
router.put('/:id',verifyTokenAndAdmin, async (req,res)=>{
    console.log(req.body)
   try{
    const updatedProduct = await Product.findByIdAndUpdate({_id:req.params.id}, 
        {
           $set:req.body
        },
        {
           new:true
        });
        console.log(req.body)
    res.status(200).json(updatedProduct);
    
   } catch(err) {
    res.status(500).json(err);
   }
})


//delete
router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    }catch(err){
        res.status(500).json('err')
    }
})

//get product
router.get("/find/:id", async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all products
router.get("/", async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qAuthor = req.query.author;
    try{
        let products = [];

        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(1);
        } else if (qCategory){
            products = await Product.find({categories:{
                $in:[qCategory]
            }});
        } else if (qAuthor){
            products = await Product.find({ author: { $in: [ qAuthor ] } });
            console.log(qAuthor);
        }
        
        else {
            products = await Product.find();
        }

        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;