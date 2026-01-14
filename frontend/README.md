
---

# 📄 README.md — Frontend

👉 Save this as: `frontend/README.md`

```md
# FormyAI – Student Registration Frontend

This is the frontend application for the Student Registration Flow built using **React (Vite)** as part of the **FormyAI Full-Stack Developer Intern assignment**.

It provides a clean, centralized UI to register students and communicate with the backend APIs.

---

## 🛠 Tech Stack

- React (Vite)
- JavaScript (ES6+)
- Axios
- Tailwind CSS (for styling)

---

## ✨ Features

- Student registration form with:
  - Full Name
  - Email
  - Mobile Number
  - Date of Birth
  - Course selection
- Client-side form validation
- Backend API integration
- Proper success & error message handling
- Centered, responsive, and clean UI design

---

## 📁 Project Structure

frontend/
│
├── src/
│ ├── components/
│ │ └── StudentForm.jsx
│ ├── services/
│ │ └── api.js
│ ├── App.jsx
│ └── main.jsx
└── .env

yaml
Copy code

---

## ⚙️ Environment Variables

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
▶️ How to Run Locally
bash
Copy code
git clone https://github.com/AkshitRathore07/FORMY_AI.git
cd FORMY_AI/frontend
npm install
npm run dev
Application will start on:

arduino
Copy code
http://localhost:5173
🌍 Live Deployment
The frontend is deployed at:

https://formy-ai-phi.vercel.app/

🚀 Future Improvements
With more time, the following can be added:

Authentication using JWT for admin features

Student listing UI (GET /api/students) in a table format

Multi-step form / stepper-based registration