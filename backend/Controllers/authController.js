const UserModel = require("../Models/UserModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const SECRET = "NYKAACLONESECRET"
//<------------------------------------------------------------------------------------------------>
const register = async (req, res) => {
    const search = await UserModel.find({ Email: req.body.Email })
    if (search.length) {
        res.send({ Message: "Account already registered", data: search[0].ID })
    } else {
        const data = new UserModel(req.body)
        data.save((err, success) => {
            if (err) res.send(err)
            else {
                const Token = jwt.sign({ email: req.body.Email }, SECRET,{ expiresIn: "1h" })
                res.send({ Token: Token, Name: req.body.Name, Email: req.body.Email, ID: req.body.Id })
            }
        })
    }
}
//<------------------------------------------------------------------------------------------------>
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
                const Token = jwt.sign({ email: req.body.Email }, SECRET, { expiresIn: "1h" })
                res.send({ Token:Token, Name:req.body.Name, Email:req.body.Email, ID:req.body.Id })
            }
        })
    } else res.send({ Message: "Account does not exist" })
}
//<------------------------------------------------------------------------------------------------>
const verify = async (req, res)=> {
    const token = req.body.token
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) res.send({ Message: "failed"})
        else {
            res.send(decoded.email)
        }
    })
}
//<------------------------------------------------------------------------------------------------>
module.exports = { register, login, verify }



