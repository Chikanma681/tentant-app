const express = require("express");
const mongoose = require("mongoose");
const apartmentsRouter = require("./routes/apartmentsRoute");
const app = express();
const userRouter = require("./routes/userRoutes");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const Filestore = require("session-file-store")(session);
const MongoDBSession = require("connect-mongodb-session")(session); // alternative store
// we use bodyparser in the routes folder

app.use(morgan("dev"));
const db = require("./config/keys").mongoURI;
app.use(cookieParser());
//Connect to MongoDB
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const connect = mongoose.connect(db);

connect
  .then(
    (db) => {
      console.log("Connected correctly to the MongoDB server");
    },
    (err) => console.log(err)
  )
  .catch((err) => console.log(err));

const store = new MongoDBSession({
  uri: db,
  collection: "mySessions",
});

app.use(
  session({
    name: "session-id",
    secret: "12345-678910",
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    saveUninitialized: true,
    resave: false,
    store: store,
  })
);

const isAuth = (req, res, next) => {
  console.log("Auth", req.sessionID);
  if (req.session.isAuth) {
    // res.redirect("http://www.localhost:3000/"
    // console.log("Login required");
    console.log(res);
    console.log(req);
    next();
  } else {
    // console.log(res)
    // console.log(req)
    // res.redirect("/users/login"); //comment this
    console.log("Login required");
  }
};
app.use("/users", userRouter);
app.use(isAuth); /*new idea: everyone can view the apartments 
but you have to sign in to upload*/
app.use("/", apartmentsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server listening on http://www.localhost:${port}`)
);

// use express-redirect-loop on npm - https://github.com/ladjs/express-redirect-loop
