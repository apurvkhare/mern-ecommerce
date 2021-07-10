import JWT from 'jsonwebtoken'
import createError from 'http-errors'

export const signAccessToken = (userId) => {
    const promiseCb = (res, rej) => {
        const payload = {}
        const secret = process.env.JWT_SECRET
        const options = {
            expiresIn: '1h',
            issuer: 'mern.com',
            audience: userId
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

export const verifyAccessToken = (req, res, next) => {
    if(!req.headers['authorization']) return next(createError.Unauthorized())
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]

    JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if(err){
            const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
            return next(createError.Unauthorized(message))
        }
        req.payload = payload
        next()
    })
}