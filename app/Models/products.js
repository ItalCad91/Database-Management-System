import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String, 
    productID: Number, 
    quantityAvailable: Number,
    price: Number,
    quantitySold: Number
},{
    timestamps:true,
    collection: 'products'
});

export default mongoose.model('Products', ProductSchema);