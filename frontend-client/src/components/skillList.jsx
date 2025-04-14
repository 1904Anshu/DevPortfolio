import React, { useState, useEffect } from "react";
import axios from "axios";
import SkillCard from "./SkillCard";
import { useAuth } from "../hooks/useAuth"; // Import useAuth from the context

const SkillsList = () => {
  const [skills, setSkills] = useState([]);
  const { user, loading, token } = useAuth(); // Get user, token, and loading from AuthContext

  // Fetch skills data (assuming you fetch this data from an API)
  useEffect(() => {
    if (!loading && token) {
      const fetchSkills = async () => {
        try {
          const res = await axios.get("/api/skills", {
            headers: {
              Authorization: `Bearer ${token}`, // Use token from context
            },
          });
          setSkills(res.data); // Set skills from the API response
        } catch (err) {
          console.error("Failed to fetch skills", err);
        }
      };

      fetchSkills();
    }
  }, [loading, token]); // Run only when loading is false and token is available

  // Handle endorsement logic
  const handleEndorse = async (skillId) => {
    try {
      const res = await axios.post(
        `/api/skills/${skillId}/endorse`, // Adjust with your actual route
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use token from context
          },
        }
      );

      // Update the endorsement count in the skill data
      const updatedSkills = skills.map((skill) =>
        skill._id === skillId
          ? {
              ...skill,
              endorsements: res.data.endorsementCount,
              endorsedByUser: true,
            }
          : skill
      );
      setSkills(updatedSkills); // Update the state of skills
    } catch (err) {
      console.error("Failed to endorse skill", err);
    }
  };

  // Show loading message while the data is being fetched
  if (loading) {
    return <div>Loading app...</div>;
  }

  return (
    <div className="skills-list">
      {skills.length > 0 ? (
        skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} onEndorse={handleEndorse} />
        ))
      ) : (
        <p>No skills found</p>
      )}
    </div>
  );
};

export default SkillsList;
