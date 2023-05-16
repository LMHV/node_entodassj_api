import {Router} from 'express';
import { createEvent, getEventsByCategory } from '../controllers/event.controller';
const router = Router();

router.get('/api/event/getbycategory', getEventsByCategory)
router.post('/api/event/create', createEvent)

module.exports = router;