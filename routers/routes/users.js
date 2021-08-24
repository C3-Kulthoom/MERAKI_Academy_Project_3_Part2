const express = require("express");
const 
    {createNewAuthor ,login}
    = require('../controllers/users');


  const usersRouter = express.Router();

 usersRouter.post("/users", createNewAuthor);
 usersRouter.post("/login", login);



  module.exports = usersRouter;