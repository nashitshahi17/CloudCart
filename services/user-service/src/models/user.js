const mongoose = require('mongoose')
const ROLES = require('../constants/roles')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: Object.values(ROLES),
        default: 'USER'
    }
},{timestamps: true})

const User = mongoose.model('User',userSchema)

module.exports = User