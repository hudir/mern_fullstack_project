// Task: add all cotrollers functions here 
// and also create seperate user and product controllers
const User = require('../models/User')

const signUpController = (req,res)=>{
    // check if there is already the same username
    User.findOne({username:req.body.username},(err,data)=>{
        if(err){
            res.json({err:"valid check fall"})
        } else {
            // console.log(data)
            if(data){
                res.json({err: "User already exist"})
            } else {
                const saveUser = new User({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    address:{
                        street: req.body.street,
                        city: req.body.city,
                        zipcode: req.body.zipcode
                    },
                    created:new Date().toDateString()
                })
                saveUser.save((err,data)=>{
                    if(err) throw err
                    // console.log(data)
                    res.json({
                        userLogin:true,
                        user:data.username
                    })
                })
            }
        }
    })
   
}

module.exports = signUpController