import express from 'express';
import {
  getTasks
} from '../controllers/TaskController.js';

const router = express.Router();

router.post('/', getTasks);

export default router;
