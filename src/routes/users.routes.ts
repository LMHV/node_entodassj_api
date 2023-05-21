import {Router} from 'express';
import {authUser, createUser, deleteUser, findUser, loginUser} from '../controllers/user.controller';
import { verify } from 'jsonwebtoken';
const router = Router();

router.post('/api/users/login', loginUser);
router.post('/api/users/create', createUser);
router.delete('/api/users/:id', deleteUser);
router.get('/api/users/find', findUser);
router.post('/api/users/verify', authUser);

module.exports = router;