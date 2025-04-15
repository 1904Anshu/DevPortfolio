// import React, { useEffect, useState, useContext } from "react";
// import api from "../services/api";
// import ProfileCard from "../components/ProfileCard";
// import LoadingSpinner from "../components/LoadingSpinner";
// import { AuthContext } from "../contexts/AuthContext";

// const Directory = () => {
//   const { token } = useContext(AuthContext);

//   const [developers, setDevelopers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredDevelopers, setFilteredDevelopers] = useState([]);

//   useEffect(() => {
//     const fetchDevelopers = async () => {
//       try {
//         const res = await api.get("api/users");
//         const ownersOnly = res.data.filter((dev) => dev.role === "owner"); // ✅ Filter only owners
//         setDevelopers(ownersOnly);
//         setFilteredDevelopers(ownersOnly);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDevelopers();
//   }, []);

//   useEffect(() => {
//     const filterDevelopers = async () => {
//       if (searchTerm.trim() === "") {
//         setFilteredDevelopers(developers);
//       } else {
//         try {
//           const res = await api.get(`/api/skills/search?search=${searchTerm}`);
//           // Again filter only owners from search result
//           const ownersOnly = res.data.filter((dev) => dev.role === "owner"); // ✅
//           setFilteredDevelopers(ownersOnly);
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     };

//     filterDevelopers();
//   }, [searchTerm, developers, token]);

//   return (
//     <div className="p-6">
//       <div className="text-center mb-6 mt-12">
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
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="p-3 rounded border border-gray-300 mb-6 w-full max-w-full"
//       />

//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredDevelopers.length === 0 ? (
//             <p>No developers found.</p>
//           ) : (
//             filteredDevelopers.map((dev) => (
//               <ProfileCard key={dev._id} developer={dev} />
//             ))
//           )}
//         </div>
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

  // Fetch all developers (initial load)
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
    console.log(fetchDevelopers());
  }, []);

  // Filter developers based on searchTerm
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredDevelopers(developers); // Show all developers if searchTerm is empty
    } else {
      const filtered = developers.filter(
        (dev) =>
          dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dev.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDevelopers(filtered); // Update filtered developers
    }
  }, [searchTerm, developers]);

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
