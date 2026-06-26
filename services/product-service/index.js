require('dotenv').config()
const express = require('express')
const {connectDB} = require('./src/config/db')
const productRoutes = require('./src/routes/product')

const app = express()

app.use(express.json())

connectDB(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully")
})
.catch((error)=>{
    console.log(error)
})
    

app.use('/',productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})
