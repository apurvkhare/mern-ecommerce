import express from 'express'
import dotenv from 'dotenv'
import connectDB from './dbConfig/db.js'
import productRouter from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use('/api/products', productRouter)

const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))