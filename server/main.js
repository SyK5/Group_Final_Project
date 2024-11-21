const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./routes/products'); 
const errorHandler = require('./middleware/errorHandler'); 

const app = express();
app.use(express.json()); 


mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));


app.use('/api/products', productRoutes); 


app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

