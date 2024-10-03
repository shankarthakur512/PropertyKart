import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  
    Name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
     type : String,
     rquired : true
    },
    avatar : {
        type : String , 
        required : true,
    }

})

export  const User = mongoose.model('User' , UserSchema)