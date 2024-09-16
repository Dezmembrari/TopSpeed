## Project Structure

- `backend/` - Contains the backend application built with ExpressJS.
- `frontend/` - Contains the frontend application built with Vue.js and Vite.

## Deployment Overview

We use GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD) to automate the deployment process. Additionally, a `deploy.sh` script is available for manual deployments.

### GitHub Actions Workflow

The GitHub Actions workflow is defined in `.github/workflows/deploy.yml`. This file automates the deployment process and ensures that updates are consistently and reliably deployed to the server.

#### `.github/workflows/deploy.yml`

```yaml
name: Deploy Backend and Frontend

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'  # Use Node.js 18 or higher

    - name: Install Backend Dependencies
      run: |
        cd backend
        npm install

    - name: Install Frontend Dependencies and Build
      run: |
        cd frontend
        npm install
        npm run build

    - name: Deploy to Server
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        SERVER_USER: ${{ secrets.SERVER_USER }}
        SERVER_IP: ${{ secrets.SERVER_IP }}
      run: |
        ssh -i $SSH_PRIVATE_KEY -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP << 'EOF'
          cd /path/to/your/project
          git pull origin main
          cd backend
          npm install
          cd ../frontend
          npm install
          npm run build
          cd ..
          pm2 restart backend || pm2 start backend/server.js --name backend
          pm2 save
          pm2 startup
        EOF
