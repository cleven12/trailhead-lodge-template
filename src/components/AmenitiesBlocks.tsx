import { Bed, Utensils, Waves } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const amenities = [
  {
    icon: Bed,
    title: "Accommodation",
    description: "Luxurious rooms in our main house and spacious tented camps surrounded by nature",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070",
  },
  {
    icon: Waves,
    title: "Amenities",
    description: "Stunning infinity pool with the Peak views, shared lounge, and beautifully maintained gardens",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
  },
  {
    icon: Utensils,
    title: "Meals",
    description: "Farm-to-table dining experience with fresh ingredients from our on-site organic farm",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070",
  },
];

const AmenitiesBlocks = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Experience Luxury & Nature
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <Card key={amenity.title} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {amenity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesBlocks;
