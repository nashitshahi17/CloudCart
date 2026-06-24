const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


async function handleRegisterUser(req,res) {
    try{
        const {name,email,password} = req.body
        if(!name || !email || !password) return res.status(400).json({msg: "All fields are required"})
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message: "User Already Exists"})
        }
        
        const hashedPassword = await bcrypt.hash(password,10)

        await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })
        return res.status(201).json({msg: "User created successfully"})
    }
    catch(error){
        return res.status(500).json({msg: error.message})
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

        const isMatch = await bcrypt.compare(
            password,
            existingUser.password
        )

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
            id: existingUser._id,
            email: existingUser.email,
            role: existingUser.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        return res.status(200).json({
            message: "Login successful",
            token
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
        if(!user) return res.status(404).json({message : "User Not Found"})
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

async function handleProfile(req, res) {

    try {

        const user = await User.findById(
            req.user.id
        ).select('-password');

        return res.status(200).json(user);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
}

async function handleAdminDashboard(req,res){

    return res.status(200).json({
        message: 'Welcome Admin'
    })

}

module.exports = {
    handleRegisterUser,
    handleLoginUser,
    handleGetUser,
    handleUpdateUser,
    handleDeleteUser,
    handleProfile,
    handleAdminDashboard
}