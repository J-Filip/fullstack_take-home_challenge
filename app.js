const express = require('express')
let bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

const login = require('./login')
const authorization = require("./middleware/authorization");
const encoder= require("./encoder");


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.set("view engine", "ejs");


// routes

app.get('/', (req, res) => {
      res.render('login.ejs')
})

app.post('/login', login)

app.get("/encode", authorization, (req, res) => {
  res.render("encode.ejs");
});

// define a new endpoint that accepts a string
app.post("/encode", (req, res) => {
  const encodedStr = encoder(req.body.userInput);
  res.render("encode.ejs", { result: encodedStr });
  res.send(encodedStr);
});

app.get("/logout", (req, res) => {
  return res
    .clearCookie("token")
    .status(200)
    .redirect("/");
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))