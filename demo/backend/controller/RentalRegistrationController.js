const Registration = require('../model/rental_ragistration_schema');
const MultipleImage = require('../model/multi_image_schema');
const Window = require('window');
const window = new Window();
const RentalRegistrationController = {
    registration(req,res) {
        console.log('At server');
        console.log(req.body.register);
        console.log(req.body.register.token);
        if(req.body.register.token === null) {
            res.status(400).json({
                error : 'You have to signup or login.'
            })
        }
        else {
            console.log(req.body.register)
            const token = req.body.register.token;
            const base64url = token.split('.')[1];
            const decodedvalue = JSON.parse(window.atob(base64url));
            const id = decodedvalue.id;
            const newRegistration = new Registration({
                _id : id,
                address : {
                    street : req.body.register.street,
                    area : req.body.register.area,
                    city : req.body.register.city,
                    pincode : req.body.register.pincode,
                    state : req.body.register.state,
                    geo : {
                        lat : req.body.register.lat,
                        log : req.body.register.log
                    },
                    country : req.body.register.country,
                },
                no_of_rooms : req.body.register.no_of_rooms,
                floor_no : req.body.register.floor_no,
                total_floor_size : req.body.register.total_floor_size,
                rent : req.body.register.rent,
                deposite : req.body.register.deposite,
                image : req.body.register.image 
            })
            newRegistration.save((err,data)=> {
                if(err) {
                    return res.status(400).json({
                        error : err
                    })
                }
                res.status(200).json({
                    message : "New Rental information registered"
                })
            })

        }
    },

    propertydata(req,res) {
        //console.log('Here we show the property');
        //const id = req.params.id;
        Registration.find({},(err,data)=> {
            if(err) {
                return res.status(400).json({
                    error : 'Not able to load the data'
                })
            }
            else {
                return res.json({
                    data : data
                })
            }
        });
    },
    multipleimage(req,res) {
        console.log('At server');
        console.log(req.body.user);
        console.log(req.body.user.token);
        if(req.body.user.token === null) {
            res.status(400).json({
                error : 'You have to signup or login.'
            })
        }
        else {
            console.log(req.body.user)
            const token = req.body.user.token;
            const base64url = token.split('.')[1];
            const decodedvalue = JSON.parse(window.atob(base64url));
            const id = decodedvalue.id;
            const  multipleimage= new MultipleImage({
                _id : id,
               image : req.body.user.image
            })
            multipleimage.save((err,data)=> {
                if(err) {
                    return res.status(400).json({
                        error : err
                    })
                }
                res.status(200).json({
                    message : "New Images Uploaded"
                })
            })

        }
    },

    moreimage(req,res) {
        //console.log(req.params.id);
        const id = req.params.id;
        MultipleImage.findOne({_id : id},(err,data)=>
        {
            if(err) {
                return res.status(400).json({
                    error : "The can't be load" 
                })
            }
            else {
                res.json({
                    data : data 
                })
            }
        }) 

    },
    moreinfo(req,res) {
        //console.log(req.body.info.token);
        if(req.body.info.token===null)
        {
            res.status(400).json({
                error : 'You have to login or signup first.'
            })
        }
        else {
            const token = req.body.info.token;
            const base64url = token.split('.')[1]
            const decodedvalue = JSON.parse(window.atob(base64url));
            const id = decodedvalue.id;
            const info =req.body.info.more_info
            Registration.updateOne({_id : id},{$set:{extrainfo : info}},(err,data)=>{
                if(err){
                    res.status(400).json({
                        error : 'Not Updated'
                    })
                }
                res.json({
                    data : data,
                    message : 'Extra Details Are Added'
                })

            })
        }
    },
    moreinfoget(req,res) {
        //console.log(req.params.id)
        if(req.params.id == null) {
            return res.status(401).json({
                error : 'Please login to show Data'
            });
        }
        else {
            Registration.findOne({_id : req.params.id},(err,data)=> {
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

    extrainfoget(req,res) {
        console.log('Here we are'); 
        if(req.params.id == null) {
            return res.status(400).json({
                error : 'Login to show data'
            })
        }
        else {
            Registration.findOne({_id : req.params.id},(err,data)=>{
                if(err) {
                    return res.status(401).json({
                        error : 'User not found with given id'
                    });
                } 
                else {
                    return res.json({
                        data : data.extrainfo
                    })
                }
            })
        }
    }

}
module.exports = RentalRegistrationController;