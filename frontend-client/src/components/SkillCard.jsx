import React, { useState } from "react";
import {
  FaStar as SolidStar,
  FaThumbsUp,
  FaThumbsUp as SolidThumbsUp,
  FaCode,
} from "react-icons/fa";
import { FaStar as RegularStar } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import api from "../services/api";
import { toast } from "react-toastify";

const SkillCard = ({ skill, onSkillUpdated }) => {
  const { user } = useAuth();
  const [endorsed, setEndorsed] = useState(skill.endorsedByUser || false);
  const canEndorse = user && user.role === "visitor" && !endorsed;

  const handleEndorse = async () => {
    if (!canEndorse) {
      toast.info("You have already endorsed this skill.");
      return;
    }

    try {
      const response = await api.post(`api/skills/${skill._id}/endorse`);
      if (response.status === 200) {
        toast.success("Skill endorsed successfully!");
        const updatedSkill = {
          ...skill,
          endorsements: Array(response.data.endorsementCount).fill({}),
          endorsedByUser: true,
        };
        onSkillUpdated(updatedSkill);
        setEndorsed(true);
      } else {
        toast.error("Failed to endorse skill. Please try again later.");
      }
    } catch (error) {
      console.error("Error endorsing skill:", error);
      if (error.response) {
        toast.error(
          `Error: ${error.response.data.message || "Failed to endorse skill."}`
        );
      } else if (error.request) {
        toast.error("No response from server. Please check your connection.");
      } else {
        toast.error("Error setting up the endorsement request.");
      }
    }
  };

  const filledStars = Array(skill.proficiencyLevel).fill(SolidStar);
  const emptyStars = Array(5 - skill.proficiencyLevel).fill(RegularStar);

  return (
    <div className="bg-gray-800 text-white shadow-lg rounded-2xl p-6 mb-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <FaCode className="text-yellow-400" />
          {skill.name}{" "}
          <span className="text-base font-medium text-yellow-300">
            ({skill.category})
          </span>
        </h3>
        <span className="text-sm font-medium">{skill.yearsExperience} yrs</span>
      </div>

      <div className="border-b border-gray-500 my-3" />

      <p className="text-sm leading-relaxed mb-4">{skill.description}</p>

      <div className="flex items-center gap-1 mb-3">
        <span className="text-sm font-medium">Proficiency:</span>
        {filledStars.map((Icon, index) => (
          <Icon key={index} className="text-yellow-400" />
        ))}
        {emptyStars.map((Icon, index) => (
          <Icon key={index} className="text-gray-400" />
        ))}
      </div>

      <div className="border-b border-gray-500 my-3" />

      <div className="flex justify-between items-center gap-3 mt-3">
        <div className="flex items-center gap-2">
          {endorsed ? (
            <SolidThumbsUp className="text-green-500 text-sm" />
          ) : (
            <FaThumbsUp className="text-blue-500 text-sm" />
          )}
          <span className="text-sm">
            {(skill.endorsements || []).length} Endorsed
          </span>
        </div>

        <button
          onClick={handleEndorse}
          disabled={!canEndorse}
          className={`text-sm px-4 py-2 rounded-md transition-all ${
            canEndorse
              ? "bg-gradient-to-r from-yellow-400 to-red-500 text-black hover:from-red-500 hover:to-yellow-400"
              : "bg-gray-500 text-white cursor-not-allowed"
          }`}
        >
          {endorsed ? "Already Endorsed" : "Endorse"}
        </button>
      </div>

      <div className="border-b border-gray-500 my-3" />

      {skill.projectUrl && (
        <a
          href={skill.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 text-sm text-blue-500 underline hover:text-blue-300"
        >
          🔗 View Related Project
        </a>
      )}
    </div>
  );
};

export default SkillCard;
