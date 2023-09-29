const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel');
const { use } = require("../routes/quoteRoutes");
// @desc Register user
// @route POST /api/users
// @access Public
const userRegister = asyncHandler(async (req,res) => {
    const { username, email, password} = req.body

    if(!username || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exist')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid data')
    }
})

// @desc Login user
// @route POST /api/users/login
// @access Publlic
const userLogin = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'User Login'})
})

// @desc User data
// @route GET /api/users/me
// @access Private
const me = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'User Data'})
})

// @desc Update user
// @route UPDATE /api/users/:id
// @access Private
const userUpdate = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'User Update'})
})

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private
const userDelete = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'User Delete'})
})

module.exports = {
    userRegister,
    userLogin,
    me,
    userUpdate,
    userDelete
}