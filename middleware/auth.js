const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        console.log(token)
        const decoded = jwt.verify(token, keys.JWT_SECRET)
        console.log(decoded)
        req.uid = decoded.id
        next()
    } catch {
        res.status(401).send({token: 'Invalid Token. Please Log in'})
    }
}

module.exports = auth
