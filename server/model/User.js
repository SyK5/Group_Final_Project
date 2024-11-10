import { type } from "express/lib/response";
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: String,


    },
    lastName: {
        type: String,
        required : String,
    }, 
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
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
    type: 
   }
   timestamps: true,
});

