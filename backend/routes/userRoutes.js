const express = require('express')
const { userRegister, userLogin, me, userUpdate, userDelete } = require('../controllers/userControllers')

const router = express.Router()

router.post('/', userRegister)
router.post('/login', userLogin)
router.get('/me', me)
router.put('/:id', userUpdate)
router.delete('/:id', userDelete)

module.exports = router