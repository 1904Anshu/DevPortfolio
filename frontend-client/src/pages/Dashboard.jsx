// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import api from "../services/api";
// import Chart from "../components/Chart";
// import LoadingSpinner from "../components/LoadingSpinner";

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const res = await api.get(`/api/skills/user/${user._id}`);
//         setSkills(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (user?._id) fetchSkills();
//   }, [user]);

//   if (loading) return <LoadingSpinner />;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Welcome back, {user.name}!</h1>
//       <Chart skills={skills} />
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import api from "../services/api";
// import Chart from "../components/Chart";
// import LoadingSpinner from "../components/LoadingSpinner";

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSkills = async () => {
//       if (!user?._id) {
//         console.warn("User ID not available yet");
//         return;
//       }

//       console.log("Fetching skills for user ID:", user._id);

//       try {
//         const res = await api.get(`/api/skills/user/67f827d92acb36c51d97b028`);

//         console.log("Fetched skills:", res.data);
//         setSkills(res.data);
//       } catch (err) {
//         console.error("Error while fetching skills:", err);
//         setError("Failed to load skills. Check console for details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, [user]);

//   if (loading) return <LoadingSpinner />;

//   if (error) {
//     return (
//       <div className="p-6 text-red-500 font-semibold">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">
//         Welcome back, {user?.name || "User"}!
//       </h1>
//       <Chart skills={skills} />
//     </div>
//   );
// };

// export default Dashboard;

// Dashboard.jsx;

// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import api from "../services/api";
// import Chart from "../components/Chart";
// import LoadingSpinner from "../components/LoadingSpinner";

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSkills = async () => {
//       if (!user?._id) {
//         console.warn("User ID not available yet");
//         return;
//       }

//       try {
//         const res = await api.get(`/api/skills/user/${}`);
//         setSkills(res.data);
//       } catch (err) {
//         console.error("Error while fetching skills:", err);
//         setError("Failed to load skills. Check console for details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, [user]);

//   if (loading) return <LoadingSpinner />;

//   if (error) {
//     return (
//       <div className="p-6 text-red-500 font-semibold">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full bg-gray-950 text-white px-4 py-6">
//       <h1 className="text-3xl font-bold mb-8">
//         Welcome back, {user?.name || "User"}!
//       </h1>

//       <div className="bg-gray-800 rounded-2xl p-6 shadow-xl w-full max-w-4xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4 text-center">
//           Your Skill Chart
//         </h2>
//         <Chart skills={skills} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import api from "../services/api";
// import Chart from "../components/Chart";
// import LoadingSpinner from "../components/LoadingSpinner";

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [userSkills, setUserSkills] = useState([]);
//   const [avgSkills, setAvgSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSkills = async () => {
//       if (!user?._id) {
//         console.warn("User ID not available yet");
//         return;
//       }

//       try {
//         const [userRes, avgRes] = await Promise.all([
//           api.get(`/api/skills/user/${user._id}`),
//           api.get("/api/skills/analytics/popularity"),
//         ]);

//         setUserSkills(userRes.data);
//         setAvgSkills(avgRes.data);
//       } catch (err) {
//         console.error("Error while fetching dashboard data:", err);
//         setError("Failed to load skill data. Please check console.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, [user]);

//   if (loading) return <LoadingSpinner />;

//   if (error) {
//     return (
//       <div className="p-6 text-red-500 font-semibold">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full bg-gray-950 text-white px-4 py-6">
//       <h1 className="text-3xl font-bold mb-8">
//         Welcome back, {user?.name || "User"}!
//       </h1>

//       <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
//           <h2 className="text-xl font-semibold mb-4 text-center">
//             Your Skills by Endorsements
//           </h2>
//           <Chart
//             data={userSkills}
//             xKey="name"
//             yKey="endorsementCount"
//             color="#3b82f6"
//           />
//         </div>

//         <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
//           <h2 className="text-xl font-semibold mb-4 text-center">
//             Platform Average Endorsements
//           </h2>
//           <Chart
//             data={avgSkills}
//             xKey="skill"
//             yKey="averageEndorsements"
//             color="#10b981"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Importing AuthContext
import api from "../services/api"; // Assuming you have your api set up
import Chart from "../components/Chart";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
  const { user, token } = useContext(AuthContext); // Getting user from context
  const [userSkills, setUserSkills] = useState([]);
  const [avgSkills, setAvgSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSkills = async () => {
      if (!user?._id) {
        console.warn("User ID not available yet");
        return;
      }

      try {
        // Fetch user data using user._id, no token needed for this request
        const [userRes, avgRes] = await Promise.all([
          api.get(`/api/skills/user/${user._id}`), // Using user ID directly
          api.get("/api/skills/analytics/popularity", {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in header for popularity analytics
            },
          }), // Using the token from AuthContext (already set in API defaults)
        ]);

        setUserSkills(userRes.data);
        setAvgSkills(avgRes.data);

        console.log("User Skills:", userRes.data);
        console.log("Average Skills:", avgRes.data);
      } catch (err) {
        console.error("Error while fetching dashboard data:", err);
        setError("Failed to load skill data. Please check console.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, [user]); // Only depend on user in the dependency array

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="p-6 text-red-500 font-semibold">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-950 text-white px-4 py-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-sm">
          Welcome, {user?.name || "User"}!
        </h1>
        <p className="mt-2 text-gray-300 text-sm">
          Here's a quick look at your tech skills and how they compare across
          the platform.
        </p>
      </div>

      {/* Check if both userSkills and avgSkills have data before rendering charts */}
      {userSkills.length > 0 && avgSkills.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-center text-yellow-300">
              Your Skills
            </h2>
            <Chart
              data={userSkills}
              xKey="name"
              yKey="endorsementCount"
              color="#FFD700"
              type="bar"
            />
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-center text-yellow-300">
              Platform Average Endorsements
            </h2>
            <Chart
              data={avgSkills}
              xKey="skill"
              yKey="averageEndorsements"
              type="pie"
            />
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400">
          <p>No skill data available to display charts.</p>
        </div>
      )}

      <div className="mt-10 max-w-4xl mx-auto text-center text-sm text-gray-400">
        <p>
          Keep learning and growing! Every endorsement you receive adds value to
          your profile.
        </p>
        <p className="mt-1 italic text-gray-500">
          "Your skills are your superpower." 🚀
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
