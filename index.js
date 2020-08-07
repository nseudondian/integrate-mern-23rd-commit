const express = require('express')
const app = express()
const routerimport = require('./API/routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATA_ACCESS, { useUnifiedTopology: true }, ()=>console.log("Database is loaded right!"))

app.use(express.json())
app.use(cors())
app.use('/api/routes', routerimport)



app.listen(4000, ()=>console.log("Server is in order!"))