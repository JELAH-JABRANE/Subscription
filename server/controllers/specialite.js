import Specialite from "../models/Specialite.js";

export const specialite = async (req, res, next) => {
    const { SpecialiteNom, description } = req.body;

    // Check if SpecialiteNom is missing or empty
    if (!SpecialiteNom || SpecialiteNom.trim() === "") {
        return res.status(400).json({ message: 'SpecialiteNom is required' });
    }

    // Check if description is missing or empty
    if (!description || description.trim() === "") {
        return res.status(400).json({ message: 'Description is required' });
    }

    // Check if the Specialite already exists
    const existSpecialite = await Specialite.findOne({ SpecialiteNom: SpecialiteNom });
    if (existSpecialite) {
        return res.status(400).json({ message: 'This specialite already exists' });
    }

    // Create a new Specialite
    const newSpecialite = new Specialite({
        SpecialiteNom,
        description
    });

    // Save the new Specialite to the database
    try {
        await newSpecialite.save();
        res.status(201).json({ message: 'Specialite created successfully', data: newSpecialite });
    } catch (error) {
        res.status(500).json({ message: 'Error creating Specialite', error: error.message });
    }
};