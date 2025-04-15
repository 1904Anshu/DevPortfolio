// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "visitor",
//   });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       return setError("Passwords do not match");
//     }
//     try {
//       await api.post("/auth/register", form);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 mt-20 bg-white shadow rounded">
//       <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />
//         <select
//           name="role"
//           value={form.role}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         >
//           <option value="visitor">Visitor</option>
//           <option value="owner">Owner</option>
//         </select>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={form.confirmPassword}
//           onChange={handleChange}
//           required
//           className="w-full border p-2 rounded"
//         />
//         {error && <p className="text-red-600 text-sm">{error}</p>}
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import api from "../services/api";
// import registerImg from "../assets/infoImage.png";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "visitor",
//   });

//   const [error, setError] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       return setError("Passwords do not match");
//     }
//     try {
//       await api.post("api/auth/register", form);
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 px-4">
//       <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
//         {/* Left Side Image */}
//         <div className="md:w-1/2">
//           <img
//             src={registerImg}
//             alt="Register"
//             className="h-full w-full object-cover border-r-4 border-yellow-500 shadow-lg"
//           />
//         </div>

//         {/* Right Side Form */}
//         <div className="md:w-1/2 p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 underline decoration-pink-500">
//             Register
//           </h2>
//           <p className="text-center text-gray-500 mb-6">Create your account</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//             <select
//               name="role"
//               value={form.role}
//               onChange={handleChange}
//               className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             >
//               <option value="visitor">Visitor</option>
//               <option value="owner">Owner</option>
//             </select>

//             {/* Password field */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             {/* Confirm Password field */}
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//               />
//               <span
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
//               >
//                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             {error && <p className="text-red-600 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded hover:from-purple-700 hover:to-blue-600 transition duration-300"
//             >
//               Register
//             </button>
//           </form>

//           <div className="mt-4 text-center">
//             <p className="text-gray-600">
//               Already registered?{" "}
//               <Link
//                 to="/login"
//                 className="text-blue-600 hover:underline font-medium"
//               >
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import registerImg from "../assets/infoImage.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
// Import Toastify styles

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "visitor",
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }
    try {
      await api.post("api/auth/register", form);
      toast.success("Registration successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 px-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={registerImg}
            alt="Register"
            className="h-full w-full object-cover border-b-4 lg:border-r-4 border-yellow-500 shadow-lg"
          />
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 underline decoration-pink-500">
            Register
          </h2>
          <p className="text-center text-gray-500 mb-6">Create your account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="visitor">Visitor</option>
              <option value="owner">Owner</option>
            </select>

            {/* Password field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password field */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded hover:from-purple-700 hover:to-blue-600 transition"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notifications Container */}
    </div>
  );
};

export default Register;
