import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './api/auth.js';

const {json} = bodyParser;
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
