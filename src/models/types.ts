export interface User {
    id?: string;
    username: string;
    password: string; // Changed from passwordHash
}

export interface MoodEntry {
    id?: string;
    userId: string; // Changed from number
    mood: string;
    reason?: string;
    timestamp?: Date; // Changed to Date
}

export interface AuthRequest extends Request {
    user?: {
        id: string; // Changed from number
        username: string;
    };
}
