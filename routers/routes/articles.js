const express = require("express");
const {
createNewArticle,getAllArticles ,getArticlesByAuthor}
    = require('../controllers/articles');
  const articlesRouter = express.Router();


  articlesRouter.post("/articles",createNewArticle );
  articlesRouter.get("/articles",getAllArticles );
module.exports = articlesRouter;