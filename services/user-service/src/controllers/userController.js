const express = require('express')
const User = require('../models/user')

async function handleRegisterUser(req,res) {
    try{
        const body = req.body
        if(!body.name || !body.email || !body.password) return res.status(400).json({msg: "All fields are required"})
        const existingUser = await user.findOne({
            email: body.email
        })
        if(existingUser){
            return res.status(409).json({message: "User Already Exists"})
        }
        await User.create({
            name: body.name,
            email: body.email,
            password: body.password
        })
        return res.status(201).json({msg: "User created successfully"})
    }
    catch(error){
        return res.status(500).json({msg: error})
    }
    
}

async function handleLoginUser(req,res){
    try{
        const {email,password} = req.body
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        if (existingUser.password !== password) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }
        return res.status(200).json({
            message: "Login successful"
        });

    }
    catch(error){
         return res.status(500).json({
            message: error.message
        });
    }



}

async function handleGetUser(req,res){
    try{
        const user = await User.findById(req.params.id)
        if(!user) res.status(404).json({message : "User Not Found"})
        return res.status(200).json(user)
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

async function handleUpdateUser(req,res){
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new: true})
        if(!updatedUser) return res.status(404).json({message: "User Not Found"})
        return res.status(200).json({message: "Updated Sucessfully", user: updatedUser})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

async function handleDeleteUser(req,res){
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if (!deletedUser) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }
        return res.status(200).json({message: "User Deleted Successfully"})

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    handleRegisterUser,
    handleLoginUser,
    handleGetUser,
    handleUpdateUser,
    handleUpdateUser,
    handleDeleteUser
}