#!/bin/bash
# First kill any existing process on port 5000
npx kill-port 5000
# Start Next.js development server with proper configuration
NODE_ENV=development exec npx next dev -p 5000 --hostname 0.0.0.0