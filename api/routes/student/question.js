import { Router } from "express";
import { getAllQuestions } from "../../controllers/student/question.js";

const QuestionRoute = Router();

QuestionRoute.get("/", getAllQuestions);

export default QuestionRoute;
