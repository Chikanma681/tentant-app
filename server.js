const express = require("express");
const mongoose = require("mongoose");
const apartmentRouter = require("./routes/apartmentRoute");
const app = express();

// we use bodyparser in the routes folder

const db = require("./config/keys").mongoURI;

//Connect to MongoDB
const connect = mongoose.connect(db);

connect
  .then(
    (db) => {
      console.log("Connected correctly to the server");
    },
    (err) => console.log(err)
  )
  .catch((err) => console.log(err));

app.use("/", apartmentRouter);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server listening on http://www.localhost:${port}`)
);
