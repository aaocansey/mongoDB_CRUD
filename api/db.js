const mongoose = require('mongoose');


const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://StudentDB:6uHaKZCIQ7ZsfHiY@cluster0.cpscziy.mongodb.net/StudentsDB?retryWrites=true&w=majority')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connect;