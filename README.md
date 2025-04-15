 Developer Skill Management System Setup

## Backend Setup

1. Navigate to the Backend Folder:**

   
   cd backend
Install Backend Dependencies:

Install the required npm packages.

bash
Copy
Edit
npm install
Set Environment Variables:

Create a .env file in the backend directory and add the following variables:

echo "MONGODB_URL=<Your MongoDB Atlas Connection URL>" >> .env
echo "JWT_SECRET_KEY=<Your JWT Secret Key>" >> .env
echo "PORT=5000" >> .env
Replace the values for MONGODB_URL and JWT_SECRET_KEY:

MONGODB_URL: MongoDB connection URL (you can find this in your MongoDB Atlas dashboard).

JWT_SECRET_KEY: A secret key used for signing JWT tokens (ensure it's a long, random string).

PORT: The port number the server will run on (default is 5000).

Run the Backend Server:

Start the server.


npm run start
The backend will be available at http://localhost:5000.

Frontend Setup
Navigate to the Frontend Folder:

bash
Copy
Edit
cd frontend
Install Frontend Dependencies:

Install the required npm packages.

bash
Copy
Edit
npm install
Set Environment Variables:

Create a .env file in the frontend directory and add the following variables:

Edit
echo "CLIENT_URL=<Your frontend URL (e.g., http://localhost:3000)>" >> .env
Replace CLIENT_URL with your frontend URL:

CLIENT_URL: The URL of the frontend (it should match the address where the frontend is hosted, typically http://localhost:3000 during local development).

Run the Frontend Server:

Start the development server.

npm run dev
The frontend will be available at http://localhost:3000.

Running the Application
Backend URL: http://localhost:5000

Frontend URL: http://localhost:3000

