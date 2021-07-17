import asyncHandler from 'express-async-handler'
import createError from 'http-errors'
import User from '../models/userModel.js'
import { authRegisterSchema, authLoginSchema } from '../lib/schemaValidation.js'
import { signAccessToken } from '../lib/jwt.js'

/*
* Register a new user
* POST /api/auth/register
*/
export const registerUser = asyncHandler(async (req, res, next) => {
    try{
      const {name, email, password, phoneNumber} = await authRegisterSchema.validateAsync(req.body)

      const doesExist = await User.findOne({ email })
      if (doesExist)
        throw createError.Conflict(`${email} is already been registered`)

      const user = new User({name, email, password, phoneNumber})
      const savedUser = await user.save()
      const accessToken = await signAccessToken(savedUser.id)

      res.send({ accessToken })
    }catch(err){
        if(err.isJoi === true) {
            err.status = 422
            next(err)
        }
        console.error("Error Registering User: ", err)
    }
})

/*
* Login a user
* POST /api/auth/login
*/
export const loginUser = asyncHandler(async (req, res, next) => {
  try{
    const { email, password } = await authLoginSchema.validateAsync(req.body)

    const user = await User.findOne({ email })
    if (!user)
      throw createError.NotFound(`User is not registerd`)
    
    const isPasswordValid = await user.verifyPassword(password) 
    if(!isPasswordValid)
      throw createError.Unauthorized('Invalid email or password')

    const accessToken = await signAccessToken(user.id)

    res.send({ accessToken, customerId: user.id, customerName: user.name })
  }catch(err){
      if(err.isJoi === true) {
          return next(createError.BadRequest('Invalid email or password'))
      }
      console.error("Error Registering User: ", err)
      next(error)
  }
})

/*
* Logout the user
* DELETE /api/auth/logout
*/
export const logoutUser = asyncHandler(async (req, res) => {
    res.send("Logout Route")
})