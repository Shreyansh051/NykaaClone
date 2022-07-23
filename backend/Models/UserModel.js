const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new Schema({
    Email: String,
    Phone: Number,
    Password: String,
    Name: String,
    Gender: {Type: String, enum: ["male", "female", "others"]},
    Address: Object,
    WishList: Array,
    Cart: Array,
})
userSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(this.Password, salt)
        this.Password = hash
        next()
    } catch(err){ next(err)}
})
const UserModel = model("user", userSchema)

module.exports= UserModel