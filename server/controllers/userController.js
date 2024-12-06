import createError from "http-errors"
import {createCart} from "./cartController.js"
import { createSendToken } from "../libs/jwt.js"
import bcrypt from "bcrypt"


import User from "../models/User.js"

import asyncHandler from "../middleware/asyncHandler.js";

export const signup = asyncHandler(async (req, res, next) => {
    const { password, ...userData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ ...userData, password: hashedPassword });
    await createCart(user);
    createSendToken(res, 201, user);
});


export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;   
    if (!email || !password) {
        throw createError(400, "Please provide email and password");
    }   
    const user = await User.findOne({ email });  
    if (!user || !(await user.isPasswordCorrect(password, user.password))) {
        throw createError(401, "Incorrect email or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw createError(401, "Incorrect email or password");
    }
     createSendToken(res, 200, user);
});



export const logout = asyncHandler(async (req, res,next) => {
    res.clearCookie("jwtToken", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
    });

    res.status(200).json({
        success: true,
        status: 200,
        data: "User was successfully logged out.",
    });
});


export const protect = async (req, res, next) => {
    try {
      const jwtToken = req.cookies.jwtToken;  
      if (!jwtToken) throw createError(401, "Unauthorized request");  
      const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);  
      const user = await User.findById(decoded.id);  
      if (!user) throw createError(401, "User is no longer exist");
  
      req.user = user;
      req.isAuthenticated = true;
  
      next();
    } catch (error) {
      next(error);
    }
  };

export const getMe = asyncHandler(async (req, res) => {
    const { user, isAuthenticated } = req;
    if (user && user.password) {
        user.password = undefined;
    }
    res.status(200).json({
        success: true,
        user,
        isAuthenticated,
    });
});
export const updateUser = asyncHandler(async (req, res) => {
    const { userPassword } = req.body;
    const { userId } = req.params;

    let updatedFields = {};
    if (userPassword) {
        updatedFields.password = await bcrypt.hash(userPassword, 12);
    }    
        const user = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
    
    if (!user) {
        throw new Error(`User with ID ${userId} not found`);
    }
    res.status(200).json({
        message: "Update success",
        data: user,
    });
});