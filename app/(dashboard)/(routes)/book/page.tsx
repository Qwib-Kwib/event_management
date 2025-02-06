import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CreateEventPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-2xl space-y-8 mt-16">
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-8">
              <h1 className="text-2xl font-bold text-center">Create Event</h1>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="eventTitle">Event Title</Label>
                  <Input id="eventTitle" placeholder="Event Title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="meetup">Meetup</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date and Time</Label>
                  <Input id="startDate" type="datetime-local" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date and Time</Label>
                  <Input id="endDate" type="datetime-local" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Event Location</Label>
                  <Input id="location" placeholder="Enter event location" />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-center">Event Description</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="eventImage">Event Image</Label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
                    <div className="text-center">
                      <Input id="eventImage" type="file" className="sr-only" />
                      <Label 
                        htmlFor="eventImage" 
                        className="cursor-pointer text-sm text-muted-foreground hover:text-foreground"
                      >
                        Upload an image
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Type here..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <Button className="w-full bg-purple-600" type="submit">
                Create Event
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}