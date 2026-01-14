import Student from "../models/students.models.js";

// POST /api/students
export const createStudent = async (req, res) => {
  try {
    const { fullName, email, mobile, dob, course } = req.body;

    if (!fullName || !email || !mobile || !dob || !course) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Student with this email already exists" });
    }

    const student = await Student.create({
      fullName,
      email,
      mobile,
      dob,
      course,
    });

    res.status(201).json({
      success: true,
      message: "Student registered successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt : -1 });
    res.status(200).json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
