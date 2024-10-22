import { Router } from "express";
import { login, register } from "../controllers/authController";
import { registrationValidator } from "../validators/validation";
import handleValidationErrors from "../utils/handleValidationErrors";

const authRoutes: Router = Router();

authRoutes.post(
  "/auth/register",
  registrationValidator,
  handleValidationErrors,
  register
);

authRoutes.post("/auth/login", login);

export default authRoutes;
