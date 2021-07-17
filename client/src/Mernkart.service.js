import axios from 'axios'

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`/api/products`)

        const products = response?.data?.products?.map(product => ({
            productId: product._id,
            productName: product.name,
            price: product.price,
            qty: product.qty,
            image: product.image,
            description: product.description,
        }))

        return products
    } catch (error) {
        console.error('Error fetching Products: ', error)
        return null
    }
}

export const getProductDetails = async productId => {
    try {
        const response = await axios.get(`/api/products/${productId}`)

        const data = response.data

        const product = {
            productId: data._id,
            productName: data.name,
            price: data.price,
            qty: data.qty,
            image: data.image,
            description: data.description,
        }

        return product
    } catch (error) {
        console.error('Error fetching Product Details: ', error)
        return null
    }
}

export const loginUser = async (email, password) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await axios.post(
            `/api/auth/login`,
            { email, password },
            config
        )

        const userData = response.data

        return userData
    } catch (error) {
        console.error('Error Logging in the User: ', error)
        return null
    }
}

export const checkout = async (
    userId,
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice
) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }

        const response = await axios.post(
            `/api/checkout`,
            { userId, orderItems, shippingAddress, paymentMethod, totalPrice },
            config
        )

        const userData = response.data

        return userData
    } catch (error) {
        console.error('Error Logging in the User: ', error)
        return null
    }
}
