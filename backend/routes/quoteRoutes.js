const express = require('express')
const { getQuotes, createQuotes, updateQuotes, deleteQuotes } = require('../controllers/quoteControllers')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', protect, getQuotes)
router.post('/', protect, createQuotes)
router.put('/:id', protect, updateQuotes)
router.delete('/:id', protect, deleteQuotes)

module.exports = router