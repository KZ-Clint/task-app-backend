const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const taskRoutes = require('./routes/taskroute')

const app = express()

//MIDDLEWARE
app.use( bodyParser.json() )
app.use( express.json() )
app.use(morgan("common"))

app.use( cors( {
    origin:'*'
}) )

app.use( '/api/task', taskRoutes )

mongoose.set("strictQuery", false);
const dburi = process.env.DB_CONNECTION
mongoose.connect(dburi)
console.log('connected to db')

app.listen(process.env.PORT)