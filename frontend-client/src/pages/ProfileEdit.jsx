import React, { useState, useEffect, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaUser,
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaImage,
  FaClock,
  FaSave,
} from "react-icons/fa";

const ProfileEdit = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    title: "",
    yearsOfExperience: "",
    profilePictureUrl: "",
    github: "",
    linkedin: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user || !user._id) return;

        const res = await api.get(`/api/users/${user._id}`);
        const userData = res.data;

        setForm({
          name: userData.name || "",
          title: userData.title || "",
          yearsOfExperience: userData.yearsOfExperience || "",
          profilePictureUrl: userData.profilePictureUrl || "",
          github: userData.socialLinks?.github || "",
          linkedin: userData.socialLinks?.linkedin || "",
        });
      } catch (err) {
        console.error("Error fetching profile", err);
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        name: form.name,
        title: form.title,
        yearsOfExperience: form.yearsOfExperience,
        profilePictureUrl: form.profilePictureUrl,
        socialLinks: {
          github: form.github,
          linkedin: form.linkedin,
        },
      };

      await api.put(`/api/users/${user._id}`, updatedData);
      toast.success("Profile updated successfully");
    } catch (err) {
      console.error("Error updating profile", err);
      toast.error("Error updating profile");
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-900 text-yellow-500 p-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-4xl font-bold mb-6 text-center">Edit Your Profile</h2>

      {form.profilePictureUrl && (
        <div className="flex justify-center mb-4">
          <img
            src={form.profilePictureUrl}
            alt="Profile Preview"
            className="w-40 h-40 rounded-full object-cover border shadow-xl"
          />
        </div>
      )}

      <form onSubmit={handleSaveChanges} className="max-w-full space-y-6">
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-yellow-500" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-3 pl-12 rounded-xl focus:outline-none bg-gray-800 text-yellow-500"
          />
        </div>

        <div className="relative">
          <FaBriefcase className="absolute left-3 top-3 text-yellow-500" />
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border p-3 pl-12 rounded-xl focus:outline-none bg-gray-800 text-yellow-500"
          />
        </div>

        <div className="relative">
          <FaClock className="absolute left-3 top-3 text-yellow-500" />
          <input
            type="number"
            name="yearsOfExperience"
            value={form.yearsOfExperience}
            onChange={handleChange}
            placeholder="Years of Experience"
            className="w-full border p-3 pl-12 rounded-xl focus:outline-none bg-gray-800 text-yellow-500"
          />
        </div>

        <div className="relative">
          <FaImage className="absolute left-3 top-3 text-yellow-500" />
          <input
            type="text"
            name="profilePictureUrl"
            value={form.profilePictureUrl}
            onChange={handleChange}
            placeholder="Profile Picture URL"
            className="w-full border p-3 pl-12 rounded-xl focus:outline-none bg-gray-800 text-yellow-500"
          />
        </div>

        <div className="relative">
          <FaGithub className="absolute left-3 top-3 text-yellow-500" />
          <input
            type="text"
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="w-full border p-3 pl-12 rounded-xl focus:outline-none bg-gray-800 text-yellow-500"
          />
        </div>

        <div className="relative">
          <FaLinkedin className="absolute left-3 top-3 text-yellow-500" />
          <input
            type="text"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full border p-3 pl-12 rounded-xl focus:outline-none bg-gray-800 text-yellow-500"
          />
        </div>

        <div
          onClick={handleSaveChanges}
          className="cursor-pointer w-full bg-yellow-500 hover:bg-yellow-600 transition text-black py-3 px-6 rounded-xl font-semibold text-lg text-center mt-6 flex items-center justify-center gap-2"
        >
          Save Change <FaSave size={20} />
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
