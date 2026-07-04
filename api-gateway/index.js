require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userRoute = require('./src/routes/userRoute')
const productRoute = require('./src/routes/productRoute')
const orderRoute = require('./src/routes/orderRoute')
const cartRoute = require('./src/routes/cartRoute')
const notficationRoute = require('./src/routes/notificationRoute')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const PORT = process.env.PORT

app.use(cors())
// app.use(express.json())

app.use('/api/users',userRoute)
app.use('/api/products',productRoute)
app.use('/api/orders',orderRoute)
app.use('/api/cart',cartRoute)
app.use('/api/notifications',notficationRoute)

app.listen(PORT,()=>{console.log(`Server Running on ${PORT}`)})
