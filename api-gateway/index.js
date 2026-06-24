require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userRoute = require('./src/routes/userRoute')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const PORT = process.env.PORT

app.use(cors())
// app.use(express.json())

app.use('/api/users',userRoute)

app.listen(PORT,()=>{console.log(`Server Running on ${PORT}`)})
