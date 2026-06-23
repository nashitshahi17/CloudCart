require('dotenv').config();
const express = require('express')
const {connectDB} = require('./src/config/db')
const urlRoute = require('./src/routes/user')

const app = express()
const PORT = 8000

// Connect to DB
connectDB('mongodb://127.0.0.1:27017/cloudcart')
    .then(()=> console.log('MongoDb Connected Successfully'))
    .catch((error)=> console.log(error))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// API Routes
app.use('/api/users',urlRoute)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})