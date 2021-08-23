const express = require("express");
const db = require("./db/db");
const articlesRouter = require('./routers/routes/articles');
const usersRouter = require ("./routers/routes/users")
const app = express();
app.use(express.json());



app.use('/',usersRouter);
app.use('/',articlesRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});