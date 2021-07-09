import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false,
        unique: true
    }
})

// userSchema.pre('save', async () => {
//     const salt = await bcrypt.genSalt(7)
//     this.password = await bcrypt.hash(this.password, salt)
// })

const User = mongoose.model('User', userSchema)

export default User