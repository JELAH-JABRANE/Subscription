import Diplome from "../models/Diplome.js";


export const diplome = async (req,res,next) => {
    const {Diplome,Specialite,domainSpecialisation,EtablisementDiplome,NiveauDiplome,annee_obtention_diplome,typeDimplome} = req.body
    
    try {
        if ([Diplome, Specialite, domainSpecialisation, EtablisementDiplome, NiveauDiplome, annee_obtention_diplome, typeDimplome].some(field => !field || field.trim() === "")) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        
    } catch (error) {
        
    }

}