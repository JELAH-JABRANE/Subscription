import mongoose, { Schema, model } from 'mongoose'

const Userschema = Schema({
    Nom: { type: String },
    Prenom: { type: String },
    username: { type: String , required : true, uniqu : true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    role: { type: String, enum: ['admin', 'candidate'],default : 'admin' },
    verificationExpires: { type: Date }
})

const User = model('user', Userschema)


export default User