
const mongoose = require("mongoose");


const users = new mongoose.Schema({
    firstName:{type:String },
    lastName:{type:String},
    age:{type:Number},
    email:{type:String , uniqe:true }, 
    password:{type:String }

})




const usersModel = mongoose.model("User" ,users )

module.exports = usersModel
