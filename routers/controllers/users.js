const User = require("../../db/models/usersschema");
const usersModel = require("../../db/models/usersschema");

const createNewAuthor =(req, res)=>{
    const {   
    firstName,
    lastName,
    age,
    email,
    password 
     
 } = req.body;
      
    const User = new usersModel({
    firstName,
    lastName,
    age,
    email,
    password 
    });
  
    User
      .save()
      .then((result) => {
        res.status(201).json({success:true , massage:"Success Author Added author" , author : result});
      })
      .catch((err) => {
        res.status(409).json({success:false  , massage:"The email already exists" });
      });
  };

const login  =(req,res)=> {
  usedemail=req.body.email
  usedpassword=req.body.password

  usersModel.find({email:usedemail ,password:usedpassword})
  .then((result) => {
    res.status(200).json({success:true , massage:"Valid login credentials" });
  })
  .catch((err) => {
      res.status(401).json({success: false, massage:"Invalid login credentials"  });
  });

}


  module.exports = {createNewAuthor ,login }