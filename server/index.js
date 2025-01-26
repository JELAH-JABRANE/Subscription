// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRegistration from './routes/user.js'
import cors from "cors"; 

import specialiteRouter from './routes/Specialite.js'
dotenv.config();

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));

mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Your routes
app.use('/api/connexion', userRegistration)  // Keep the same base path
app.use('/api/specialite', specialiteRouter)  // Keep the same base path


app.listen(5000, () => {
    console.log('server running on http://localhost:5000')  // Match the actual port
})