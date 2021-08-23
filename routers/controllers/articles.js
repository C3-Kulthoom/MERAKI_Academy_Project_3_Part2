const Article = require("../../db/models/articlesschema");
const articlesModel = require("../../db/models/articlesschema");

 const createNewArticle = (req,res) =>{
    const {   
       title,
       description,
       author
     } = req.body;
          
        const Article = new articlesModel ({
        title,
        description,
        author 
        });
      
        Article
          .save()
          .then((result) => {
            res.status(201).json({success:true , massage:"Success Article created article" , author : result});
          })
          .catch((err) => {
            res.status(500).json({success:false  , massage:" server error" });
          });
      };
 











 
 module.exports = createNewArticle;