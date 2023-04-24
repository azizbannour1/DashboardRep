const mongoose = require ('mongoose');
const Schema = mongoose.Schema; 

const ProductSchema = new Schema ({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    image: { 
      data: Buffer, 
      contentType: String 
    }
}, {timestamps: true} )


module.exports= mongoose.model('products',ProductSchema)