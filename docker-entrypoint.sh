#!/bin/sh
set -e

# Load bundled .env.local credentials automatically so no external configuration is needed
if [ -f "/app/.env.local" ]; then
  sed -i 's/\r$//' /app/.env.local
  set -a
  . /app/.env.local
  set +a
fi

mkdir -p /app/data /app/public/uploads

# Copy the bundled project database (with all existing user accounts and CMS content) on first run
if [ ! -f "/app/data/dev.db" ] && [ -f "/app/dev.db.initial" ]; then
  echo "Restoring bundled database with existing user accounts and content..."
  cp /app/dev.db.initial /app/data/dev.db
else
  echo "Synchronizing SQLite database schema..."
  npx prisma db push
fi

echo "Starting Next.js production server on port ${PORT:-3000}..."
exec npm run start
