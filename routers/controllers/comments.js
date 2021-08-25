const Comment = require("../../db/models/commentsschema");
const commentsModel = require("../../db/models/commentsschema");

const createNewComment =(req, res)=>{
  const comment = req.body.comment 
  const commenter =req.body.commenter

 
    const Comment = new commentsModel({
        comment,
        commenter
    });
  
    Comment
      .save()
      .then((result) => {
        res.status(201).json({success:true , massage:"the new comment added " , commenter : result });
      })
      .catch((err) => {
        res.status(500).json({success:false  , massage:"server error " });
      });
  };




  module.exports = createNewComment 