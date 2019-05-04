const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

const genToken = (user) => {
    const validity = 60 * 60 * 24 * 90
    const payload = { 
        id: user._id,
        handle: user.handle,
        role: user.role
     }
    const token = jwt.sign(payload, keys.JWT_SECRET, { expiresIn: validity } )
    return token
}

module.exports = genToken