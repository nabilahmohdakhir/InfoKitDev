// src/components/Timeline.js

import React from 'react';
import '../Timeline.css'; // Create this file for styling

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event) => (
        <div key={event.id} className="timeline-event">
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
