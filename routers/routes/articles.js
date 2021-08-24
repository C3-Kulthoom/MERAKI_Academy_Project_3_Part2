const express = require("express");
const {
createNewArticle
,getAllArticles 
,getArticlesByAuthor
 ,getAnArticleById
 ,updateAnArticleById}
    = require('../controllers/articles');
  const articlesRouter = express.Router();


  articlesRouter.post("/articles",createNewArticle );
  articlesRouter.get("/articles",getAllArticles );
  articlesRouter.get("/articles/search_1/:authorId",getArticlesByAuthor );
  articlesRouter.get("/articles/search_2/:authorId",getAnArticleById );
  articlesRouter.put("/articles/:id",updateAnArticleById );
module.exports = articlesRouter;