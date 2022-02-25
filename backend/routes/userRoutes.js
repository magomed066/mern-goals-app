const express = require('express')
const {
	registerUser,
	loginUser,
	getUserData,
} = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/info', protect, getUserData)

module.exports = router
