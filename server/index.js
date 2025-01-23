// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import signupRoutes from './routes/user.js'
import signinRoutes from './routes/signin.js'
import cors from "cors"; 
import googleLoginRoute from './routes/googleLoginRoute.js';  // New import


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
app.use('/api/connexion', signupRoutes)  // Keep the same base path
app.use('/api/connexion', signinRoutes)  // Use the same base path
app.use('/api/', googleLoginRoute);  // Add this line for Google login


app.listen(5000, () => {
    console.log('server running on http://localhost:5000')  // Match the actual port
})