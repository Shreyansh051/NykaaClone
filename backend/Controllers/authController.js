const UserModel = require("../Models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = "NYKAACLONESECRET"
const register = async (req, res) => {
    const search = await UserModel.find({ Email: req.body.Email })
    if (search.length) {
        res.send({ Message: "Account already registered" })
    } else {
        const data = new UserModel(req.body)
        data.save((err, success) => {
            if (err) res.send(err)
            else {
                const token = jwt.sign({ email: req.body.Email }, SECRET,{ expiresIn: "1h" })
                res.send(token)
            }
        })
    }
}
const login = async (req, res) => {
    const search = await UserModel.find({ Email: req.body.Email })
    if (search.length) {
        bcrypt.compare(req.body.Password, search[0].Password, function (err, isMatch) {
            if (err) {
                throw err
            } else if (!isMatch) {
                res.send({ Message: "Password doesn't match!" })
            } else {
                //Password matches
                const token = jwt.sign({ email: req.body.Email }, SECRET, { expiresIn: "1h" })
                res.send(token)
            }
        })
    } else res.send({ Message: "Account does not exist" })
}
const verify = async (req, res)=> {
    const token = req.body.token
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) console.log(err)
        else {
            res.send(decoded.email)
        }
    })
}
module.exports= {register,login,verify}