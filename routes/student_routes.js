const express = require("express");
const {
  createStudent,
  getStudents,
  updateStudents,
  deleteStudent,
} = require("../controllers/student_controllers");

const router = express.Router();

router
  .route("/students")
  .post(createStudent)
  .get(getStudents)
  .put(updateStudents)
  .delete(deleteStudent);


module.exports = router