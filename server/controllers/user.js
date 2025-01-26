import bcrypt from 'bcrypt';
import User from '../models/user.js'

export const user = async (req, res) => {
    try {
        const { Nom, Prenom, Email, username, Password, Role } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Le nom d'utilisateur existe déjà." });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);
        const newUser = new User({
            Nom,
            Prenom,
            Email,
            username,
            Role,
            Password: hashedPassword,
        });
        await newUser.save();
        return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error: error.message || error });
    }
};
