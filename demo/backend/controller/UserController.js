const User = require('../model/user_schema')
const mongoose = require('mongoose');
const config = require('../config/index')
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
const Window = require('window');
const window = new Window(); 
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
                message : 'New user registered successfully!!. Please login to continue'
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
                    role : user.role
                }
            })
            
        });
    },

    showdata(req,res) {
        if(req.params.token == null) {
            return res.status(401).json({
                error : 'Please login to show profile'
            });
        }
        else {
            const token = req.params.token;
            const base64url = token.split('.')[1];
            const decodedvalue = JSON.parse(window.atob(base64url));
            const id = decodedvalue.id;
            console.log(id);
            User.findOne({_id : id},(err,data)=> {
                if(err) {
                    return res.status(401).json({
                        error : 'User not found with given id'
                    });
                } 
                else {
                    return res.json({
                        data : data
                    })
                }
            });
        }
    },

    deletedata(req,res) {
        const token = req.params.token;
        const base64url = token.split('.')[1];
        const decodedvalue = JSON.parse(window.atob(base64url));
        const id = decodedvalue.id;
        console.log(id);
        User.deleteOne({ _id: id }, (err, result) => {
            if(err){
              throw err;
            }
            res.json({
                message : "Account Deleted",
                result})
          });
            
    }, 
    updatedata(req,res) {
        console.log(req.body.user.first_name);
        console.log(req.body.user.last_name);
        console.log(req.body.user.email);
        console.log(req.body.user.contact);
        console.log(req.body.user.address);
        console.log(req.body.user.password);
    }
}
module.exports=UserController;