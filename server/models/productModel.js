import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: false
    },
    qty: {
        type: Number,
        required: true,
        default: 2
    }
})

const Product = mongoose.model('Product', productSchema)

export default Product