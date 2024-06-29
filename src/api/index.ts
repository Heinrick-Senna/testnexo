import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';

const router = express.Router();

router.post<{}, any>('/add', async (req, res) => {
  console.log("This MotherFuck Body", req.body);
  console.log("This MotherFuck REQ", req);
  return res.status(202).json({ success: true })
});

export default router;
