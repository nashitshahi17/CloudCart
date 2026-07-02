const express = require('express')
const router = express.Router()
const {createProxyMiddleware} = require('http-proxy-middleware')

router.use(createProxyMiddleware({
    target: process.env.CART_SERVICE_URL,
    changeOrigin: true
}))

module.exports = router