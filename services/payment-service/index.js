require('dotenv').config()
const express = require('express')
const {connectDB} = require('./src/config/db')
const paymentRoutes = require("./src/routes/paymentRoute");

const app = express()
const PORT= process.env.PORT

connectDB(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully")
})
.catch((error)=>{
    console.log(error)
})
app.use(express.json())
app.use("/api/payments", paymentRoutes);


app.listen(PORT,()=>{console.log(`Server start at ${PORT}`)})