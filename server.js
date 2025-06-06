import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/auth", authRoutes);

connectDB();
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
