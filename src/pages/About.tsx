import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sprout, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"
          alt="Trailhead Lodge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">About Trailhead Lodge</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nestled in the shadow of the Peak, Trailhead Lodge is more than just a place to stay—it's a 
            celebration of sustainable living, authentic hospitality, and the rich agricultural heritage of Your Country. 
            Our property combines modern comfort with traditional farming practices, offering guests a unique experience 
            that connects them with nature and local culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Heart className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded by the host family three generations ago, our farm began as a small vegetable garden 
                  and has grown into a thriving organic farm. In 2015, we opened our doors to guests, wanting to 
                  share the beauty of our land and the bounty of our harvest with travelers from around the world.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Sprout className="h-8 w-8 text-accent mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Farm to Table</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Everything we serve comes fresh from our fields. From crisp vegetables to aromatic herbs, 
                  our organic farm supplies the kitchen daily. We believe in sustainable agriculture and take 
                  pride in offering our guests meals that are not only delicious but also environmentally responsible.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Meet the Family</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The host family—Joseph, Maria, and their children—personally oversee all aspects of the property. 
                  Joseph manages the farm operations, Maria creates the delicious meals, and together they ensure 
                  every guest feels like part of the family.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-accent mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sustainability, authenticity, and hospitality are at the heart of everything we do. We're committed 
                  to preserving our land for future generations while providing an unforgettable experience for our guests.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Trailhead Lodge?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <p className="text-muted-foreground">Generations of Farming</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Organic Produce</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5★</div>
              <p className="text-muted-foreground">Guest Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1595231776345-e727b8dc36ae?q=80&w=2070"
              alt="Farm activities"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Experience Farm Life</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Guests are welcome to explore our farm, learn about organic farming practices, and even participate 
              in harvesting activities. It's a hands-on experience that brings you closer to the source of your meals 
              and the rhythm of rural life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're relaxing by the infinity pool with views of the Peak, strolling through our gardens, 
              or enjoying a freshly prepared meal, every moment at Trailhead Lodge is designed to reconnect you 
              with nature and yourself.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
