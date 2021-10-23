const express = require('express')
const databaseConfig = require('./config/databaseConfig')
const usersRoutes = require('./routes/usersRouts')
const app = express()
//ipmort env variables start
require('dotenv').config({ path: './config/.env' })
const PORT = process.env.PORT //should be after ↑
//ipmort env variables end

//database configuration start
databaseConfig()
//database configuration end

//middlewares start
app.use(express.json())
app.use('/api', usersRoutes)
//middlewares end

//call the user module 
const User = require('./models/User')



app.get('/', (req, res) => {
    res.send('hello')
})


app.listen(PORT, err => err ? console.error(err) : console.log(`loged in port: ${PORT}`))