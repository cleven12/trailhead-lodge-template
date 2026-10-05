import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "An absolutely magical experience! The infinity pool overlooking the farmland with the Peak in the distance is breathtaking. The farm-fresh meals were delicious, and the accommodation was spotless and comfortable.",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The tented camp exceeded all expectations. Waking up to the sounds of nature and enjoying fresh meals from the on-site farm made this stay unforgettable. The staff were incredibly welcoming.",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "Perfect blend of luxury and nature. The rooms are beautifully designed, the gardens are stunning, and the food is exceptional. I can't wait to return!",
  },
  {
    name: "David Martinez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "A hidden gem near the Peak! The peaceful setting, incredible views from the pool, and the warmth of the hospitality made our stay truly special. Highly recommended!",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Guest Experiences
        </h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-6 flex-grow italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
