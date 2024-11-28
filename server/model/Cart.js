import { Schema, model } from "mongoose";

const newCart = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    items: [
        {
        ProductId : { 
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,

        },
        quantity: {
            type: Number,
            required: true,
            min: 1, 
        },
        price: {
            type: Number,
            required: true,
        },
    },
],

totalPrice: {
    type: Number,
    required: true,
    default: 0,

},
createdAt: {
    type: Date,
    default: Date.now,
},


});

const Cart = model("Cart", newCart);

export default mongoose.model("Cart", CartSchema);