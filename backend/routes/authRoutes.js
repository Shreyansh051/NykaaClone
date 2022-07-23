const { Router } = require("express")
const AuthRoute = Router()
const {register, login,verify} = require("../Controllers/authController")

AuthRoute.post("/register", register)
AuthRoute.post("/login", login)
AuthRoute.post("/verify", verify)
module.exports= AuthRoute