const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, required:true,unique:true},
        desc:{type:String, required:true},
        img:{type:String,required:true},
        categories:{type:Array,default:["man"]},
        size:{type:Array,default:["xs","s","m","l","xl","xxl","xxxl"]},
        color:{type:Array,default:["black"]},
        price:{type:Number,required:true},
        author:{type:String,required:true},
        inStock:{type:Boolean, default:true},
    },
    {timestamps:true}
)

module.exports = mongoose.model("Product",ProductSchema);