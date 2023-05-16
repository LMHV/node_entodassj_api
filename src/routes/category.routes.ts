import {Router} from 'express';
import { createCategory, getCategories } from '../controllers/category.controller';
const router = Router();

router.get('/api/categories/getAll', getCategories)
router.post('/api/categories/create', createCategory)

module.exports = router;