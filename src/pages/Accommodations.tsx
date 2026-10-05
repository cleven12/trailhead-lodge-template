import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const accommodations = [
  {
    id: 1,
    type: "Deluxe Room",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
    price: 150,
    description: "Spacious room in our main house with stunning garden views and modern amenities",
    amenities: ["Private bathroom", "Balcony", "Air conditioning", "King-size bed", "Mini fridge"],
    mealsIncluded: true,
  },
  {
    id: 2,
    type: "Family Suite",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074",
    price: 250,
    description: "Perfect for families with separate sleeping areas and private terrace",
    amenities: ["2 Bedrooms", "Private bathroom", "Living area", "Terrace", "Air conditioning"],
    mealsIncluded: true,
  },
  {
    id: 3,
    type: "Luxury Tent",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021",
    price: 120,
    description: "Glamping experience with comfortable beds and en-suite facilities surrounded by nature",
    amenities: ["Queen-size bed", "En-suite bathroom", "Private deck", "Solar lighting", "Lounge chairs"],
    mealsIncluded: true,
  },
  {
    id: 4,
    type: "Standard Room",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
    price: 100,
    description: "Cozy and comfortable room with all essential amenities for a pleasant stay",
    amenities: ["Private bathroom", "Double bed", "Fan", "Wardrobe", "Reading area"],
    mealsIncluded: true,
  },
];

const Accommodations = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080"
          alt="Accommodations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Our Accommodations</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Choose from our carefully designed rooms and tented camps, each offering comfort and stunning views. 
          All accommodations include farm-fresh meals sourced from our organic farm.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.type}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {accommodation.mealsIncluded && (
                  <Badge className="absolute top-4 right-4 bg-accent">
                    Meals Included
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">{accommodation.type}</CardTitle>
                  <p className="text-2xl font-bold text-primary">${accommodation.price}<span className="text-sm text-muted-foreground">/night</span></p>
                </div>
                <CardDescription className="text-base mt-2">
                  {accommodation.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => navigate("/booking")}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accommodations;
