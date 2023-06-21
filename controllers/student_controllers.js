let studentsModel = require('../models/students_model') 

exports.createStudent = async (req, res,next) => {
    const {name, age, gen} = req.body;

    const userId = req.user._id;
    try {
        const student = new studentsModel({name, age, gen,userId})
        await student.save();
        res.send({success:true, data:student})
   
    } catch (error) {
        console.log(error)
        res.send({success:false, data:null})
    }

    next()
};

exports.getStudents = async(req, res, next) => {
    try {
        const student = await studentsModel.find();
        res.send({success:true, data:student})   
    } catch (error) {
        console.log(error)
        res.send({success:false, data:null})
    }

    next()
};

exports.updateStudents = async (req, res, next) => {
    try {
        const {name,gen} = req.body;
        const userId = req.user._id;

        const user = await studentsModel.findOne({name});
        if(!user){
            return res.send({success:false, message:"data not found"})
        }

        if(user.userId.toString() !== userId.toString()){
            return res.send({success:false, message:"access denied"});
        }

        const student = await studentsModel.findOneAndUpdate(user._id, {gen});

        res.send({success:true, data:student})
    } catch (error) {
        console.log(error)
        res.send({success:false, data:null})
    }
    next()
};

exports.deleteStudent = async (req, res, next) => {

    try {
        const {name} = req.body;
        const userId = req.user._id;
        const user = await studentsModel.findOne({name});

        if(!user){
            return res.send({success:false, message:"data not found"})
        }

        if(user.userId.toString() !== userId.toString()){
            return res.send({success:false, message:"access denied"});
        }

        const student = await studentsModel.findOneAndDelete({name})
        res.send({success:true, data:student})
    } catch (error) {
        console.log(error)
        res.send({success:false, data:null})
    }
    next()
};
