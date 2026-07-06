require('dotenv').config()
const {connectDB} = require('./src/config/db')
const express = require('express')
const cartRoutes = require('./src/routes/cartRoutes');
const internalCartRoutes = require('./src/routes/internalCartRoutes')
const healthRoute = require('./src/routes/health')
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
app.use('/health',healthRoute)  
app.use("/", cartRoutes);
app.use("/internal/cart",internalCartRoutes);

app.listen(PORT,()=>{console.log(`Server started at ${PORT}`)})