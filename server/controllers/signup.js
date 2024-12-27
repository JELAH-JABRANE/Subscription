import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const { Nom, Prenom, Email, Password } = req.body
        console.log(req.body);

        if (!Email || !Password) {
            return res.status(400).json({ message: "All inputs are required !" })
        }
        const userExist = await User.findOne({ Email });
        if (userExist) {
            return res.status(400).json({ message: 'This Email is ALREADY IN USE' })
        }
        const HashPassword = await bcrypt.hash(Password, 10);
        const Newuser = User({
            Email,
            Password : HashPassword
        })
        const saveTheUser = await Newuser.save();

        return res.status(201).json({ message: `the user created succusfuly ${Newuser}` })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'server error please try again !' })
    }
}