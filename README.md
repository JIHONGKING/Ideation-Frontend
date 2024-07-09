# CareerBridgeAI Website

Match applicants and employers using the power of Upstage AI.

## NextJs Project

This repository contains the source code to the frontend of the CareerBridge AI website and backend for authentication, services, etc.

### Upstage API

The Upstage API is utilized through our separate Python Flask microservice. The Nextjs application makes HTTP requests to this service for full functionality.

### PostgreSQL database

The CareerBridge AI data is persisted by a PostgreSQL server for storing user account information, job listings, applications and more.

### Caching

Along with the default caching behaviors of NextJS, CareerBridge AI will utilize Redis for caching various AI queries to improve responsiveness and decrease dead-time. **_This is not yet implemented_**

## Run developement

### `npm run devstack`

Run the website and the development database concurrently (Requires Docker)

### `npm run dev`

Run just the nextjs app

### `npm run db`

Run just the database (Requires Docker)

### `npm run studio`

Run drizzle studio (For db development)
