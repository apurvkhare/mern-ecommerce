import Joi from 'joi'

export const authRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
  phoneNumber: Joi.string()
})

export const authLoginSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
})

export const checkoutSchema = Joi.object({
  userId: Joi.string().required(),
  orderItems: Joi.array().items(Joi.object({
    productName: Joi.string().required(),
    qty: Joi.number().required(),
    price: Joi.number().required(),
    image: Joi.string(),
    productId: Joi.string().required()
  })).required(),
  shippingAddress: Joi.object({
    address: Joi.string().required(),
    city: Joi.string().required(),
    pinCode: Joi.string().required(),
    state: Joi.string().required(),
  }).required(),
  paymentMethod: Joi.string().required(),
  totalPrice: Joi.number().required()
})