import {Router} from 'express';
import { createUser, deleteUser, findUser, authenticateUser} from '../controllers/user.controller';
import { verify } from 'jsonwebtoken';
import { verifyToken } from '../middleware/verifyToken';
const router = Router();

//router.use(verifyToken(token))

router.post('/api/users/login', authenticateUser);
router.post('/api/users/create', createUser);
router.delete('/api/users/:id', deleteUser);
router.get('/api/users/find', findUser);

module.exports = router;