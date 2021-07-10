import express from 'express'
import { setOrderDetails, setPaymentDetails } from '../controllers/checkoutController.js'

const router = express.Router()

router.route('/').post(setOrderDetails)
// router.route('/payment').post(setPaymentDetails)

export default router