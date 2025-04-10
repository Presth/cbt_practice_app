import { Router } from "express";
import QuestionRoute from "./question.js";
import SubjectRoute from "./subject.js";

const AdminRoutes = Router();

AdminRoutes.use("/subjects", SubjectRoute);
AdminRoutes.use("/questions", QuestionRoute);

export default AdminRoutes;
