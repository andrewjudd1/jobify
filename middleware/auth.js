import jwt from 'jsonwebtoken'
import { UnauthenticatedError } from "../errors/index.js"

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    console.log(authHeader)
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        console.log('first error')
        throw new UnauthenticatedError('authentication invalid')
        
    }
    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userId: payload.userId}
        next()
    } catch (error) {
        console.log('second error')
        throw new UnauthenticatedError('authentication invalid')
    }
}

export default auth