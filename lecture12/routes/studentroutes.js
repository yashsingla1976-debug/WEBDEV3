const studentcontroller = require("../controller/studentController")
const express = require("express");
const router = express.Router();

///Read Operation
router.get("/students",studentcontroller.getStudents)

//Read operation with id
router.get("/students/:rollNo",studentcontroller.getStudentById)
  

//Create
router.post("/students",studentcontroller.createStudent)

////update
router.put("/students/:rollNo",studentcontroller.updateStudent)

 

//delete
router.delete("/students/:rollNo",studentcontroller.deleteStudent)


module.exports = router;