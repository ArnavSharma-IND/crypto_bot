# QuantPilot - AI Powered Trading Assistant

Full-stack trading assistant built with Next.js 14 App Router, TypeScript, TailwindCSS, ShadCN-style UI architecture, Prisma/PostgreSQL, REST APIs, and WebSocket support.

## Core Modules

- **AI Trading Assistant**: `/chat` + `POST /api/chat`
- **Prediction Engine**: `src/lib/prediction-engine.ts`
- **Trade Recommendation Engine**: `src/lib/recommendation/engine.ts`
- **Crypto Dashboard**: `/crypto` + `GET /api/market/crypto`
- **F&O Dashboard**: `/fo` + `GET /api/market/fo`
- **Portfolio Tracker**: `/portfolio`
- **Alerts + Overview**: `/dashboard`
- **Auth starter API**: `POST /api/auth/register`
- **WebSocket market stream utility**: `src/lib/websocket/server.ts`

## Pages

- Landing: `/`
- Dashboard: `/dashboard`
- AI Chat: `/chat`
- Crypto Market: `/crypto`
- F&O Analysis: `/fo`
- Portfolio: `/portfolio`
- Settings: `/settings`

## Run Locally

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

## Deployment

- Ready for Vercel deployment.
- Set env vars in Vercel project settings.
- Use managed PostgreSQL (Neon/Supabase/RDS) and run Prisma migrations.

## Security Notes

- Server-side API routes with env-isolated secrets.
- In-memory rate limiter for chat endpoint (`src/lib/security/rate-limit.ts`).
- Extend with Redis-based limiter and signed webhooks for production.
