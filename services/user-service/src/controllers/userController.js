const catchAsync = require('../utils/catchAsync')
const userService = require('../services/userService')
const { successResponse } = require('../utils/response')


const handleRegisterUser= catchAsync(async(req,res) =>{
    const user = await userService.registerUser(req.body)
    return successResponse(res,201,"User Registered Successfully",user)
})

const handleLoginUser = catchAsync(async(req,res)=>{
    const result = userService.loginUser(req.body)
    return successResponse(res,200,"Login successful",result)

})

const handleGetUser = catchAsync(async(req,res)=>{
    const user = await userService.getUserById(req.params.id)
    return successResponse(res,200,"User Fetched Successfully",user)
})

const handleUpdateUser = catchAsync(async(req,res)=>{
    const updatedUser = await userService.updateUser(req.params.id,req.body)
    return successResponse(res,200,"Updated Sucessfully", updatedUser)
})

const handleDeleteUser= catchAsync(async(req,res)=>{
    const deletedUser = await userService.deleteUser(req.params.id)
    return successResponse(res,200,"User Deleted Successfully")
})

const handleProfile = catchAsync(async(req, res) =>{
    const user = await userService.getProfile(req.user.id)
    return successResponse(res,200,"Profile Fetched Successfullu",user);
})

const handleAdminDashboard = catchAsync(async(req,res)=>{
    return successResponse(res,200,'Welcome Admin')
})

module.exports = {
    handleRegisterUser,
    handleLoginUser,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser,
    handleProfile,
    handleAdminDashboard
}