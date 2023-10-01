import connection from "@/database/Dbconfig";
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please Provide Email"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgetpassword: String,
    forgetpasswordtokenExpiry: Date,
    verifytoken: String,
    verifyTokenExpiy: Date,
})

const User = mongoose.models.users|| mongoose.model("users", UserSchema)

export default User
