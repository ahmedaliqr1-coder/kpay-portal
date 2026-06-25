import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'KPAY Portal API is running' });
});

// Payment Gateway Routes
app.get('/api/payments', (req, res) => {
  res.json({
    payments: [
      { id: 1, amount: 100, status: 'completed', date: '2024-01-15' },
      { id: 2, amount: 250, status: 'pending', date: '2024-01-16' },
      { id: 3, amount: 500, status: 'failed', date: '2024-01-17' }
    ]
  });
});

app.post('/api/payments', (req, res) => {
  const { amount, description } = req.body;
  res.json({
    id: Math.random().toString(36).substr(2, 9),
    amount,
    description,
    status: 'pending',
    date: new Date().toISOString()
  });
});

app.get('/api/transactions', (req, res) => {
  res.json({
    transactions: [
      { id: 1, type: 'payment', amount: 100, status: 'completed', date: '2024-01-15' },
      { id: 2, type: 'refund', amount: 50, status: 'completed', date: '2024-01-16' },
      { id: 3, type: 'payment', amount: 250, status: 'pending', date: '2024-01-17' }
    ]
  });
});

// Serve React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`KPAY Portal Server running on http://localhost:${PORT}`);
});
