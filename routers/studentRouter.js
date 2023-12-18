const express = require("express");
const studentController= require('../controllers/studentController');
const router = express.Router();






router.post("/student/add", studentController.stu_add);
router.get("/students", studentController.stu_get_all);
router.get("/student/:id", studentController.stu_get_id);
router.delete("/student/delete/:id",studentController.stu_delete);
router.put("/student/update/:id",studentController.stu_update)

module.exports=router;