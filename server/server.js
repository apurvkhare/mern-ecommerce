import express from 'express'
import dotenv from 'dotenv'
import connectDB from './dbConfig/db.js'
import productRouter from './routes/productRoutes.js'
import authRouter  from './routes/authRoutes.js'
import morgan from 'morgan'
import createError from 'http-errors'

dotenv.config()

connectDB()

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productRouter)
app.use('/api/auth', authRouter)

app.use(async (req, res, next) => {
    next(createError.NotFound("Route not found"))
})
  
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
  })
})

const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))