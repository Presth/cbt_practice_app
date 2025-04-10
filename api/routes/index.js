import { Router } from "express";
import AuthRouter from "./shared/auth.js";
import StudentRoutes from "./student/index.js";
import AdminRoutes from "./admin/index.js";
import { Authenticate } from "../middleware/Authentication.js";

const Routes = Router();

Routes.use("/auth", AuthRouter);
Routes.use("/student", Authenticate("user"), StudentRoutes);
Routes.use("/admin", AdminRoutes);

export default Routes;
