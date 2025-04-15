import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import api from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import SkillCard from "../components/SkillCard";
import { toast } from "react-toastify";

const DeveloperProfile = () => {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeveloper = async () => {
      try {
        const res = await api.get(`api/users/${id}`);
        setDeveloper(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSkills = async () => {
      try {
        const res = await api.get(`api/skills/user/${id}`);
        setSkills(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    Promise.all([fetchDeveloper(), fetchSkills()]).finally(() =>
      setLoading(false)
    );
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!developer)
    return (
      <p className="text-center text-yellow-400 mt-10">Developer not found</p>
    );

  const {
    name,
    title,
    yearsOfExperience,
    profilePictureUrl,
    email,
    socialLinks = {},
  } = developer;
  const { github, linkedin } = socialLinks;

  return (
    <div className="min-h-screen bg-gray-900 text-yellow-400">
      {/* Profile Content */}
      <div className="max-w-5xl mx-auto p-6 bg-gray-900 rounded-lg shadow-md ">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img
            src={profilePictureUrl || "https://via.placeholder.com/150"}
            alt={name}
            className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400"
          />
          <div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-yellow-300">{title}</p>
            <p className="text-sm mt-2">
              {yearsOfExperience ?? 0} years of experience
            </p>
            {email && (
              <p className="flex items-center gap-2 mt-2">
                <FaEnvelope />
                <a
                  href={`mailto:${email}`}
                  className="hover:underline text-yellow-400"
                >
                  {email}
                </a>
              </p>
            )}
            <div className="flex items-center gap-6 mt-4 text-lg">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300"
                >
                  <FaGithub />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-300"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 border-b border-yellow-500 pb-2">
            Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
