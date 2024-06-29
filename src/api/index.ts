import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';

const router = express.Router();

router.post<{}, any>('/add', async (req, res) => {
  console.log(req.body);
  return res.status(202).json({ success: true })
});

export default router;
