import express from "express"
import { createcourse, createLecture, editCourse, editLecture, getCourseById, getCourselecture, getCreatorCourses, getPublishedCourses, removeCourse, removeLecture } from "../controller/courseController.js"
import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js"


const courseRouter = express.Router()
//courses
  courseRouter.post("/create", isAuth , createcourse )
  courseRouter.get("/getpublished" , getPublishedCourses)
  courseRouter.get("/getcreator", isAuth, getCreatorCourses )
  courseRouter.post("/editcourse/:courseId" , isAuth , upload.single("thumbnail") , editCourse )
  courseRouter.get("/getcourse/:courseId" ,isAuth, getCourseById )
  courseRouter.delete("/remove/:courseId" , isAuth , removeCourse)


//for Lectures
courseRouter.post("/createlecture/:courseId" , isAuth , createLecture)
courseRouter.get("/courselecture/:courseId" , isAuth , getCourselecture)
courseRouter.post("/editlecture/:lectureId" ,isAuth ,upload.single("videoUrl"), editLecture)
courseRouter.delete("/removelecture/:lectureId" , isAuth , removeLecture)

  export default courseRouter