require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
const notifRoute = require('./routes/notifRoute')

// definisi middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

// defini route
app.use('/api/notif', notifRoute)

app.listen(process.env.NOTIF_PORT, () =>{
    console.log(`server start on ${process.env.NOTIF_PORT}`);
})


