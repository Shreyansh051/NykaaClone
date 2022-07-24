const { Schema, model } = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = new Schema({
    Email: {type:String},
    Phone: {type:Number},
    Password: String,
    Name: { type: String, default: "USER" },
    Photo: { type: String, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"},
    Address: Object,
    WishList: Array,
    Cart: Array,
    ID: String,
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