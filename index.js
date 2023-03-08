const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
const app = express();

//For You to be able to receive data into
// Your App, you require the body-parser
app.use(upload.array());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("Welcome to our Website");
});

app.get("/todos", (req, res) => {
  const todoList = {
    todo: "read",
    todo1: "Cook",
  };

  res.status(200).send(todoList);
});
app.post("/todos", (req, res) => {
  // Creating Data and Accessing Body
  const balance = 4000;
  const req_data = req.body;
  const nawBal = req_data.amount + balance;

  res.send({
    status: 200,
    message: "Your money has beeing Successfully Deposited",
    data: {
      credit: req_data.amount,
      Balance: nawBal,
    },
  });
});

app.listen(3000, () => {
  console.log("I am listening on Port 3000");
});
