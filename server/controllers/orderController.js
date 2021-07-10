import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

/*
* Fetch all orders
* GET /api/orders/:userId
*/
export const getOrders = asyncHandler(async (req, res, next) => {
    try{
      const orders = await Order.find({ userId: req.params.userId })

      res.send({ orders })
    }catch(err){
        console.error("Error Fetching orders: ", err)
    }
})