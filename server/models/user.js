import mongoose, { Schema, model } from 'mongoose'

const Userschema = Schema({
    Nom: { type: String },
    Prenom: { type: String },
    username: { type: String },
    googleId: { type: String },
    profilePicture: { type: String },

    Email: { type: String, required: true, unique: true },
    Password: { type: String },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    verificationExpires: { type: Date }
})

const User = model('user', Userschema)


export default User