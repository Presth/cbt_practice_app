import express from "express";
import { createAccount, login } from "../../controllers/shared/auth.js";

const AuthRouter = express.Router();

AuthRouter.post("/login", login);

AuthRouter.post("/register", createAccount);

export default AuthRouter;
