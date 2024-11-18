import express from 'express';
import {
    signup,
    login,
    logout,
    protect,
    getMe,
    updateUser
} from './userController.js';

const router = express.Router();


router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

router.get('/me', protect, getMe);

router.put('/update/:userId', protect, updateUser);

export default router;