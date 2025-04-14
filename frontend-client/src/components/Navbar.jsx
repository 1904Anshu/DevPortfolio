import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 px-8 py-6 flex justify-between items-center border-b border-gray-700 shadow-md">
      {/* Logo / Landing */}
      <Link
        to="/"
        className="text-3xl font-bold text-white hover:text-gray-300 tracking-wide"
      >
        Dev<span className="text-indigo-400">Portfolio</span>
      </Link>

      <div className="flex items-center gap-6">
        {/* Not logged in */}
        {!user && (
          <>
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-medium text-black bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all duration-300 shadow-sm"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 text-sm font-medium text-black bg-teal-600 rounded-md hover:bg-teal-500 transition-all duration-300 shadow-sm"
            >
              Register
            </Link>
          </>
        )}

        {/* Logged in */}
        {user && (
          <>
            {user.role === "owner" && (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-200 hover:text-white font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile/edit"
                  className="text-gray-200 hover:text-white font-medium"
                >
                  Edit Profile
                </Link>
                <Link
                  to="/profile/skills"
                  className="text-gray-200 hover:text-white font-medium"
                >
                  Manage Skills
                </Link>
              </>
            )}

            {user.role === "visitor" && (
              <Link
                to="/directory"
                className="text-gray-200 hover:text-white font-medium"
              >
                Developers
              </Link>
            )}

            <button
              onClick={logout}
              className="px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500 transition-all duration-300 shadow-sm"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
