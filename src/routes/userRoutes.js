import { Router } from 'express';
import { upload } from '../middleware/multer.js';
import { uploadAvatar } from '../controllers/userController.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.patch('/users/me/avatar', authenticate, upload.single('avatar'), uploadAvatar);

export default router;
