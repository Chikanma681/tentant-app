const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const router = express.Router();
router.use(bodyParser.json());

// const isAuth = (req, res, next) => {
//     if (req.session.isAuth) {
//       next();
//     } else {
//       res.redirect("/login");
//     }
//   };

router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (user != null) {
      const err = new Error("Email already exists!");
      err.status = 403;
      next(err);
    } else {
      // const hashed =  bcrypt.hash(password, 12);
      // return User.create({
      //   username,
      //   email,
      //   password: hashed
      // });

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save();
        });
      });
      res.json({ status: "Registration Successful", user: username });
      // res.redirect("/login");
    }
  });
});

// next is fix login
// set .isAuth = true that should create a session
router.post("/login", (req, res, next) => {
  const { email, password, username } = req.body;

  User.findOne({ email }).then((user) => {
    if (user === null) {
      var err = new Error("User " + username + " does not exist!");
      err.status = 404;
      return next(err);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        req.session.isAuth = true;
        req.session.userId = user._id;
        console.log("Bcrpt",req.sessionID);
        res.json({ status: "Login Successful", user: user.username });
      } else {
        var err = new Error("Your password is incorrect!");
        err.status = 403;
        return next(err);
      }
    });
  });
});

router.post("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie("session-id");
    res.redirect("/");
  } else {
    var err = new Error("You are not logged in!");
    err.status = 403;
    next(err);
  }
});

router.delete("/", (req, res, next) => {
  User.deleteMany({})
    .then(
      (user) => {
        console.log("user deleted", user);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
      },
      (err) => next(err)
    )
    .catch((err) => console.log(err));
});

module.exports = router;
