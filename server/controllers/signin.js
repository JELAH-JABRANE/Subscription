import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import { body, validationResult } from 'express-validator';

// Middleware to validate inputs
export const validateSignin = [
    body('Email').isEmail().withMessage('Valid email is required'),
    body('Password').notEmpty().withMessage('Password is required'),
];

export const signin = async (req, res) => {
    try {
        // Validate request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { Email, Password } = req.body;

        // Find the user by email
        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if the password matches
        const isPasswordMatched = await bcrypt.compare(Password, user.Password);
        if (!isPasswordMatched) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.Email },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        // Send response with token and user details
        res.status(200).json({
            message: 'Successfully signed in',
            token,
            user: {
                id: user._id,
                email: user.Email,
                nom: user.Nom,
                prenom: user.Prenom,
                username: user.username
            }
        });

    } catch (error) {
        console.error('Signin Error:', error);
        res.status(500).json({ message: 'Server error, please try again' });
    }
};
