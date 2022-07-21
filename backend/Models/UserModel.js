const { Schema, model } = require("mongoose")
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
const UserModel = model("user", userSchema)

module.exports= UserModel