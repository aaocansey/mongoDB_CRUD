const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gen: Number,
  userId: mongoose.ObjectId,
  date:{type:Date, default:Date.now()}
});

const studentsModel = mongoose.model("stds", studentSchema);

module.exports = studentsModel;
