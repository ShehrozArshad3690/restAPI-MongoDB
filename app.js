const express = require("express");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const mongoose = require("mongoose");
const studentRouter= require('./routers/studentRouter');

const app = express();
const dbURI ="mongodb+srv://Shehroz29:DE7OhqpZz0jUP6TV@nodetutes.pqnqv05.mongodb.net/StudentDB";

mongoose
.connect(dbURI)
.then((result) => app.listen(443))
.catch((error) => console.log(error));


// live logger
app.use(morgan("dev"));


// parse application/json
app.use(bodyParser.json());


//routes
app.get("/", (req, res) => {
  res.redirect("/students");
});

app.use(studentRouter);