require('dotenv').config();
const express = require('express')
const {connectDB} = require('./src/config/db')
const urlRoute = require('./src/routes/user')

const app = express()
const PORT = process.env.PORT 

// Connect to DB
connectDB(process.env.MONGO_URI)
    .then(()=> console.log('MongoDb Connected Successfully'))
    .catch((error)=> console.log(error))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// API Routes
app.use('/',urlRoute)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})