import { Router } from "express";
import { addSubject } from "../../controllers/admin/subject.js";
import validateSchema from "../../middleware/validateSchema.js";
import { subjectSchema } from "../../schema/subjectSchema.js";

const SubjectRoute = Router();

SubjectRoute.post("/", validateSchema(subjectSchema), addSubject);

export default SubjectRoute;
