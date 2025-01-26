
import mongoose, { Schema, model } from 'mongoose'


const CandidateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  CIN: { type: String, required: true, unique: true },
  dateNaissance : {type : String,required : true},
  lieuNaissance : {type : String,required : true},
  Genre : {type : String,enum : ['Homme,Femme']},
  Adresse : {type : String,required : true},
  Codepostale : {type : String ,required : true},
  Ville : {type : String ,required : true},
  Pays : {type : String ,required : true},
  Mobile : {type : String ,required : true},
  






});