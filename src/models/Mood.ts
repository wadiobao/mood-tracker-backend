import mongoose, { Schema } from 'mongoose';
import { MoodEntry } from './types';

const moodSchema = new Schema<MoodEntry>({
    mood: { type: String, required: true },
    reason: { type: String, required: false },
    timestamp: { type: Date, default: Date.now },
    userId: { type: String, required: true }
});

export const MoodModel = mongoose.model<MoodEntry>('Mood', moodSchema);
