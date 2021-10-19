require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
const pubRoute = require('./routes/pubRoute2')

// definisi middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

// defini route
app.use('/api/pub', pubRoute)

app.listen(process.env.PUB_PORT2, () =>{
    console.log(`server start on ${process.env.PUB_PORT2}`);
})


