import mongoose, { Schema, model } from "mongoose";


const DiplomeSchema = new mongoose.Schema({
    Diplome: { type: String, required: true },
    Specialite: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialite' },
    domainSpecialisation: { type: String, required: true },
    EtablisementDiplome: { type: String, required: true },
    NiveauDiplome: { type: String, required: true },
    annee_obtention_diplome: { type: date, required: true },
    typeDimplome: { type: string, enum: ["National", "etranger"], required: true },

})

const Diplome = model('Diplome', DiplomeSchema)
export default Diplome