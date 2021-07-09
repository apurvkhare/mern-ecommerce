import mongoose from 'mongoose'

const connnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB connected successfully`)
    } catch (error) {
        console.error(`Error connection MongoDB: ${error}`)
        process.exit(1)
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected.')
  })
  
process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
})

export default connnectDB