import { Schema, model } from "mongoose";


const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true,


    },
    lastName: {
        type: String,
        required : true,
    }, 
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    gender: {
type : String,
enum : ["female", "male", "female"],
required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
    required: true,
    },
   premium: {
    type: Boolean,
   default: false,

   },
   cartId: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
   },
   favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item", 
    },
  ],
   
   
},
{timestamps: true,}  );

const User = model("User", userSchema);
