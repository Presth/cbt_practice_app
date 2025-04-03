import { Router } from "express";
import AuthRouter from "./shared/auth.js";

const Routes = Router();

Routes.use("/auth", AuthRouter);
export default Routes;
