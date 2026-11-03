FROM node:22-bookworm-slim AS base

# Install build dependencies required for native better-sqlite3 and Prisma
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl \
    ca-certificates \
    python3 \
    make \
    g++ \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package manifests and Prisma configuration first for layer caching
COPY package.json package-lock.json* ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

# Install dependencies (including devDependencies needed for build, prisma db push, and seed)
RUN npm ci

# Copy application source (including .env.local, dev.db, and public/uploads)
COPY . .

# Strip CRLF from .env.local and docker-entrypoint.sh, generate Prisma Client, sync & seed DB with bundled credentials, and build Next.js
RUN if [ -f /app/.env.local ]; then sed -i 's/\r$//' /app/.env.local; fi && \
    sed -i 's/\r$//' /app/docker-entrypoint.sh && \
    chmod +x /app/docker-entrypoint.sh && \
    npx prisma generate && \
    sh -c 'if [ -f /app/.env.local ]; then set -a; . /app/.env.local; set +a; fi; npx prisma db push && npx tsx prisma/seed.ts' && \
    npm run build && \
    mkdir -p /app/data /app/public/uploads && \
    cp /app/dev.db /app/dev.db.initial && \
    cp /app/dev.db /app/data/dev.db

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV DATABASE_PATH=/app/data/dev.db
ENV DATABASE_URL=file:/app/data/dev.db

EXPOSE 3000

ENTRYPOINT ["/app/docker-entrypoint.sh"]
