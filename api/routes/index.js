import { Router } from "express";
import AuthRouter from "./shared/auth.js";
import StudentRoutes from "./student/index.js";

const Routes = Router();

Routes.use("/auth", AuthRouter);
Routes.use("/student", StudentRoutes);
export default Routes;
