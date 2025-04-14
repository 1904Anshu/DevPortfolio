// import React, { useEffect, useState } from "react";
// import api from "../services/api";
// import ProfileCard from "../components/ProfileCard";
// import LoadingSpinner from "../components/LoadingSpinner";

// const Directory = () => {
//   const [developers, setDevelopers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDevelopers = async () => {
//       try {
//         const res = await api.get("api/users"); // Fetching all users
//         setDevelopers(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDevelopers();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Developer Directory</h2>
//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {developers.length === 0 ? (
//             <p>No developers found.</p>
//           ) : (
//             developers.map((dev) => (
//               <ProfileCard key={dev._id} developer={dev} />
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Directory;

// import React, { useEffect, useState } from "react";
// import api from "../services/api";
// import ProfileCard from "../components/ProfileCard";
// import LoadingSpinner from "../components/LoadingSpinner";
// import DeveloperDetailModal from "../components/DeveloperDetailModal";

// const Directory = () => {
//   const [developers, setDevelopers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedDeveloper, setSelectedDeveloper] = useState(null);

//   useEffect(() => {
//     const fetchDevelopers = async () => {
//       try {
//         const res = await api.get("api/users");
//         setDevelopers(res.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDevelopers();
//   }, []);

//   return (
//     <div className={`p-6 relative ${selectedDeveloper ? "blur-sm" : ""}`}>
//       <h2 className="text-2xl font-bold mb-4 text-white">
//         Developer Directory
//       </h2>
//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {developers.length === 0 ? (
//             <p>No developers found.</p>
//           ) : (
//             developers.map((dev) => (
//               <ProfileCard
//                 key={dev._id}
//                 developer={dev}
//                 onView={() => setSelectedDeveloper(dev)}
//               />
//             ))
//           )}
//         </div>
//       )}

//       {/* Modal */}
//       {selectedDeveloper && (
//         <DeveloperDetailModal
//           developerId={selectedDeveloper._id}
//           onClose={() => setSelectedDeveloper(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Directory;

// import React, { useEffect, useState, useContext } from "react";
// import api from "../services/api";
// import ProfileCard from "../components/ProfileCard";
// import LoadingSpinner from "../components/LoadingSpinner";
// import DeveloperDetailModal from "../components/DeveloperDetailModal";
// import { AuthContext } from "../contexts/AuthContext"; // ✅ Import context

// const Directory = () => {
//   const { token } = useContext(AuthContext); // ✅ Use token from context

//   const [developers, setDevelopers] = useState([]); // All developers
//   const [loading, setLoading] = useState(true); // Loading state
//   const [selectedDeveloper, setSelectedDeveloper] = useState(null); // Developer modal state
//   const [searchTerm, setSearchTerm] = useState(""); // Search term state
//   const [filteredDevelopers, setFilteredDevelopers] = useState([]); // Developers after search

//   // Fetch developers data from the backend
//   useEffect(() => {
//     const fetchDevelopers = async () => {
//       try {
//         const res = await api.get("api/users");
//         setDevelopers(res.data);
//         setFilteredDevelopers(res.data); // Initialize filtered developers
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDevelopers();
//   }, []);

//   // Handle the search and filter developers by name or skill
//   useEffect(() => {
//     const filterDevelopers = async () => {
//       if (searchTerm.trim() === "") {
//         setFilteredDevelopers(developers); // No search, show all developers
//       } else {
//         try {
//           const res = await api.get(`/api/skills/search?search=${searchTerm}`, {
//             headers: {
//               Authorization: `Bearer ${token}`, // ✅ Set token here
//             },
//           });

//           setFilteredDevelopers(res.data); // Set the filtered list based on the search result
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     };

//     filterDevelopers();
//   }, [searchTerm, developers, token]); // ✅ Add token to dependency array

//   return (
//     <div className={`p-6 relative ${selectedDeveloper ? "blur-sm" : ""}`}>
//       <div className="text-center mb-6 mt-12">
//         {" "}
//         {/* Added mt-16 for margin-top */}
//         <h2 className="text-4xl font-bold mb-2">
//           <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
//             Developer
//           </span>{" "}
//           Directory
//         </h2>
//         <p className="text-lg text-gray-300 font-medium">
//           Discover and connect with developers based on their skills and
//           experience. Search through a variety of developers to find the best
//           match for your project needs.
//         </p>
//       </div>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search by name or skill"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)} // Update search term
//         className="p-3 rounded border border-gray-300 mb-6 w-full max-w-full" // Updated to w-full
//       />

//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredDevelopers.length === 0 ? (
//             <p>No developers found.</p>
//           ) : (
//             filteredDevelopers.map((dev) => (
//               <ProfileCard
//                 key={dev._id}
//                 developer={dev}
//                 onView={() => setSelectedDeveloper(dev)}
//               />
//             ))
//           )}
//         </div>
//       )}

//       {/* Modal */}
//       {selectedDeveloper && (
//         <DeveloperDetailModal
//           developerId={selectedDeveloper._id}
//           onClose={() => setSelectedDeveloper(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Directory;

import React, { useEffect, useState, useContext } from "react";
import api from "../services/api";
import ProfileCard from "../components/ProfileCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../contexts/AuthContext";

const Directory = () => {
  const { token } = useContext(AuthContext);

  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDevelopers, setFilteredDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const res = await api.get("api/users");
        const ownersOnly = res.data.filter((dev) => dev.role === "owner"); // ✅ Filter only owners
        setDevelopers(ownersOnly);
        setFilteredDevelopers(ownersOnly);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, []);

  useEffect(() => {
    const filterDevelopers = async () => {
      if (searchTerm.trim() === "") {
        setFilteredDevelopers(developers);
      } else {
        try {
          const res = await api.get(`/api/skills/search?search=${searchTerm}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Again filter only owners from search result
          const ownersOnly = res.data.filter((dev) => dev.role === "owner"); // ✅
          setFilteredDevelopers(ownersOnly);
        } catch (err) {
          console.error(err);
        }
      }
    };

    filterDevelopers();
  }, [searchTerm, developers, token]);

  return (
    <div className="p-6">
      <div className="text-center mb-6 mt-12">
        <h2 className="text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
            Developer
          </span>{" "}
          Directory
        </h2>
        <p className="text-lg text-gray-300 font-medium">
          Discover and connect with developers based on their skills and
          experience. Search through a variety of developers to find the best
          match for your project needs.
        </p>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or skill"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 rounded border border-gray-300 mb-6 w-full max-w-full"
      />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDevelopers.length === 0 ? (
            <p>No developers found.</p>
          ) : (
            filteredDevelopers.map((dev) => (
              <ProfileCard key={dev._id} developer={dev} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Directory;
