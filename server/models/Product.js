import { Schema, model } from "mongoose";

const productSchema = new Schema({
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
  category: {
    type: String,
    required: true,
    enum: ["Sofas", "Lights", "Dining Room", "Bedroom", "Carpets"],  // Define allowed categories
    trim: true,
  },
  image_name: [
    {
      type: String,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.pre("save", function (next) {
  if (typeof this.price === "string") {
    const numericPrice = parseFloat(this.price.replace(/[^0-9.]/g, ""));
    if (isNaN(numericPrice) || numericPrice < 0) {
      return next(new Error("Invalid price value"));
    }
    this.price = numericPrice;
  }
  next();
});

const Product = model("Product", productSchema);

export default Product;
