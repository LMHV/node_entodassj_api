import {Router} from 'express';
import { createCategory, getCategories } from '../controllers/category.controller';
import { verifyToken } from '../middleware/verifyToken';

const router = Router();

router.get('/api/categories/getAll', verifyToken ,getCategories)
router.post('/api/categories/create', createCategory)

module.exports = router;