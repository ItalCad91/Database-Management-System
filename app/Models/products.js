// Author:Riccardo Reali
// Date: 15-02-2023

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String, 
    productID: String, 
    quantityAvailable: Number,
    price: String,
    quantitySold: Number
},{
    timestamps:true,
    collection: 'products'
});

export default mongoose.model('Products', ProductSchema);