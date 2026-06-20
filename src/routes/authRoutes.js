import { Router } from "express";
import { loginUserSchema, registerUserSchema, requestResetEmailSchema, resetPasswordSchema } from "../validations/authValidation.js";
import { loginUser, logoutUser, registerUser, requestResetEmail, resetPassword, updateUserAvatar } from "../controllers/authController.js";
import { celebrate } from "celebrate";
import { refreshUserSession } from "../controllers/authController.js";
import { upload } from "../middleware/multer.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/refresh', refreshUserSession);
router.post('/auth/logout', logoutUser);

router.post('/auth/request-reset-email', celebrate(requestResetEmailSchema), requestResetEmail);
router.post('/auth/reset-password', celebrate(resetPasswordSchema), resetPassword);
router.patch('/users/me/avatar', authenticate, upload.single('avatar'), updateUserAvatar);



export default router;