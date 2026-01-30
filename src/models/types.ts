export interface User {
    id: number;
    username: string;
    passwordHash: string;
}

export interface MoodEntry {
    id: number;
    userId: number;
    mood: string;
    reason?: string;
    timestamp: string;
}

export interface AuthRequest extends Request {
    user?: {
        id: number;
        username: string;
    };
}
