import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

   
export const createStudent = (data) => API.post("/students", data);
export const getStudents = () => API.get("/students");