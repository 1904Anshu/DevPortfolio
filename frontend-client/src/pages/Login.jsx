// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth"; // Correctly import useAuth
// import api from "../services/api";
// import loginImg from "../assets/anshuImage.jpeg"; // Ensure the image is in your assets folder
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for showing/hiding password

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Access login through useAuth hook

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/api/auth/login", { email, password });
//       console.log("Login Response:", res); // Log the entire response object

//       const { token, user } = res.data;
//       if (token && user) {
//         console.log("User:", user);
//         login(user, token); // Pass both user and token to login

//         // Redirect based on user role after login
//         if (user.role === "owner") {
//           navigate("/dashboard"); // Redirect to dashboard for owner
//         } else if (user.role === "visitor") {
//           navigate("/directory"); // Redirect to directory for visitor
//         } else {
//           navigate("/unauthorized"); // Redirect to unauthorized page if the role is unknown
//         }
//       } else {
//         console.error("No token or user data in the response.");
//         setError("Unexpected response format.");
//       }
//     } catch (err) {
//       console.error("Error during login:", err); // Log the error
//       setError(err.response?.data?.message || "Login failed"); // Show the error message
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 px-4">
//       <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
//         {/* Left Side Image */}
//         <div className="md:w-1/2">
//           <img
//             src={loginImg}
//             alt="Login"
//             className="h-full w-full object-cover border-r-4 border-yellow-500 shadow-lg"
//           />
//         </div>

//         {/* Right Side Form */}
//         <div className="md:w-1/2 p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 underline decoration-pink-500">
//             Login
//           </h2>
//           <p className="text-center text-gray-500 mb-6">Access your account</p>

//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//             {/* <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute top-2 right-2"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div> */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border border-gray-300 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             {/* Display error message if any */}
//             {error && <p className="text-red-600 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded hover:from-purple-700 hover:to-blue-600 transition duration-300"
//             >
//               Login
//             </button>
//           </form>

//           {/* Register Link */}
//           <p className="text-center text-gray-500 mt-4">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="text-blue-500 underline hover:text-blue-700 transition duration-300"
//             >
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import api from "../services/api";
// import loginImg from "../assets/anshuImage.jpeg";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const { login } = useAuth(); // This handles user context and navigation

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(null); // Clear previous error before attempting new login

//     try {
//       const res = await api.post("/api/auth/login", { email, password });
//       const { token, user } = res.data;

//       if (token && user) {
//         login(user, token); // This already handles role-based navigation
//       } else {
//         setError("Login failed: Invalid response from server.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError(
//         err.response?.data?.message || "Login failed. Please try again."
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 px-4">
//       <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
//         {/* Left Side Image */}
//         <div className="md:w-1/2">
//           <img
//             src={loginImg}
//             alt="Login"
//             className="h-full w-full object-cover border-r-4 border-yellow-500 shadow-lg"
//           />
//         </div>

//         {/* Right Side Form */}
//         <div className="md:w-1/2 p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 underline decoration-pink-500">
//             Login
//           </h2>
//           <p className="text-center text-gray-500 mb-6">Access your account</p>

//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border border-gray-300 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             {error && <p className="text-red-600 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded hover:from-purple-700 hover:to-blue-600 transition duration-300"
//             >
//               Login
//             </button>
//           </form>

//           <p className="text-center text-gray-500 mt-4">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="text-blue-500 underline hover:text-blue-700 transition duration-300"
//             >
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import api from "../services/api";
import loginImg from "../assets/anshuImage.jpeg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify"; // Import Toastif // Import the Toastify styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth(); // This handles user context and navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous error before attempting new login

    try {
      const res = await api.post("/api/auth/login", { email, password });
      const { token, user } = res.data;

      if (token && user) {
        login(user, token); // This already handles role-based navigation
        toast.success("Login successful!"); // Show success toast on successful login
      } else {
        setError("Login failed: Invalid response from server.");
        toast.error("Login failed: Invalid response from server."); // Show error toast
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
      toast.error(
        err.response?.data?.message || "Login failed. Please try again."
      ); // Show error toast
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src={loginImg}
            alt="Login"
            className="h-full w-full object-cover border-r-4 border-yellow-500 shadow-lg"
          />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 underline decoration-pink-500">
            Login
          </h2>
          <p className="text-center text-gray-500 mb-6">Access your account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded hover:from-purple-700 hover:to-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 underline hover:text-blue-700 transition duration-300"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* ToastContainer: Add this at the end of your component */}
    </div>
  );
};

export default Login;
