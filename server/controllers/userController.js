import createError from "http-errors"
import createCart from "cartController.js"
import { createSendToken } from "../libs/jwt"

import User from "../model/User.js"

import asyncHandler from "../middleware/asyncHandler.js";

export const signup = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);
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
    const user = await User.findByIdAndUpdate(userId, { userPassword }, { new: true });

    if (!user) {
        throw new Error(`User with ID ${userId} not found`);
    }
    res.status(200).json({
        message: "Update success",
        data: user,
    });
});