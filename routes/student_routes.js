const express = require("express");
const {
  createStudent,
  getStudents,
  updateStudents,
  deleteStudent,
} = require("../controllers/student_controllers");
const { protect } = require("../middleware/auth");

const router = express.Router();

router
  .route("/students")
  .post(protect, createStudent)
  .get(protect, getStudents)
  .put(protect, updateStudents)
  .delete(protect, deleteStudent);


module.exports = router