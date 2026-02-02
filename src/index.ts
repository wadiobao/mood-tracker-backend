import * as dotenv from 'dotenv';
import app from './app';
import { connectDB } from './config/db';
import { useAzureMonitor } from "@azure/monitor-opentelemetry";

// Call the `useAzureMonitor()` function to configure OpenTelemetry to use Azure Monitor.
useAzureMonitor();

dotenv.config();

const port = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 MoodTracker API listening at http://localhost:${port}`);
    });
});
