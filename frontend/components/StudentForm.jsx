import { useState } from "react";
import { createStudent, getStudents } from "../services/api";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    course: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { fullName, email, mobile, dob, course } = formData;

    if (!fullName || !email || !mobile || !dob || !course) {
      return "All fields are required";
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return "Invalid email format";
    }

    if (mobile.length !== 10) {
      return "Mobile number must be 10 digits";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await createStudent(formData);
      setMessage(response.data.message);
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        dob: "",
        course: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const getUser = () => {
    getStudents()
      .then((res) =>
        console.log(res.data.data.map((student) => student.fullName))
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4">

      <div className="w-full max-w-md 
                      bg-white/10 backdrop-blur-xl 
                      rounded-2xl p-8 
                      shadow-2xl border border-white/20">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-white">Create Your Account</h2>
          <p className="text-sm text-gray-300 mt-2">
            Student Registration Form
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg 
                         bg-white/10 text-white placeholder-gray-300
                         border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg 
                         bg-white/10 text-white placeholder-gray-300
                         border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg 
                         bg-white/10 text-white placeholder-gray-300
                         border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg 
                         bg-white/10 text-white
                         border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm text-gray-200 mb-1">Course Applied For</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg 
                         bg-white/10 text-black
                         border border-white/20 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Course</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="Data Science">Data Science</option>
              <option value="AI & ML">AI & ML</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 rounded-lg text-white font-medium 
                       bg-gradient-to-r from-purple-500 to-indigo-600
                       hover:from-purple-600 hover:to-indigo-700
                       transition-all duration-300"
          >
            Continue →
          </button>
        </form>

        {/* Debug Button */}
        <button
          onClick={getUser}
          className="block w-full mt-4 text-sm text-center text-indigo-300 hover:underline"
        >
          View Registered Students (Console)
        </button>

        {/* Messages */}
        {message && (
          <p className="mt-3 text-green-400 text-sm text-center">{message}</p>
        )}
        {error && (
          <p className="mt-3 text-red-400 text-sm text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default StudentForm;
