const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    productName: {
        type:String,
        required:true,
        unique: true
    },

    productDescription: {
        type:String,
        required:true,
    },
    productPrice: {
        type:Number,
        required:true,
    },
    productImage: {
        type:Buffer,
        contentType:String
    },
    defaultImage : {
        type:String,
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;