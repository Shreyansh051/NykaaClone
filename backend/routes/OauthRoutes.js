const { Router } = require("express")
const OAuthRoute = Router()
const OAuth = require("../Controllers/googleOAuth")
//<----------------------------------------------------------------> Routes
OAuthRoute.post("/",OAuth)

//<----------------------------------------------------------------> 
module.exports = OAuthRoute