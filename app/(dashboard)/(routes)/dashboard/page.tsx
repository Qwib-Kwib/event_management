"use client";

import React from 'react'
import { 
  Calendar, 
  Users, 
  TicketIcon, 
  Settings, 
  PlusCircle, 
  ListChecks 
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation'

const EventDashboard = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Event Handler</h2>
        </div>
        
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-2 h-4 w-4" /> Upcoming Events
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" /> Attendees
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <TicketIcon className="mr-2 h-4 w-4" /> Tickets
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ListChecks className="mr-2 h-4 w-4" /> Event Management
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8 bg-white">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Event Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Export Reports</Button>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </div>
        </header>

        {/* Tabs for Different Views */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">This Month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Registered Attendees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,542</div>
                  <p className="text-xs text-green-500">+8.2% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$45,231</div>
                  <p className="text-xs text-muted-foreground">From Ticket Sales</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Upcoming Events Tab */}
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Tech Conference 2024</h3>
                      <p className="text-sm text-muted-foreground">June 15-16, 2024</p>
                    </div>
                    <div>
                      <Badge variant="outline">250 Seats</Badge>
                      <Badge variant="secondary" className="ml-2">Open</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Music Festival</h3>
                      <p className="text-sm text-muted-foreground">July 22-23, 2024</p>
                    </div>
                    <div>
                      <Badge variant="outline">500 Seats</Badge>
                      <Badge variant="secondary" className="ml-2">Open</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Startup Pitch Day</h3>
                      <p className="text-sm text-muted-foreground">August 10, 2024</p>
                    </div>
                    <div>
                      <Badge variant="outline">100 Seats</Badge>
                      <Badge variant="destructive" className="ml-2">Selling Fast</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Event Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Attendance Rate</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Ticket Sales</span>
                    <span className="font-bold">$189</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Popular Event Type</span>
                    <span className="font-bold">Tech Conferences</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Download Full Report
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default EventDashboard;