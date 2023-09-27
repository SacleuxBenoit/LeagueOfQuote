const express = require('express')
const { getQuotes, createQuotes, updateQuotes, deleteQuotes } = require('../controllers/quoteControllers')

const router = express.Router()

router.get('/', getQuotes)
router.post('/', createQuotes)
router.put('/:id', updateQuotes)
router.delete('/:id', deleteQuotes)

module.exports = router