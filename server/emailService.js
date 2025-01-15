// services/emailService.js
import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Create transporter (use Gmail or other service)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD // Use App Password if using Gmail
    },
    tls: {
        rejectUnauthorized: false // Add this line to fix the certificate error
    }
});

export const sendVerificationEmail = async (userEmail, verificationToken) => {
    const verificationLink = `http://localhost:5555/api/connexion/verify/${verificationToken}`;
    
    const mailOptions = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: 'Verify Your Email',
        html: `
            <h1>Welcome!</h1>
            <p>Please verify your email by clicking the link below:</p>
            <a href="${verificationLink}">Verify Email</a>
            <p>This link will expire in 24 hours.</p>
        `
    };

    await transporter.sendMail(mailOptions);
};