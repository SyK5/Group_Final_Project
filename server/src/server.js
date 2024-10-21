import express from 'express';
import vasesRoutes from './vases.js'; // Import vase routes
import cors from 'cors';



const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: '*' }))
app.use(express.json());

// Routes
app.use('/api/vases', vasesRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

