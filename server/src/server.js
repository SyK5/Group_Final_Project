import express from 'express';
import vasesRoutes from './vases.js'; 
import cors from 'cors';


const app = express();
const port = 3000;


app.use(cors({ origin: '*' }))
app.use(express.json());

app.use('/seed/vases', vasesRoutes);

app.get('/', (res, req) => {
  res.json({message: 'Hello'})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

