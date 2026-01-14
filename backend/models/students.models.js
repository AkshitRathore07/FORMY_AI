import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      minlength: 10,
      maxlength: 10,
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    course: {
      type: String,
      required: [true, "Course is required"],
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;