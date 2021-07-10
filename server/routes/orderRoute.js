import express from 'express'
import { getOrders } from '../controllers/orderController.js'

const router = express.Router()

router.route('/:userId').get(getOrders)

export default router