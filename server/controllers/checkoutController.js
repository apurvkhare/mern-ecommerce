import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import { checkoutSchema } from '../lib/schemaValidation.js'
import Razorpay from 'razorpay'

/*
* Set Order details
* POST /api/checkout
*/
export const setOrderDetails = asyncHandler(async (req, res, next) => {
    try{
      const { userId, orderItems, shippingAddress, paymentMethod, totalPrice } = await checkoutSchema.validateAsync(req.body)
  
      if(!orderItems || orderItems.length === 0){
        throw createError.BadRequest("No order items found")
      }

      const order = new Order({
          userId,
          orderItems,
          shippingAddress,
          paymentMethod,
          totalPrice
      })

      const createdOrder = order.save()

      const rzp = new Razorpay({
        key_id: process.env.RZP_PUBLIC_KEY,
        key_secret: process.env.RZP_SECRET_KEY,
      });

      const options = {
          amount: totalPrice * 100,
          currency: "INR",
          receipt: "receipt_order_74394",
      };

      const orderPayment = await rzp.orders.create(options);
    
      res.send({ createdOrder, orderPayment })
    }catch(err){
        if(err.isJoi === true) {
            return next(createError.BadRequest('Invalid Request'))
        }
        console.error("Error creating order: ", err)
        next(error)
    }
  })

/*
* Set Payment details
* POST /api/checkout/payment
*/
export const setPaymentDetails = asyncHandler((req, res, next) => {
    res.send("Payment Route")
})