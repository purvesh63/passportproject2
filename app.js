const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "abc",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

const data = {
  username: "Admin",
  password: "1234",
};

passport.use(
  new LocalStrategy((username, password, done) => {
    if (username === data.username && password === data.password) {
      return done(null, data);
    }

    return done(null, false);
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  if (username === data.username) {
    return done(null, data);
  }

  done(null, false);
});

function islogin(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

app.get("/login", (req, res) => {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);

app.get("/", islogin, (req, res) => {
  res.render("index");
});

app.post("/logout", (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    res.redirect("/login");
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});