const express = require('express')
const {handleCreateProduct, handleGetProducts, handleGetProduct, handleUpdateProduct, handleDeleteProduct} = require('../controllers/productController')
const {authenticateUser,authorizeAdmin} = require('../middlewares/auth')
const validate = require('../middlewares/validate')
const {createProductSchema,updateProductSchema} = require('../validators/productValidator')
const router = express.Router()

router.post('/',authenticateUser,authorizeAdmin, validate(createProductSchema),handleCreateProduct)
router.get('/',handleGetProducts)
router.get('/:id',handleGetProduct)
router.put('/:id',authenticateUser,authorizeAdmin,validate(updateProductSchema),handleUpdateProduct)
router.delete('/:id',authenticateUser,authorizeAdmin,handleDeleteProduct)

module.exports = router
