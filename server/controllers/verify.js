// controllers/verify.js

import User from "../models/user.js";
export const verifyEmail = async (req, res) => {
    try {
        const { token } = req.params;

        const user = await User.findOne({ 
            verificationToken: token,
            verificationExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ 
                message: 'Invalid or expired verification token' 
            });
        }

        // Update user
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationExpires = undefined;
        await user.save();

        return res.status(200).json({ 
            message: 'Email verified successfully' 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error verifying email' });
    }
};