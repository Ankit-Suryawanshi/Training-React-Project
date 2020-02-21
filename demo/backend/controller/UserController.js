const User = require('../model/user_schema')
const mongoose = require('mongoose');
const config = require('../config/index')
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt'); 
const UserController = {
    signup(req,res) {
        const newUser =new User (req.body.user);
        console.log(req.body.user);
        newUser.save((err,data)=>{
            if(err) {
                return res.status(400).json({
                    error : err
                })
            }
            res.status(200).json({
                message : 'New user registered successfully!!'
            })
        });
    },
    
    login(req,res) {
        console.log('From node module : '+req.body.user);
        User.findOne({email : req.body.user.email},(err,user)=>{
            if(err || !user) {
                return res.status(401).json({
                    error : 'User not found'
                });
            }
            if(!user.authenticate(req.body.user.password)) {
                return res.status(401).json({   
                    error : 'Email or password is incorrect'
                });
            }
            const token = jwt.sign(
                {
                    id : user._id
                },
                config.jwtSecret
            );
            res.cookie('t',token,{
                expire : new Date() + 9999
            })
            return res.json({
                message : 'Log in sucessful',
                token,
                user : {
                    _id : user._id,
                    email : user.email,
                }
            })
            
        });
    },

    showdata(req,res) {
        console.log(req.pramas.user.token);
        
    }
}
module.exports=UserController;