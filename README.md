# Mood Tracker - Backend API

This is the backend service for the Mood Tracker application, built with Node.js, Express, and TypeScript.

## Features
- Log daily moods with an optional reason.
- Retrieve a history of logged moods.
- Health check endpoint for deployment verification.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Language:** TypeScript
- **Environment:** Dotenv
- **Containerization:** Docker

## Getting Started

### Prerequisites
- Node.js (v20+)
- npm

### Installation
1. Navigate to the backend directory:
   ```bash
   cd mood-tracker-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
1. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
2. Start the development server (with nodemon):
   ```bash
   npm run dev
   ```

### API Endpoints
- `GET /health`: Health check.
- `GET /api/moods`: List all moods.
- `POST /api/moods`: Create a new mood entry.
  - Body: `{ "mood": "Happy", "reason": "Got a coffee" }`

## Deployment
This service is containerized and ready for deployment to Azure or any Kubernetes cluster.
- **Docker Build:** `docker build -t moodtracker-backend .`
