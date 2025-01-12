import express from 'express';
import { saveUser } from '../controllers/roomController';
import { createRoom } from '../controllers/createRoom';

const router = express.Router();

router.post('/join-room', saveUser);
router.post('/create-room', createRoom);
export default router;
