const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateTokens');

// REGISTER
const registerUser = asyncHandler(async (req, res) => {
    const {firstname, lastname, email, password, pic, phoneNo} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }
    
    const user = await User.create({
        firstname,
        lastname,
        email,
        password,
        pic,
        phoneNo
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phoneNo: user.phoneNo,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid user data");
    }

});

// LOGIN
const authUser = asyncHandler(async (req, res) => {

    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password)))
    {
        res.json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phoneNo: user.phoneNo,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
            pic: user.pic,
        });
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
    
});

module.exports = {registerUser, authUser};