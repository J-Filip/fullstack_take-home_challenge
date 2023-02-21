const express = require('express')
let bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

const login = require('./middleware/login')
const authorization = require("./middleware/authorization");
const encoder= require("./encoder");

const app = express()
const port = 3000

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.set("view engine", "ejs");

// routes

// login view
app.get('/', (req, res) => {
      res.render('login.ejs')
})

app.post('/login', login)

// encoder view
app.get("/encode", authorization, (req, res) => {
  res.render("encode.ejs");
});

// define a new endpoint that accepts a string, runs it through encoder and returns the value 
app.post("/encode", (req, res) => {
  const encodedStr = encoder(req.body.userInput);
  res.render("encode.ejs", { result: encodedStr });
});

// logout 
app.get("/logout", (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))