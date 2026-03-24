#!/bin/bash
cd /var/www/Portfolio/Portfolio
git pull origin main  # Pull the latest code
npm install           # Install dependencies
npm run build:ssr     # Rebuild the app
docker-compose down   # Stop current containers
docker-compose up -d  # Restart with new code