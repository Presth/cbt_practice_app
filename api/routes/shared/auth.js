import express from "express";
import { createAccount, login } from "../../controllers/shared/auth.js";
import { loginSchema, createAccountSchema } from "../../schema/authSchema.js";
import validateSchema from "../../middleware/validateSchema.js";

const AuthRouter = express.Router();

AuthRouter.post("/login", validateSchema(loginSchema), login);
AuthRouter.post(
  "/register",
  validateSchema(createAccountSchema),
  createAccount
);

export default AuthRouter;
