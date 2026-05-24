import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique: true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
    },
    price : {
        type : Number,
        required : true
    },
    imageSrc : {
        type : String,
        required : true
    }
},
{
    timestamps: true
  }
)
const productModel = mongoose.model("product",productSchema);
export default productModel;