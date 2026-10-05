import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    date: "January 2025",
    rating: 5,
    text: "An absolutely magical experience! The infinity pool overlooking the farmland with the Peak in the distance is breathtaking. The farm-fresh meals were delicious, and the accommodation was spotless and comfortable. The host family made us feel like we were part of their family. Can't wait to return!",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    date: "December 2024",
    rating: 5,
    text: "The tented camp exceeded all expectations. Waking up to the sounds of nature and enjoying fresh meals from the on-site farm made this stay unforgettable. The staff were incredibly welcoming and attentive. This is exactly what eco-tourism should be—luxurious yet sustainable.",
    initials: "MC",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    date: "November 2024",
    rating: 5,
    text: "Perfect blend of luxury and nature. The rooms are beautifully designed with every modern amenity, yet you feel completely immersed in the natural surroundings. The gardens are stunning, the food is exceptional, and the views of the Peak are worth the trip alone. I can't wait to return!",
    initials: "EW",
  },
  {
    name: "David Martinez",
    location: "Barcelona, Spain",
    date: "October 2024",
    rating: 5,
    text: "A hidden gem near the Peak! The peaceful setting, incredible views from the pool, and the warmth of the hospitality made our stay truly special. The organic farm tour was a highlight—seeing where our meals came from added so much to the experience. Highly recommended!",
    initials: "DM",
  },
  {
    name: "Priya Patel",
    location: "Mumbai, India",
    date: "September 2024",
    rating: 5,
    text: "Our family had the most wonderful time at Trailhead Lodge. The children loved exploring the farm and learning about sustainable agriculture. The accommodations were spacious and comfortable. Maria's cooking is incredible—every meal was a celebration of fresh, local flavors.",
    initials: "PP",
  },
  {
    name: "James O'Connor",
    location: "Dublin, Ireland",
    date: "August 2024",
    rating: 5,
    text: "I've stayed at many hotels around the world, but Trailhead Lodge stands out. The personal touch, the genuine care from the staff, and the commitment to sustainability are remarkable. The infinity pool at sunset is an experience I'll never forget. Worth every penny!",
    initials: "JO",
  },
  {
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    date: "July 2024",
    rating: 5,
    text: "A peaceful retreat away from city life. The combination of comfort, nature, and authentic local hospitality created a perfect vacation. The tented accommodation was surprisingly luxurious, and waking up to views of the farm was magical. The meals were healthy and delicious.",
    initials: "YT",
  },
  {
    name: "Sophie Dubois",
    location: "Paris, France",
    date: "June 2024",
    rating: 5,
    text: "Magnifique! From the moment we arrived, we felt welcomed and cared for. The property is beautifully maintained, the rooms are elegant, and the farm-to-table dining concept is executed perfectly. The location near the Peak adds to the magic. A must-visit for anyone traveling to Your Country!",
    initials: "SD",
  },
];

const Reviews = () => {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074"
          alt="Guest Reviews"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Guest Reviews</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-muted/30 rounded-lg p-8 mb-12 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-primary text-primary" />
            ))}
          </div>
          <div className="text-5xl font-bold text-foreground mb-2">{averageRating.toFixed(1)}/5</div>
          <p className="text-xl text-muted-foreground">Based on {reviews.length} verified guest reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-muted opacity-20" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6">
                    {review.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-accent/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We'd love to hear about your stay at Trailhead Lodge. Your feedback helps us improve and helps 
            other travelers make informed decisions.
          </p>
          <p className="text-sm text-muted-foreground">
            Reviews are verified through our booking system to ensure authenticity.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
