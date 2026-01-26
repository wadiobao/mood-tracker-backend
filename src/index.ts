import express, { Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory store for moods (simple for now)
interface MoodEntry {
    id: number;
    mood: string;
    reason?: string;
    timestamp: string;
}

let moods: MoodEntry[] = [];

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'UP' });
});

app.get('/api/moods', (req: Request, res: Response) => {
    res.json(moods);
});

app.post('/api/moods', (req: Request, res: Response) => {
    const { mood, reason } = req.body;
    if (!mood) {
        return res.status(400).json({ error: 'Mood is required' });
    }
    const newEntry: MoodEntry = {
        id: moods.length + 1,
        mood,
        reason,
        timestamp: new Date().toISOString(),
    };
    moods.push(newEntry);
    res.status(201).json(newEntry);
});

app.listen(port, () => {
    console.log(`MoodTracker API listening at http://localhost:${port}`);
});
