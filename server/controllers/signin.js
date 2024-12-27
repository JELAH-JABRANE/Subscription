import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

export const signin = async (req, res, next) => {
    try {
        const { Email, Password } = req.body
        console.log("req body signin page", req.body)
    
        const user = await User.findOne({ Email });  // Changed variable name to user
        if (!user) {
            return res.status(404).json({ message: 'email not found !' })
        }

        // Use user.Password instead of User.Password
        const isPasswordMatched = await bcrypt.compare(Password, user.Password);
        if (!isPasswordMatched) {
            return res.status(401).json({ message: 'password not correct !' })  // Added return
        }

        // Generate JWT token using user instead of User
        const token = jwt.sign(
            { id: user._id, Email: user.Email },  // Changed User.id to user._id
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        // Send token in response
        res.status(200).json({ 
            message: 'Successfully signed in',
            token,
            user: {
                id: user._id,
                email: user.Email
            }
        })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({message : 'Error server please try again !'})   
    }
}