const express = require("express");
const mongoose = require("mongoose");
const apartmentsRouter = require("./routes/apartmentsRoute");
const app = express();
const userRouter = require("./routes/userRoutes");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const Filestore = require("session-file-store")(session);
// const MongoDBSession = require("connect-mongodb-session")(session); // alternative store
// we use bodyparser in the routes folder

app.use(morgan("dev"));
const db = require("./config/keys").mongoURI;
app.use(cookieParser());
//Connect to MongoDB
const connect = mongoose.connect(db);

connect
  .then(
    (db) => {
      console.log("Connected correctly to the MongoDB server");
    },
    (err) => console.log(err)
  )
  .catch((err) => console.log(err));

// const store = new MongoDBSession({
//   uri: db,
//   collection: 'mySessions',
// });

app.use(
  session({
    name: "session-id",
    secret: "12345-678910",
    saveUninitialized: false,
    resave: false,
    store: new Filestore(),
  })
);
app.use("/", apartmentsRouter);
app.use("/users", userRouter);

const auth = (req, res, next) => {};

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server listening on http://www.localhost:${port}`)
);
