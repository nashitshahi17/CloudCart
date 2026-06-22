const express = require('express')
const { handleRegisterUser, handleLoginUser, handleGetUser, handleUpdateUser, handleDeleteUser } = require('../controllers/userController')
const router = express.Router()

router.post('/register',handleRegisterUser)
router.post('/login',handleLoginUser)
router.get('/:id',handleGetUser)
router.put('/:id',handleUpdateUser)
router.delete('/:id',handleDeleteUser)


module.exports = router