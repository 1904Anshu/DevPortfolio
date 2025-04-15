// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import PrivateRoute from "./components/PrivateRoute";

// import LandingPage from "./pages/LandingPage";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ProfileEdit from "./pages/ProfileEdit";
// import SkillManager from "./pages/skillManager";
// import Directory from "./pages/Directory";
// import DeveloperProfile from "./pages/DeveloperProfile";
// import "./App.css"; // Keep your global styles if you have any

// const AppContent = () => {
//   const location = useLocation();
//   const showFooterOnRoutes = ["/"];
//   const shouldShowFooter = showFooterOnRoutes.includes(location.pathname);

//   return (
//     <div className="flex flex-col min-h-screen  w-full">
//       {/* Navbar */}
//       <div className="w-full">
//         <Navbar />
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-grow w-full">
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/directory" element={<Directory />} />
//           <Route path="/developers/:id" element={<DeveloperProfile />} />
//           {/* Protected Owner Routes */}
//           {/* <Route element={<PrivateRoute allowedRoles={["owner"]} />}> */}

//           <Route
//             path="/dashboard"
//             element={
//               <div className="min-h-screen w-full bg-gray-900 text-white">
//                 <Dashboard />
//               </div>
//             }
//           />

//           <Route path="/profile/edit" element={<ProfileEdit />} />
//           <Route path="/profile/skills" element={<SkillManager />} />
//           {/* </Route> */}
//           {/* Fallback route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>

//       {/* Footer */}
//       {shouldShowFooter && (
//         <div className="w-full">
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import PrivateRoute from "./components/PrivateRoute";

// import LandingPage from "./pages/LandingPage";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ProfileEdit from "./pages/ProfileEdit";
// import SkillManager from "./pages/skillManager";
// import Directory from "./pages/Directory";
// import DeveloperProfile from "./pages/DeveloperProfile";
// import "./App.css"; // Keep your global styles if you have any

// const AppContent = () => {
//   const location = useLocation();
//   const showFooterOnRoutes = ["/"];
//   const shouldShowFooter = showFooterOnRoutes.includes(location.pathname);

//   return (
//     <div className="flex flex-col min-h-screen w-screen bg-[#0b1120] text-white overflow-x-hidden">
//       {/* Navbar */}
//       <div className="w-full">
//         <Navbar />
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-grow w-full">
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/directory" element={<Directory />} />
//           <Route path="/developers/:id" element={<DeveloperProfile />} />

//           {/* Protected Owner Routes */}
//           {/* <Route element={<PrivateRoute allowedRoles={["owner"]} />}> */}
//           <Route
//             path="/dashboard"
//             element={
//               <div className="min-h-screen w-full bg-gray-900 text-white">
//                 <Dashboard />
//               </div>
//             }
//           />
//           <Route path="/profile/edit" element={<ProfileEdit />} />
//           <Route path="/profile/skills" element={<SkillManager />} />
//           {/* </Route> */}

//           {/* Fallback route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </div>

//       {/* Footer */}
//       {shouldShowFooter && (
//         <div className="w-full">
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

// import React, { useContext } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// import { AuthProvider, AuthContext } from "./contexts/AuthContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import LandingPage from "./pages/LandingPage";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ProfileEdit from "./pages/ProfileEdit";
// import SkillManager from "./pages/skillManager";
// import Directory from "./pages/Directory";
// import DeveloperProfile from "./pages/DeveloperProfile";

// import "./App.css";

// const AppContent = () => {
//   const { user } = useContext(AuthContext);
//   const location = useLocation();
//   const showFooterOnRoutes = ["/"];
//   const shouldShowFooter = showFooterOnRoutes.includes(location.pathname);

//   const isAuthenticated = !!user;
//   const role = user?.role;

//   return (
//     <div className="flex flex-col min-h-screen w-screen bg-[#0b1120] text-white overflow-x-hidden">
//       {/* Navbar */}
//       <div className="w-full">
//         <Navbar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow w-full">
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<LandingPage />} />
//           <Route
//             path="/register"
//             element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/login"
//             element={
//               !isAuthenticated ? (
//                 <Login />
//               ) : role === "owner" ? (
//                 <Navigate to="/dashboard" />
//               ) : (
//                 <Navigate to="/directory" />
//               )
//             }
//           />
//           <Route path="/developers/:id" element={<DeveloperProfile />} />
//           <Route path="/directory" element={<Directory />} />

//           {/* Protected Owner Routes */}
//           <Route
//             path="/dashboard"
//             element={
//               isAuthenticated && role === "owner" ? (
//                 <Dashboard />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//           <Route
//             path="/profile/edit"
//             element={
//               isAuthenticated && role === "owner" ? (
//                 <ProfileEdit />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//           <Route
//             path="/profile/skills"
//             element={
//               isAuthenticated && role === "owner" ? (
//                 <SkillManager />
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />

//           {/* Catch-all fallback */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>

//       {/* Footer */}
//       {shouldShowFooter && (
//         <div className="w-full">
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProfileEdit from "./pages/ProfileEdit";
import SkillManager from "./pages/skillManager";
import Directory from "./pages/Directory";
import DeveloperProfile from "./pages/DeveloperProfile";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContent = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const showFooterOnRoutes = ["/"];
  const shouldShowFooter = showFooterOnRoutes.includes(location.pathname);

  const isAuthenticated = !!user;
  const role = user?.role;

  // Show a loading indicator while checking authentication state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0b1120] text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div>
        <p className="ml-4">Loading app...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#0b1120] text-white overflow-x-hidden">
      {/* Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/register"
            element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login />
              ) : role === "owner" ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/directory" />
              )
            }
          />
          <Route path="/developers/:id" element={<DeveloperProfile />} />
          <Route path="/directory" element={<Directory />} />

          {/* Protected Owner Routes */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated && role === "owner" ? (
                <Dashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/profile/edit"
            element={
              isAuthenticated && role === "owner" ? (
                <ProfileEdit />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/profile/skills"
            element={
              isAuthenticated && role === "owner" ? (
                <SkillManager />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* Footer */}
      {shouldShowFooter && (
        <div className="w-full">
          <Footer />
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
