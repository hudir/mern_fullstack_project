const User = require("../models/User");


const logInController = (req, res) => {
    // check if user already exists
    User.findOne({email: req.body.email}, (err, data) => {
        if(err){
            console.log(err);
        } else {
            // If User exists in database 
            if(data) {
                // check if password matches
                if (data.password === req.body.password) {
                    res.json(data._id)

                } else {
                    res.json("wrong password")
                }
                console.log(data)

            // User does not exist => sign up first
            } else {
                res.json("User not found, please sign up first")
            }
        }
    })
}   

module.exports = logInController