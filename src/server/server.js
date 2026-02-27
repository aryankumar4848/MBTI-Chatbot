const express = require('express');
const connectDB = require('./config/db');
const validateEnv = require('./config/validateEnv');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const rateLimit = require('./middleware/rateLimit');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
validateEnv();

const app = express();
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(express.json());
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS origin not allowed'));
  },
  credentials: true,
}));
app.use(rateLimit({ windowMs: 60_000, max: 120 }));

connectDB();
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/ready', (req, res) => {
  const dbReady = mongoose.connection.readyState === 1;
  if (!dbReady) {
    return res.status(503).json({ status: 'not_ready', db: 'disconnected' });
  }
  return res.json({ status: 'ready', db: 'connected' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
