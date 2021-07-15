import axios from 'axios'

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/products`)

        const products = response?.data?.products?.map(product => ({
            productId: product._id,
            productName: product.name,
            price: product.price,
            qty: product.qty,
            image: product.image,
            description: product.description
        }))

        return products
    } catch (error) {
        console.error('Error fetching Products: ', error)
        return null
    }
}

export const getProductDetails = async productId => {
    try {
        const response = await axios.get(`http://localhost:5000/api/products/${productId}`)

        const data = response.data

        const product = {
            productId: data._id,
            productName: data.name,
            price: data.price,
            qty: data.qty,
            image: data.image,
            description: data.description
        }

        return product
    } catch (error) {
        console.error('Error fetching Product Details: ', error)
        return null
    }
}