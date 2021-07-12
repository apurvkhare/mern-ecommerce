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