// export default SkillCard;
import React from "react";
import { FaStar as SolidStar, FaThumbsUp, FaCode } from "react-icons/fa";
import { FaStar as RegularStar } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import api from "../services/api"; // Import your API service
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SkillCard = ({ skill, onSkillUpdated }) => {
  const { user } = useAuth();
  const canEndorse = user && user.role === "visitor" && !skill.endorsedByUser;

  const handleEndorse = async () => {
    if (canEndorse) {
      try {
        const response = await api.post(`api/skills/${skill._id}/endorse`);
        if (response.status === 200) {
          toast.success("Skill endorsed successfully!");
          const updatedSkill = {
            ...skill,
            endorsements: Array(response.data.endorsementCount).fill({}),
            endorsedByUser: true, // Mark as endorsed by the current user
          };
          onSkillUpdated(updatedSkill);
        } else {
          toast.error("Failed to endorse skill.");
          console.error("Failed to endorse skill");
          // Optionally handle error feedback to the user
        }
      } catch (error) {
        toast.error("Error endorsing skill.");
        console.error("Error endorsing skill:", error);
        // Optionally handle error feedback to the user
      }
    }
  };

  const filledStars = Array(skill.proficiencyLevel).fill(SolidStar);
  const emptyStars = Array(5 - skill.proficiencyLevel).fill(RegularStar);

  return (
    <div className="bg-yellow-200 shadow-lg rounded-2xl p-5 mb-6 text-red-800 transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <FaCode className="text-red-600" />
          {skill.name}{" "}
          <span className="text-base font-medium text-red-600">
            ({skill.category})
          </span>
        </h3>
        <span className="text-sm font-medium">{skill.yearsExperience} yrs</span>
      </div>
      <div className="border-b border-gray-500 my-2"></div>{" "}
      {/* Underline after name and category */}
      <p className="text-sm leading-relaxed mb-3">{skill.description}</p>
      <div className="flex justify-between items-center mb-2 flex-wrap">
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">Proficiency:</span>
          {filledStars.map((Icon, index) => (
            <Icon key={index} className="text-red-600" />
          ))}
          {emptyStars.map((Icon, index) => (
            <Icon key={index} className="text-red-300" />
          ))}
        </div>
        <div className="border-b border-gray-500 my-2 w-full"></div>{" "}
        {/* Underline after proficiency */}
        <div className="flex items-center gap-2 flex-wrap mt-2 sm:mt-0">
          <FaThumbsUp className="text-blue-600 text-sm" />
          <span className="text-sm">
            {(skill.endorsements || []).length} Endorsed
          </span>
          {canEndorse && (
            <button
              onClick={handleEndorse}
              className="ml-2 text-sm bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-l hover:from-yellow-500 hover:to-red-600 transition-all"
            >
              Endorse
            </button>
          )}
        </div>
        <div className="border-b border-gray-500 my-2 w-full"></div>{" "}
        {/* Underline after endorsements */}
      </div>
      {skill.projectUrl && (
        <a
          href={skill.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 text-sm text-blue-700 underline hover:text-blue-900"
        >
          🔗 View Related Project
        </a>
      )}
    </div>
  );
};

export default SkillCard;
