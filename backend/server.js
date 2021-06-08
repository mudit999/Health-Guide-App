const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");


// create instance of express
app = express()

require('dotenv').config()

// it will help us to server json files
const fs = require('fs')

//configure express instance with bodyParser settings
// include handling json files
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.use(cors())

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

const PORT = process.env.PORT || 3001

// listen to this port
app.listen(PORT , () => {
    console.log(`Listening on Port: ${PORT}`)
})