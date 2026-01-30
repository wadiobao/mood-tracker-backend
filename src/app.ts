import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import moodRoutes from './routes/moods';

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/moods', moodRoutes);

export default app;
