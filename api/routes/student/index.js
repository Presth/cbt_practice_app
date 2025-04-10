import { Router } from "express";
import SubjectsRoute from "./subject.js";
import QuestionRoute from "./question.js";
import TestRoutes from "./test.js";

const StudentRoutes = Router();

StudentRoutes.use("/subjects", SubjectsRoute);
StudentRoutes.use("/:subject/questions", QuestionRoute);
StudentRoutes.use("/test/", TestRoutes);

export default StudentRoutes;
