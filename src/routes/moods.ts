import { Router, Response } from 'express';
import { MoodModel } from '../models/Mood';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get('/', authenticateToken, async (req: any, res: Response) => {
    try {
        const userMoods = await MoodModel.find({ userId: req.user.id }).sort({ timestamp: -1 });
        res.json(userMoods);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', authenticateToken, async (req: any, res: Response) => {
    try {
        const { mood, reason } = req.body;
        if (!mood) return res.status(400).json({ error: 'Mood is required' });

        const newEntry = new MoodModel({
            userId: req.user.id,
            mood,
            reason,
        });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
