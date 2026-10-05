import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const BookingWidget = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    navigate("/booking");
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Book Your Stay
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="check-in" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Check-in
                </Label>
                <Input
                  id="check-in"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="check-out" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Check-out
                </Label>
                <Input
                  id="check-out"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="guests">Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full mt-6"
              onClick={handleSearch}
            >
              Check Availability
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingWidget;
