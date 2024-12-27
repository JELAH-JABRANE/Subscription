import mongoose,{Schema,model} from 'mongoose'

const Userschema = Schema({
    Nom : {type : String},
    Prenom : {type : String},
    username : {type : String},
    Email : {type : String,required : true},
    Password : {type : String,required : true},
})

const User = model('user',Userschema)


export default User