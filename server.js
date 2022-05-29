const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// we use bodyparser in the routes folder

const db = require("./config/keys").mongoURI;

//Connect to MongoDB
const connect = mongoose.connect(db);

connect
  .then((db) => {
    console.log("Connected correctly to the server");
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
