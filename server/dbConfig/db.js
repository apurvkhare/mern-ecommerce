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

export default connnectDB