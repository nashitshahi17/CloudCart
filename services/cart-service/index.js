require('dotenv').config()
const {connectDB} = require('./src/config/db')
const express = require('express')
const cartRoutes = require('./src/routes/cartRoutes');
const app = express()
const PORT = process.env.PORT

app.use(express.json())

connectDB(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Successfully")
})
.catch((error)=>{
    console.log(error)
})
app.use("/", cartRoutes);

app.listen(PORT,()=>{console.log(`Server started at ${PORT}`)})