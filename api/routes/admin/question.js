import { Router } from "express";
import { addQuestion } from "../../controllers/admin/question.js";
import validateSchema from "../../middleware/validateSchema.js";
import { questionSchema } from "../../schema/questionSchema.js";

const QuestionRoute = Router();
QuestionRoute.post(
  "/:subject/add",
  validateSchema(questionSchema),
  addQuestion
);

export default QuestionRoute;
