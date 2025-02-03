import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import connectDB from './config/db.js';

import TaskRoutes from './routes/TaskRoutes.js';

const app = express();
app.use(cors());
const port = 3000;

connectDB();

app.use('/api/task', TaskRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(``);
  console.log(`Server running at http://localhost:${port}`);
});