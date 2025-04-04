#!/bin/bash

echo "Starting Next.js development server..."

# Create necessary public directories
mkdir -p public/attached_assets
mkdir -p public/logos/ventures
mkdir -p public/images
mkdir -p public/screenshots

# Basic environment setup
export NODE_ENV=development
export NEXT_TELEMETRY_DISABLED=1
export PORT=5000
export HOSTNAME=0.0.0.0

# Ensure .next directory exists
mkdir -p .next 2>/dev/null || true

# Clean up any existing Next.js processes
if pgrep -f "next" >/dev/null; then
  echo "Cleaning up existing Next.js processes..."
  pkill -f "next" || true
fi

# Check for config and create symlink if needed
if [ -f "config/next/next.config.js" ]; then
  ln -sf config/next/next.config.js next.config.js
elif [ -f "next-config.js" ]; then
  ln -sf next-config.js next.config.js
fi

# Start the Next.js development server
echo "Starting Next.js on port 5000 (http://0.0.0.0:5000)..."
exec bun run next dev -p 5000 --hostname 0.0.0.0 --turbo