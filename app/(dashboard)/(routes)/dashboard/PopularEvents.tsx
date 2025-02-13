import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

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

const PopularEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/events");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data.slice(0, 3)); // ✅ Get only the first 3 events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
      <div className="container mx-auto w-full max-w-6xl py-8 px-4">
        <h2 className="text-3xl font-bold mb-8">
          Popular Events <span className="text-purple-600">Near You:</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <Card
                key={event.id}
                className="shadow-md hover:shadow-xl transition-all"
              >
                <CardContent className="p-1">
                  <img
                    src={event.cover_image || "/images/Image_1.png"} // Handle missing image
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.name}
                    </h3>
                    <p className="text-gray-600">{event.venue || "Online"}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-400">No events available.</p>
          )}
        </div>
      </div>
  );
};

export default PopularEvents;
