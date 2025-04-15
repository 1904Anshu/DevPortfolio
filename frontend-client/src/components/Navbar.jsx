import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-white hover:text-gray-300 tracking-wide"
        >
          Dev<span className="text-indigo-400">Portfolio</span>
        </Link>

        {/* Hamburger Icon (mobile) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {!user ? (
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
          ) : (
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-6 pb-6">
          {!user ? (
            <>
              <Link
                to="/login"
                className="w-full text-center px-5 py-2 text-sm font-medium text-black bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all duration-300 shadow-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-full text-center px-5 py-2 text-sm font-medium text-black bg-teal-600 rounded-md hover:bg-teal-500 transition-all duration-300 shadow-sm"
              >
                Register
              </Link>
            </>
          ) : (
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
                className="w-full text-center px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500 transition-all duration-300 shadow-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
