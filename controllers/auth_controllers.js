const userModel = require("../models/users_model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.signUpUser = (req, res, next) => {
  const { name, email, password } = req.body;

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  
  const user = new userModel({ name, email, password: hash });
  user.save();
  
  if(!user){
    return res.send({message:'unsuccessful', data:null})
    next();
  }

  const token = jwt.sign({id:user._id}, "node jwt")
  res
    .cookie("token", token, { expire: 36000 + Date.now() })
    .send({ message: "successful", data: user });
};

exports.loginUser = async (req, res, next) => {
    const {email, password } = req.body;


    const user = await userModel.findOne({email});


    if(!user){
      return res.send({message:'unsuccessful', response:'invalid credentials'})
      next();
    }
  
    const isPassword = bcrypt.compareSync(password, user.password)
    if(!isPassword){
        return res.send({message:'unsuccessful', response:'invalid credentials'})
        next(); 
    }


    const token = jwt.sign({id:user._id}, "node jwt")
    res
      .cookie("token", token, { expire: 36000 + Date.now() })
      .send({ message: "successful", data: user });
  };