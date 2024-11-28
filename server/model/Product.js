import { Schema, model } from "mongoose";

const productSchema = new Schema  ({
 name: {
    type: String,
    required: true,  
    trim: true,  
  },
  description: {
    type: String,
    required: true,  
    trim: true,
  },
  price: {
    type: Number,
    required: true,  
    min: 0, 
  },
  image_name: {
    type: String,
    required: true,  
  },
  createdAt: {
    type: Date,
    default: Date.now,  
  }
});

const Product =  model('Product', productSchema);


export default mongoose.model("Product", ProductSchema);