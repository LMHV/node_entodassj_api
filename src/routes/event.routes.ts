import {Router} from 'express';
import { createEvent, getEventsByCategory } from '../controllers/event.controller';
import { verifyToken } from '../middleware/verifyToken';
const router = Router();

router.get('/api/event/getbycategory', verifyToken ,getEventsByCategory)
router.post('/api/event/create', createEvent)

module.exports = router;