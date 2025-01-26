import mongoose, { Schema, model } from 'mongoose'


const ConcourShema = new mongoose.Schema({
    Grade : {type :String,requied : true},
    Nombre_de_postes : {type : String ,requied : true},
    Specilaie : {type : mongoose.Schema.Types.ObjectId,ref : 'Specialite'},
    Délai_dépôt_candidatures : {type : Date,required : true},
    Status : {type : String},





})