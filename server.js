const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const { Users } = require("./models/users");
const PORT = 6000;

//its the URL from Mongo database with user id and password

const mongoURL =
  "mongodb+srv://todo:todo@cluster0.0w18s6p.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static("public"));
app.use(express.json());

//Here i am making connection with database

mongoose.connect(mongoURL, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("database Connected");
  }
});

app.get("/", (req, res) => {
  res.send("hello from server side");
});

//Using Post to add data in database by using models

app.post("/create", (req, res) => {
  const data = req.body;

  Users.create(data)
    .then((response) => {
      res.status(201).json({
        message: "Succesfully created the data",
        data: response,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "This is the error from database",
        error: error,
      });
    });
});
//Using Put to update the name only and can also update multiple but for now let it be name
app.put("/edit/:id", (req, res) => {
  Users.findByIdAndUpdate(
    { _id: req.params.id },

    {
      name: req.body.name,
    },
    {
      new: true,
    }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.id,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
// using Get to list all the items created from database
app.get("/lists", (req, res) => {
  Users.find({})
    .then((response) => {
      res.status(200).json({
        message: "Succesfully fetched the data",
        data: response,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "This is my error",
        error: error,
      });
    });
});
// using delete with the help of deleteone function to delete by id
app.delete("/list/:id", async (req, res) => {
  let result = await Users.deleteOne({ _id: req.params.id });
  res.send(result);
});
// Server rendering all the static files
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running");
});
