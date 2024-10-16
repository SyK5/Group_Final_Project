import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

import connectDB from "./libs/database.js";

await connectDB();
const app = express();
const PORT = process.env.PORT ;

app.use(
  cors({
    origin: process.env.EXPRESS_CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
