# Developer Skill Management System

## Setup Instructions

### Backend Setup:
1. Navigate to the backend folder:
   ```bash
   cd backend
2.Install the backend dependencies:
npm install

3.Create a .env file in the backend folder with the following content:
MONGODB_URL=<Your MongoDB Atlas Connection URL>
JWT_SECRET_KEY=<Your JWT Secret Key>
PORT=5000


4.Start the backend server:
npm start

Frontend Setup:
1.Navigate to the frontend folder:
cd frontend-client

2.Install the frontend dependencies:
npm install

3.Navigate to the src folder:
cd src

4.Create a .env file in the frontend folder with the following content:
CLIENT_URL=<Your Frontend URL (e.g., http://localhost:3000)>

5.Start the frontend development server:
npm run dev
