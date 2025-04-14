import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBriefcase, FaEye } from "react-icons/fa";

const ProfileCard = ({ developer }) => {
  return (
    <div className="bg-gray-900 text-yellow-400 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
      <img
        src={developer.profilePictureUrl || "https://via.placeholder.com/100"}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400"
      />
      <h3 className="text-center text-xl font-semibold flex items-center justify-center">
        <FaUser className="w-5 h-5 mr-2 text-yellow-400" />
        {developer.name}
      </h3>
      <p className="text-center text-sm text-gray-300 mt-1 flex items-center justify-center">
        <FaBriefcase className="w-4 h-4 mr-2 text-yellow-400" />
        {developer.title}
      </p>
      <div className="text-center mt-4">
        <Link
          to={`/developers/${developer._id}`} // ✅ Correct link
          className="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-medium text-sm border-b-2 border-yellow-400 hover:border-yellow-500 transition-colors"
        >
          <FaEye className="w-5 h-5 mr-2 text-yellow-400" />
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
