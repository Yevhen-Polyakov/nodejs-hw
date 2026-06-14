import { Router } from "express";
import { loginUserSchema, registerUserSchema } from "../validations/authValidation.js";
import { loginUser, logoutUser, registerUser } from "../controllers/authController.js";
import { celebrate } from "celebrate";
import { refreshUserSession } from "../controllers/authController.js";

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/refresh', refreshUserSession);
router.post('/auth/logout', logoutUser);
export default router;