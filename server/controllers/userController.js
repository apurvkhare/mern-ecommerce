import asyncHandler from 'express-async-handler'
import createError from 'http-errors'
import User from '../models/userModel.js'
import { authSchema } from '../lib/schemaValidation.js'
import { signAccessToken } from '../lib/jwt.js'

/*
* Register a new user
* POST /api/auth/register
*/
export const registerUser = asyncHandler(async (req, res, next) => {
    try{
      const {name, email, password, phoneNumber} = await authSchema.validateAsync(req.body)

      const doesExist = await User.findOne({ email })
      if (doesExist)
        throw createError.Conflict(`${email} is already been registered`)

      const user = new User({name, email, password})
      const savedUser = await user.save()
      const accessToken = await signAccessToken(savedUser.id)
    //   const refreshToken = await signRefreshToken(savedUser.id)

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
export const loginUser = asyncHandler(async (req, res) => {
    res.send("Login Route")
})

/*
* Refresh Token
* POST /api/auth/refresh-token
*/
export const refreshToken = asyncHandler(async (req, res) => {
    res.send("Refresh Token Route")
})

/*
* Logout the user
* DELETE /api/auth/logout
*/
export const logoutUser = asyncHandler(async (req, res) => {
    res.send("Logout Route")
})