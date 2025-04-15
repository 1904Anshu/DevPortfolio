import React, { useState, useEffect, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { FaTrashAlt, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import Toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const SkillManager = () => {
  const { user } = useContext(AuthContext);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newSkill, setNewSkill] = useState({
    name: "",
    category: "",
    proficiencyLevel: 1,
    yearsExperience: "",
    description: "",
    projectUrl: "",
  });

  const fetchSkills = async () => {
    try {
      const res = await api.get(`/api/skills/user/${user._id}`);
      setSkills(res.data);
    } catch (err) {
      console.error("Failed to fetch skills:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?._id) {
      fetchSkills();
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSkill((prev) => ({
      ...prev,
      [name]: name === "proficiencyLevel" ? parseInt(value) : value,
    }));
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/skills", { ...newSkill, userId: user._id });
      setNewSkill({
        name: "",
        category: "",
        proficiencyLevel: 1,
        yearsExperience: "",
        description: "",
        projectUrl: "",
      });
      fetchSkills();
      toast.success("Skill added successfully!"); // Success toast
    } catch (err) {
      console.error("Failed to add skill:", err);
      toast.error("Failed to add skill. Please try again."); // Error toast
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/api/skills/${id}`);
      fetchSkills();
      toast.success("Skill deleted successfully!"); // Success toast
    } catch (err) {
      console.error("Failed to delete skill:", err);
      toast.error("Failed to delete skill. Please try again."); // Error toast
    }
  };

  const renderStars = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`inline-block ${
          i < level ? "text-yellow-400" : "text-gray-500"
        }`}
      />
    ));
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h2 className="text-xl font-bold text-yellow-400 mb-4">Manage Skills</h2>

      {/* Add Skill Form */}
      <form
        onSubmit={handleAddSkill}
        className="space-y-4 mb-6 bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        {[
          { name: "name", placeholder: "Skill Name" },
          { name: "category", placeholder: "Category" },
          { name: "yearsExperience", placeholder: "Years of Experience" },
          { name: "description", placeholder: "Description" },
          { name: "projectUrl", placeholder: "Project URL (optional)" },
        ].map(({ name, placeholder }) => (
          <input
            key={name}
            name={name}
            value={newSkill[name]}
            onChange={handleChange}
            placeholder={placeholder}
            required={name !== "projectUrl"}
            className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        ))}

        <select
          name="proficiencyLevel"
          value={newSkill.proficiencyLevel}
          onChange={handleChange}
          className="w-full border border-gray-600 bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          {[1, 2, 3, 4, 5].map((lvl) => (
            <option key={lvl} value={lvl}>
              Proficiency {lvl}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded-md w-full hover:bg-green-500 focus:outline-none"
        >
          Add Skill
        </button>
      </form>

      {/* Your Skills List */}
      <div>
        <h3 className="text-lg font-semibold text-yellow-400 mb-4">
          Your Skills
        </h3>
        {skills.length === 0 ? (
          <p className="text-white">No skills added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="bg-gray-800 p-4 rounded-lg shadow-md text-white hover:bg-gray-700 transition-all"
              >
                <div className="text-xl font-semibold text-yellow-400 mb-2">
                  {skill.name}
                </div>
                <div className="text-sm text-gray-400 mb-1">
                  {skill.category}
                </div>
                <div className="text-sm text-gray-300 mb-1">
                  {skill.yearsExperience} years
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  {skill.description}
                </div>

                {/* ⭐ Star Rating */}
                <div className="mb-2">
                  {renderStars(skill.proficiencyLevel)}
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(skill._id)}
                  className="flex items-center text-red-500 hover:text-red-400 transition-all text-sm"
                >
                  <FaTrashAlt className="mr-2" /> Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default SkillManager;
