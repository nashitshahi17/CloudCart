const express = require('express')
const { handleRegisterUser, handleLoginUser, handleGetUser, handleUpdateUser, handleDeleteUser, handleProfile } = require('../controllers/userController')
const authenticateUser = require('../middlewares/auth')
const router = express.Router()

router.post('/register',handleRegisterUser)
router.post('/login',handleLoginUser)
router.get('/profile',authenticateUser,handleProfile)
router.get('/:id',handleGetUser)
router.put('/:id',handleUpdateUser)
router.delete('/:id',handleDeleteUser)


module.exports = router