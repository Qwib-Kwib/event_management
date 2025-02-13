"use client";

import { useState, useEffect } from "react";

type Event = {
  id: number;
  name: string;
  description?: string;
  start_time: string;
  end_time: string;
  venue?: string;
  is_virtual: boolean;
  price: number;
  payment_required: boolean;
  cover_image?: string; // Convert `bytea` to base64 if needed
  created_at: string;
  updated_at: string;
  is_visible: boolean;
  type: string;
  organizer_id?: number;
};

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data: Event[]) => setEvents(data)) // Explicit type for fetched data
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong>: {event.description} <br />
            {event.start_time} - {event.end_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
