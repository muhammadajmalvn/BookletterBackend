const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "6h"
    })
}

module.exports = generateToken