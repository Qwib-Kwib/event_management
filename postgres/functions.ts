// Define the Event type
export interface EventData {
    id: number;
    name: string;
    date: string;
    location: string;
  }
  
  // Fetch events with a typed return value
  export const fetchEvents = async (): Promise<EventData[]> => {
    try {
      const response = await fetch("/events");  
      const data: EventData[] = await response.json(); // Explicitly define type
      return data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };
  