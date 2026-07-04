require('dotenv').config()
const express = require('express')
const {connectDB} = require('./src/config/db')
const notificationRoutes = require("./src/routes/notificationRoute");

const PORT = process.env.PORT
const app = express()

connectDB(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully")
})
.catch((error)=>{
    console.log(error)
})

app.use(express.json())
app.use("/api/notifications", notificationRoutes);


app.listen(PORT,()=>console.log(`Server start at ${PORT}`))