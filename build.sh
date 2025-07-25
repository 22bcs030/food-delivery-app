#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to backend directory and install dependencies
echo "Installing backend dependencies..."
cd backend
npm install

# Make sure uploads directory exists
mkdir -p uploads

# Return to project root
cd ..

echo "Backend setup complete!"
