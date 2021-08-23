const mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  mongoose.connect("mongoosmongodb://localhost:27017/project_3_v01", options).then(
() => {
    console.log("DB ... connected ");
  },
  (err) => {
    console.log(err);
  }
);


module.exports = mongoose