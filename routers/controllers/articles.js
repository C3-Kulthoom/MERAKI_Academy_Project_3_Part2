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
 

const getAllArticles  =(req,res)=>{

    articlesModel.find({})
    .then((result) => {
      res.status(200).json({success:true , massage:"all the articles" , articles : result});
    })
    .catch((err) => {
        res.status(500).json({success: false, massage:"server error"  });
    });

}



const getArticlesByAuthor  =(req,res)=>{
const author =req.params.authorId 
    articlesModel.find({author:author})
    .then((result) => {
      res.status(200).json({success:true , massage:`all the articles by => ${author}` , articles : result});
    })
    .catch((err) => {
        res.status(404).json({success: false, massage:"the author not found "  });
    });

}


const  getAnArticleById  =(req,res)=>{
const author =req.params.authorId 
    articlesModel.find({author:author}).populate("author" ," firstName").exec()
    .then((result) => {
      res.status(200).json({success:true , massage:`The article => ${author}` , articles : result});
    })
    .catch((err) => {
        res.status(404).json({success: false, massage:"the author not found "  });
    });

}

 const updateAnArticleById  =(req,res)=>{

  const id = req.params.id
  articlesModel.findOneAndUpdate({_id:id} , {task:req.body.task} , (error, data )=>{
        if (error){
            console.log(error)
        } else {console.log(data)}
   }) .then((result)=>{
      res.json(result)
   }) .catch((error)=>{
       console.log(error);
   })
 }
 
 module.exports = {createNewArticle 
  ,getAllArticles ,getArticlesByAuthor 
  ,getAnArticleById  ,updateAnArticleById}