import JWT from 'jsonwebtoken'
import createError from 'http-errors'

export const signAccessToken = (email) => {
    const promiseCb = (res, rej) => {
        const payload = {}
        const secret = process.env.JWT_SECRET
        const options = {
            expiresIn: '1h',
            issuer: 'mern.com',
            audience: email
        }

        JWT.sign(payload, secret, options, (err, token) => {
            if(err){
                console.error("Error sign JWT", err.message)
                rej(createError.InternalServerError())
                return
            }
            res(token)
        })
    }
    
    return new Promise(promiseCb)
}