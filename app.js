const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const cors = require('cors')

const login = require('./login')
const authorization = require("./middleware/authorization");
const encoder= require("./encoder");

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

// routes
app.post('/login', login)

// if user authenticated - return encoded user input 
app.post("/encode", authorization, (req, res) => {
    const encodedString = encoder(req.body.userInput);
    res.send(encodedString);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))