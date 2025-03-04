const authRouter = require('express').Router()
const AuthController = require('../controllers/auth')

authRouter.post('/login', AuthController.login)

module.exports = authRouter
