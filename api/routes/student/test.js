import { Router } from "express";
import { startTest, stopTest } from "../../controllers/student/test.js";

const TestRoutes = Router();

TestRoutes.post("/:subject/start", startTest);
TestRoutes.post("/:subject/end", stopTest);

export default TestRoutes;
