import { Router } from "express";
import { getAllSubjects } from "../../controllers/student/subject.js";

const SubjectsRoute = Router();

SubjectsRoute.get("/", getAllSubjects);

export default SubjectsRoute;
