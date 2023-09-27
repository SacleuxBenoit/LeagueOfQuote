const express = require('express')
const app = express()
const env = require('dotenv').config()
const port = process.env.PORT

app.use('/api/quotes', require('./routes/quoteRoutes'))

app.listen(port, () => {
    console.log(`PORT IS LISTENING AT PORT : ${port}`)
})