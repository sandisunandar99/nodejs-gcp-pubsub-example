require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
const subRoute = require('./routes/subRoute')

// definisi middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

// defini route
app.use('/api/sub', subRoute)

app.listen(process.env.SUB_PORT, () =>{
    console.log(`server start on ${process.env.SUB_PORT}`);
})


