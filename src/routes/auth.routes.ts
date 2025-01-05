import { Router } from 'express';
import { register } from '../controllers/auth';
import { catchAsync } from '../utils';

const router = Router();

router.post('/register', catchAsync(register));

export default router;
