import { Router } from "express";
import SubjectsRoute from "./subject.js";

const StudentRoutes = Router();

StudentRoutes.use("/subjects", SubjectsRoute);

export default StudentRoutes;
