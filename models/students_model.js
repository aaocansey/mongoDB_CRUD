const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gen: Number,

});

const studentsModel = mongoose.model("stds", studentSchema);

module.exports = studentsModel;
