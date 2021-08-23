const express = require("express");
const 
createNewArticle
    = require('../controllers/articles');
  const articlesRouter = express.Router();


  articlesRouter.post("/articles",createNewArticle );
module.exports = articlesRouter;