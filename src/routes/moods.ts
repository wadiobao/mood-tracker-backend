import { Router, Response } from 'express';
import { moods } from '../data/store';
import { MoodEntry } from '../models/types';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get('/', authenticateToken, (req: any, res: Response) => {
    const userMoods = moods.filter(m => m.userId === req.user.id);
    res.json(userMoods);
});

router.post('/', authenticateToken, (req: any, res: Response) => {
    const { mood, reason } = req.body;
    if (!mood) return res.status(400).json({ error: 'Mood is required' });

    const newEntry: MoodEntry = {
        id: moods.length + 1,
        userId: req.user.id,
        mood,
        reason,
        timestamp: new Date().toISOString(),
    };
    moods.push(newEntry);
    res.status(201).json(newEntry);
});

export default router;
