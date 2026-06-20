import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { upload } from "../middleware/multer";
import { updateUserAvatar } from "../controllers/userController";

const router = Router();

router.patch('/users/me/avatar', authenticate, upload.single('avatar'), updateUserAvatar);

export default router;