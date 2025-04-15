// import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

// const useAuth = () => {
//   const { user, setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const login = (userData, token) => {
//     localStorage.setItem("token", token);
//     setUser(userData);

//     if (userData.role === "owner") {
//       navigate("/dashboard");
//     } else {
//       navigate("/directory");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   const isAuthenticated = !!user;
//   const isOwner = user?.role === "owner";
//   const isVisitor = user?.role === "visitor";

//   return { user, login, logout, isAuthenticated, isOwner, isVisitor };
// };

// export default useAuth;

// import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

// const useAuth = () => {
//   const { user, setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const login = (userData, token) => {
//     localStorage.setItem("token", token);
//     setUser(userData); // Update the user context

//     if (userData.role === "owner") {
//       navigate("/dashboard");
//     } else {
//       navigate("/directory");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   const isAuthenticated = !!user;
//   const isOwner = user?.role === "owner";
//   const isVisitor = user?.role === "visitor";

//   return { user, login, logout, isAuthenticated, isOwner, isVisitor };
// };

// export default useAuth;

// import React from "react";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";

// const useAuth = () => {
//   const { user, setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const login = (userData, token) => {
//     localStorage.setItem("token", token);
//     setUser(userData);

//     if (userData.role === "owner") {
//       navigate("/dashboard");
//     } else if (userData.role === "visitor") {
//       navigate("/directory");
//     } else {
//       navigate("/unauthorized");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   const isAuthenticated = !!user;
//   const isOwner = user?.role === "owner";
//   const isVisitor = user?.role === "visitor";
//   const isAdmin = user?.role === "admin";

//   return { user, login, logout, isAuthenticated, isOwner, isVisitor, isAdmin };
// };

// export default useAuth;

import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // On component mount, check if a user is stored in localStorage or context
  React.useEffect(() => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setUser(decoded);
          console.log(token);
        } catch (err) {
          console.error("Token decode error:", err);
          localStorage.removeItem("token");
        }
      }
    }
  }, [user, setUser]);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);

    if (userData.role === "owner") {
      navigate("/dashboard");
    } else if (userData.role === "visitor") {
      navigate("/directory");
    } else {
      navigate("/unauthorized");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const isAuthenticated = !!user;
  const isOwner = user?.role === "owner";
  const isVisitor = user?.role === "visitor";
  const isAdmin = user?.role === "admin";

  return { user, login, logout, isAuthenticated, isOwner, isVisitor, isAdmin };
};

export default useAuth;
