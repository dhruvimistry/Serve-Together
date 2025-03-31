import React, { useEffect, useState } from "react";
import EventsCard from "../components/common/EventsCard";
import SearchBar from "../components/common/SearchBar";
import eventsData from "../utils/eventsData";

const Events: React.FC = () => {
  const [events, setEvents] = useState<{ title: string; nameOfOrganization: string; location: string; date: string; time: string; skills: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsData); 
    }, 500);
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid bg-white">
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Featured Events</h2>
        
        <SearchBar
          placeholder="Search by event, location, or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <div className="row">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="col-md-6 mb-4">
                <EventsCard {...event} /> 
              </div>
            ))
          ) : (
            <p className="text-center">No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
