import express from 'express'
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshToken,
} from '../controllers/userController.js'

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
// router.route('/refresh-token').post(refreshToken)
router.route('/logout').get(logoutUser)

export default router
