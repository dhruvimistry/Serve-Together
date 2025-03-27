import React, { useEffect, useState } from "react";
import VolunteerCard from "../components/common/VolunteerCard";
import SearchBar from "../components/common/SearchBar";
import volunteersData from "../utils/volunteersData";

const Volunteers: React.FC = () => {
  const [volunteers, setVolunteers] = useState<{ name: string; skills: string; cities: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    setTimeout(() => {
      setVolunteers(volunteersData);
    }, 500);
  }, []);

  // this processes the data for finding out data
  const filteredVolunteers = volunteers.filter(
    (volunteer) =>
      volunteer.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
      volunteer.cities.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid bg-white">
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Volunteers</h2>
        
        <SearchBar
          placeholder="Search by city or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <div className="row">
          {filteredVolunteers.length > 0 ? (
            filteredVolunteers.map((volunteer, index) => (
              <div key={index} className="col-md-6">
                <VolunteerCard {...volunteer} />
              </div>
            ))
          ) : (
            <p className="text-center">No volunteers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;