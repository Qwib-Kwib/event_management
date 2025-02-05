import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Navbar />
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8 bg-cyan-900/20">
        <div className="flex flex-col justify-center space-y-4 ">
          <h1 className="text-cyan-300 text-8xl font-bold leading-tight">
            ILOVATION:
          </h1>
          <h2 className="text-white text-3xl font-semibold">
            EVENT MANAGEMENT APPLICATION
          </h2>
        </div>
        <div className="bg-[#83fdf4] min-h-[400px]">
          {/* Top Image Goes Here */}
        </div>
      </div>

      {/* Popular Events Section */}
      <div className="px-8 py-12 bg-[#0b0c10]">
        <h2 className="text-white text-2xl font-bold mb-8">Popular Events Near You:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event Cards */}
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-[#0b0c10] text-white">
              <CardContent className="p-0">
                <div className="aspect-video bg-[#0b0c10] rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Event Title</h3>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-sm text-gray-400">Tue, 04 Oct</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="default" className="bg-white text-black hover:bg-cyan-400">
            CHECK OUT ALL EVENTS FOR YOU
          </Button>
          
        </div>
      </div>
          
      {/* Footer Area */}
      <div className="bg-[#83fdf4] h-24 flex justify-center align-middle p-6">
      <Button variant="default" className="bg-white text-black hover:bg-cyan-400">
        About Me
      </Button>
      </div>
      
    </div>
  );
};

export default LandingPage;