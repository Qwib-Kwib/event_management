"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/navbar';
import Link from 'next/link';

// This would typically come from an API call
const sampleEvents = [
  {
    id: 1,
    event_name: "Tech Conference 2025",
    event_location: "San Francisco, CA",
    start_date: "2025-03-15",
    event_image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    event_name: "Music Festival",
    event_location: "Austin, TX",
    start_date: "2025-04-01",
    event_image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    event_name: "Food & Wine Expo",
    event_location: "New York, NY",
    start_date: "2025-03-20",
    event_image: "/api/placeholder/400/300"
  }
];

const LandingPage = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Navbar />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
          <h1 className="text-6xl font-bold text-purple-600">ILOVATION</h1>
          <p className="text-2xl text-gray-600">Event Management</p>
          <Button className="w-fit mx-auto md:mx-0" size="lg">
            Manage Event
          </Button>
        </div>
        <div className="bg-purple-200 rounded-lg min-h-[400px]">
          {/* Hero Image Placeholder */}
        </div>
      </div>

      {/* Popular Events Section */}
      <div className="py-16 px-4" id="popular-events">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Popular Events <span className="text-purple-600">Near You:</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={event.event_image} 
                    alt={event.event_name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{event.event_name}</h3>
                    <p className="text-gray-600">{event.event_location}</p>
                    <p className="text-gray-600">{formatDate(event.start_date)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              size="lg"
              onClick={() => setShowAllEvents(!showAllEvents)}
            >
              {showAllEvents ? 'Hide Events' : 'Check Out All Events For You'}
            </Button>
          </div>
          
          {showAllEvents && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {sampleEvents.map((event) => (
                <Card key={`all-${event.id}`} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={event.event_image} 
                      alt={event.event_name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{event.event_name}</h3>
                      <p className="text-gray-600">{event.event_location}</p>
                      <p className="text-gray-600">{formatDate(event.start_date)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-purple-50 py-16 px-4" id="about-events">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl font-bold text-purple-600 mb-6">Welcome to ILOVATION</h1>
          <p className="text-lg mb-6">
            <span>"</span><strong>ILOVATION</strong> is more than just an event management platform—it's your gateway to creating unforgettable experiences. 
            Whether you're hosting a small gathering, a grand conference, or an online event, ILOVATION is designed to make event planning seamless, smart, and stress-free.<span>"</span>
          </p>
          <p className="text-gray-600">
            Discover events tailored to your interests, connect with inspiring communities, and manage your events with just a few clicks. 
            Our system offers <strong>real-time updates</strong>, <strong>secure booking</strong>, and <strong>easy collaboration tools</strong>—all powered by a user-friendly interface that ensures you stay in control, wherever you are.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Need to Plan an Event?</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg" className="text-black border-white hover:bg-white hover:text-purple-600">
              Create an Event
            </Button>
            <Button variant="outline" size="lg" className="text-black border-white hover:bg-white hover:text-purple-600">
              Find Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;