# MoodTracker Backend API

This is the professional Node.js backend for the MoodTracker application. It provides a secure API for user authentication and mood logging, built with **Express**, **TypeScript**, and **Custom JWT Authentication**.

## 🚀 Features
- **Authentication:** Secure user registration and login with password hashing (`bcryptjs`).
- **Authorization:** JWT-based protection for sensitive endpoints.
- **Mood Logging:** Create and retrieve mood entries with optional reasons.
- **Health Monitoring:** Dedicated `/health` endpoint for AKS probes.
- **Bilingual Support:** Error messages and responses prepared for internationalization.

## 🛠 Tech Stack
- **Runtime:** Node.js
- **Framework:** Express + TypeScript
- **Security:** jsonwebtoken, bcryptjs
- **Dev Tools:** nodemon, ts-node
- **Infrastructure:** Docker, Kubernetes (AKS)

## 📂 Project Structure
The codebase follows a modular architecture for better maintainability:
- `src/routes/`: Specialized API endpoints (Auth, Moods).
- `src/middleware/`: JWT verification and global logic guards.
- `src/models/`: Shared TypeScript interfaces and types.
- `src/data/`: High-level data management (currently in-memory, ready for DB integration).
- `src/app.ts`: Express application configuration and middleware setup.
- `src/index.ts`: Lightweight server entry point.

## 🏁 Getting Started

### Prerequisites
- Node.js (v20+)
- npm

### Installation
```bash
npm install
```

### Environment Setup
Create a `.env` file from the example:
```bash
cp .env.example .env
```
Ensure you set a strong `JWT_SECRET`.

### Development
```bash
npm run dev
```

### Build & Production
```bash
npm run build
npm start
```

## ⚓ Deployment (Kubernetes)
The project includes actual Kubernetes manifests in the `k8s/` directory (ignored by Git) and templates in the `k8s-example/` directory:
- `k8s-example/deployment.example.yaml`: API Deployment configuration template.
- `k8s-example/service.example.yaml`: ClusterIP service template.
- `k8s-example/ingress-https.example.yaml`: Nginx Ingress template with SSL/TLS.
- `k8s-example/cluster-issuer.example.yaml`: Cert-manager template.

---
Part of the **MindX Engineer Onboarding** program.
