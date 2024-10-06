#!/bin/bash

# Step 0: check for pm2
if ! command -v pm2 &> /dev/null
then
    echo "PM2 not found. Installing PM2..."
    npm install -g pm2
fi

# Step 1: Pull the latest code
echo "Pulling the latest code..."
git pull origin main

# Step 2: Install frontend dependencies and build
echo "Building the frontend..."
cd frontend
npm install
npm run build
cd ..

# Step 3: Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Step 4: Restart the backend server using PM2
echo "Restarting the backend server..."
pm2 restart topspeed-backend || pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
pm2 save

echo "Deployment complete!"
