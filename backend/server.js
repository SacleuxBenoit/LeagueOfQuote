const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express()
const env = require('dotenv').config()
const port = process.env.PORT

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/quotes', require('./routes/quoteRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`PORT IS LISTENING AT PORT : ${port}`)
})
