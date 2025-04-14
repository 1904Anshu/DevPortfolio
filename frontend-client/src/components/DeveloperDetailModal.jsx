import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";
import api from "../services/api";

const DeveloperDetailModal = ({ developerId, onClose }) => {
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeveloper = async () => {
      try {
        const res = await api.get(`/api/users/${developerId}`);
        setDeveloper(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeveloper();
  }, [developerId]);

  if (loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred overlay */}
      <div className="absolute inset-0 z-40 bg-black opacity-70 backdrop-blur-sm" />
      {/* Modal content */}
      <div className="relative z-50 bg-gray-900 text-yellow-400 p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-500"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        <img
          src={developer.profilePictureUrl || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-yellow-400"
        />
        <h2 className="text-xl text-center font-bold flex items-center justify-center">
          <FaUser className="mr-2" /> {developer.name}
        </h2>
        <p className="text-center mt-2 flex items-center justify-center">
          <FaBriefcase className="mr-2" /> {developer.title}
        </p>
        <p className="text-center mt-2 flex items-center justify-center">
          <FaEnvelope className="mr-2" /> {developer.email}
        </p>
        <p className="text-center mt-2 flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2" /> {developer.location || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default DeveloperDetailModal;
