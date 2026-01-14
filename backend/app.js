import express from "express";
import cors from "cors";
import studentRoutes from "./routes/students.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.status(201).json({ message: "good to go" });
    
});
app.use("/api/students", studentRoutes);


export default app;
