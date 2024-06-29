import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';

const router = express.Router();

router.post<{}, any>('/add', async (req, res) => {
  return res.status(202).json(req.body);
});

export default router;
