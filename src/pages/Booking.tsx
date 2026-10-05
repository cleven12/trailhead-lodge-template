import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CreditCard, User, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
    toast({
      title: "Booking Confirmed!",
      description: "You will receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-muted/30 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-4">Complete Your Booking</h1>
          <div className="flex justify-center gap-4 items-center">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s}
                </div>
                {s < 4 && <div className={`w-16 h-1 ${step > s ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Select Dates
              </CardTitle>
              <CardDescription>Choose your check-in and check-out dates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="checkin">Check-in Date</Label>
                <Input
                  id="checkin"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="checkout">Check-out Date</Label>
                <Input
                  id="checkout"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <Button onClick={() => setStep(2)} className="w-full" disabled={!checkIn || !checkOut}>
                Continue to Room Selection
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Choose Accommodation</CardTitle>
              <CardDescription>Select your preferred room or tent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Deluxe Room - $150/night", "Family Suite - $250/night", "Luxury Tent - $120/night", "Standard Room - $100/night"].map(
                (room) => (
                  <Card
                    key={room}
                    className={`cursor-pointer transition-all ${
                      selectedRoom === room ? "border-primary border-2" : ""
                    }`}
                    onClick={() => setSelectedRoom(room)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{room}</CardTitle>
                    </CardHeader>
                  </Card>
                )
              )}
              <Button onClick={() => setStep(3)} className="w-full" disabled={!selectedRoom}>
                Continue to Guest Details
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6" />
                Guest Details
              </CardTitle>
              <CardDescription>Please provide your information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input id="firstname" required />
                  </div>
                  <div>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input id="lastname" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required />
                </div>
                <div>
                  <Label htmlFor="dietary">Dietary Restrictions (Optional)</Label>
                  <Textarea
                    id="dietary"
                    placeholder="Please let us know about any dietary restrictions or preferences"
                  />
                </div>
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardnumber">Card Number</Label>
                      <Input id="cardnumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-24 w-24 text-accent" />
              </div>
              <CardTitle className="text-3xl">Booking Confirmed!</CardTitle>
              <CardDescription className="text-lg mt-2">
                Thank you for choosing our hotel. We look forward to welcoming you!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-6 rounded-lg text-left">
                <h3 className="font-semibold mb-2">Booking Details:</h3>
                <p className="text-sm text-muted-foreground">Check-in: {checkIn}</p>
                <p className="text-sm text-muted-foreground">Check-out: {checkOut}</p>
                <p className="text-sm text-muted-foreground">Room: {selectedRoom}</p>
              </div>
              <p className="text-muted-foreground">
                A confirmation email has been sent to your email address with all the details and check-in
                instructions.
              </p>
              <Button onClick={() => (window.location.href = "/")} size="lg">
                Return to Homepage
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
