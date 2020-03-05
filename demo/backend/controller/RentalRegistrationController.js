const Registration = require('../model/rental_ragistration_schema');

const RentalRegistrationController = {
    registration(req,res) {
        if(req.body.token == null) {
            res.status(400).json({
                error : 'You have to signup or login.'
            })
        }
        else {
            const token = req.body.token;
            const base64url = token.split('.')[1];
            const decodedvalue = Json.parse(window.atob(base64url));
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
    }
}
module.exports = RentalRegistrationController;