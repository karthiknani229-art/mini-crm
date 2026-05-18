import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import leadRoutes from './routes/leadRoutes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://mini-crm-pi-woad.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mini CRM API Running');
});

app.use('/api/leads', leadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});