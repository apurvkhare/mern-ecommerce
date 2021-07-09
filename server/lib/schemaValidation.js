import Joi from '@hapi/joi'

export const authSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
  phoneNumber: Joi.string()
})
