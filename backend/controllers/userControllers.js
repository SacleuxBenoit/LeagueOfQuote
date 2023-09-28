const asyncHandler = require("express-async-handler");

// @desc Register user
// @route POST /api/users
// @access Public
const userRegister = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'User register'})
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