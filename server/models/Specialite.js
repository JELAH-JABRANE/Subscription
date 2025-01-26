import mongoose, { Schema,model } from "mongoose";


const SpecialiteSchema = new mongoose.Schema({
    SpecialiteNom : {type : String,required : true},
    description : {type : String}

})

const Specialite = model('Specialite',SpecialiteSchema)
export default Specialite