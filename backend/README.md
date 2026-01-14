# FormyAI – Student Registration Backend

This is the backend service for the Student Registration Flow built as part of the **FormyAI Full-Stack Developer Intern assignment**.

It provides REST APIs to store and retrieve student registration data using **Node.js, Express, and MongoDB** with a clean MVC-style structure.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS

---

## 📁 Project Structure

backend/
│
├── config/
│ └── db.js
├── controllers/
│ └── studentController.js
├── models/
│ └── Student.js
├── routes/
│ └── studentRoutes.js
├── app.js
├── server.js
└── .env

yaml
Copy code

---

## 🔌 API Endpoints

### ➤ POST `/api/students`
Registers a new student.

**Request Body**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "dob": "2001-01-01",
  "course": "Full Stack Development"
}
Responses

201 Created → Student registered successfully

400 Bad Request → Validation error / duplicate email

500 Internal Server Error → Server error

➤ GET /api/students
Fetches all registered students.

Response

json
Copy code
{
  "success": true,
  "data": [ ... ]
}
⚙️ Environment Variables
Create a .env file inside the backend directory:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
▶️ How to Run Locally
bash
Copy code
git clone https://github.com/AkshitRathore07/FORMY_AI.git
cd FORMY_AI/backend
npm install
npm run dev
Server will start on:

arduino
Copy code
http://localhost:5000
🌍 Live Deployment
The backend is deployed and accessible at:

 https://formy-ai.onrender.com/

🚀 Future Improvements
Given more time, the following enhancements can be added:

JWT-based authentication and authorization

Role-based access (Admin vs Student)

Pagination, search, and filtering for large datasets


