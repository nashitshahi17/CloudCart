const express = require('express')
const {handleCreateProduct, handleGetProducts, handleGetProduct, handleUpdateProduct, handleDeleteProduct} = require('../controllers/productController')
const {authenticateUser,authorizeAdmin} = require('../middlewares/auth')
const router = express.Router()

router.post('/',authenticateUser,authorizeAdmin,handleCreateProduct)
router.get('/',handleGetProducts)
router.get('/:id',handleGetProduct)
router.put('/:id',handleUpdateProduct)
router.delete('/:id',handleDeleteProduct)

module.exports = router
