const {User} = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = async(req,res) => {
    const {name,email,password} = req.body;

    const isUser = await User.findOne({email});
    if(isUser)
    {
        res.send({"msg":"User already exists, please login!",isUser})
    }
    else
    {
        bcrypt.hash(password,4,async function(err,hash){
            if(err)
            {
                res.send("Something went wrong, please try again!")
            }
            const new_user = new User({
                name,
                email,
                password:hash
            })
            try {
                await new_user.save()
                res.status(201).json({
                    _id:new_user._id,
                    name:new_user.name,
                    email:new_user.email,
                    "msg":"SignUp Successfully Done!!"
                })
            } catch (error) {
                res.status(400)
                throw new Error("Error Occured")
                
            }
        })
    }
}

const authUser = async(req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    const hashed_password = user.password;
    const user_id = user._id;

    bcrypt.compare(password,hashed_password,function(err,result){
        if(err)
        {
            res.send("Something went wrong, please try again!")
        }
        if(result){
            const token = jwt.sign({user_id},process.env.SECRET_KEY)
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                token:token
            })
        }
        else
        {
            res.status(400)
            throw new Error("Invalid email or password!")
        }
    })
};

module.exports = {registerUser,authUser}