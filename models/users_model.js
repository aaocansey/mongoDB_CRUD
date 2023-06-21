const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'please provide valid email'],
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["student", "teacher"],
        default:"student",
    },
    date:{
        type: Date,
        default: Date.now(),
    }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel 