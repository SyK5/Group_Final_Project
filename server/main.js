import express from 'express';
import connectDB from "./libs/database.js";
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import favoritesRoutes from './routes/favoritesRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import userRoutes from './routes/userRoutes.js'; 
import {globalErrorHandler,routeNotFound } from './middleware/errorHandler.js';


dotenv.config();
await connectDB();

const app = express();


app.use(express.json());
const PORT = process.env.PORT || 5000;



app.use('/api/products', productRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/cart', cartRoutes); 
app.use('/api/users', userRoutes); 

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(routeNotFound);
app.use(globalErrorHandler);



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
