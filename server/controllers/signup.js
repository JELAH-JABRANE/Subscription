import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendVerificationEmail } from "../emailService.js";
export const signup = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(400).json({ message: "All inputs are required!" });
        }

        const userExist = await User.findOne({ Email });
        if (userExist) {
            return res.status(400).json({ message: 'This Email is already in use' });
        }

        // Generate verification token
        // const verificationToken = crypto.randomBytes(32).toString('hex');
        const HashPassword = await bcrypt.hash(Password, 10);

        const newUser = new User({
            Email,
            Password: HashPassword,
            // verificationToken,
            // verificationExpires: Date.now() + 24*60*60*1000 
        });

        await newUser.save();

        // Send verification email
        // await sendVerificationEmail(Email, verificationToken);

        return res.status(201).json({ 
            message: 'Please check your email to verify your account'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error please try again!' });
    }
};