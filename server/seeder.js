// import { users } from './data/users.js'
import { products } from './data/products.js'
// import User from './models/userModel.js'
import Product from './models/productModel.js'
import connnectDB from './dbConfig/db.js'
import dotenv from 'dotenv'

dotenv.config()

connnectDB()

const importData = async () => {
    try {
        // await User.insertMany(users)
        await Product.insertMany(products)
        console.log('Data imported successfully')
        process.exit()
    } catch (error) {
        console.log(`Error importing data: ${error}`)
        process.exit(1)
    }
}

const deleteData = async () => {
    try {
        // await User.deleteMany()
        await Product.deleteMany()
        console.log('Data deleted successfully')
        process.exit()
    } catch (error) {
        console.log(`Error deleting data: ${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d')
    deleteData()
else
    importData()