// import api from "../services/api";
// import { jwtDecode } from "jwt-decode";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setUser(decoded);
//         api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       } catch (err) {
//         console.error("Invalid token");
//         localStorage.removeItem("token");
//       }
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// import { createContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import api from "../services/api";

// export const AuthContext = createContext(); // ✅ MUST be exported!

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Initialize as null

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         if (decoded.exp * 1000 < Date.now()) {
//           localStorage.removeItem("token");
//           setUser(null);
//           console.log("Token has expired.");
//         } else {
//           setUser(decoded);
//           api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         }
//       } catch (err) {
//         console.error("Invalid token", err);
//         localStorage.removeItem("token");
//         setUser(null);
//       }
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          setUser(null);
          console.log("Token has expired.");
        } else {
          setUser(decoded);
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
    setLoading(false); // Set loading to false after checking local storage
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {" "}
      {/* Expose loading */}
      {!loading ? children : <div>Loading app...</div>}{" "}
      {/* Conditionally render */}
    </AuthContext.Provider>
  );
};
