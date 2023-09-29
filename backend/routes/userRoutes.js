const express = require('express')
const { userRegister, userLogin, me, userUpdate, userDelete } = require('../controllers/userControllers')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', userRegister)
router.post('/login', userLogin)
router.get('/me', protect, me)
router.put('/:id', protect, userUpdate)
router.delete('/:id', protect, userDelete)

module.exports = router