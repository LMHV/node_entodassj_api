import {Router} from 'express';
import {createUser, deleteUser, findUser} from '../controllers/user.controller';
const router = Router();

router.post('/api/users/login', findUser);
router.post('/api/users/create', createUser);
router.delete('/api/users/:id', deleteUser)

module.exports = router;