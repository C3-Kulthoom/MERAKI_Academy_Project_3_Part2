const Comment = require("../../db/models/commentsschema");
const commentsModel = require("../../db/models/commentsschema");

const createNewComment =(req, res)=>{
    const {   
        comments,
        commenter
 } = req.body;
      
    const Comment = new commentsModel({
        comments,
        commenter
    });
  
    Comment
      .save()
      .then((result) => {
        res.status(201).json({success:true , massage:"Success Author Added author" , author : result});
      })
      .catch((err) => {
        res.status(409).json({success:false  , massage:"The email already exists" });
      });
  };




  module.exports = createNewComment 