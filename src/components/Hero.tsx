import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/70" />
      </div>
      
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Paradise Near the Peak
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-foreground/90 md:text-2xl">
          Experience luxury accommodation with breathtaking infinity pool views and farm-fresh meals
        </p>
        <Button size="lg" className="text-lg" onClick={() => navigate("/accommodations")}>
          Explore Accommodations
        </Button>
      </div>
    </section>
  );
};

export default Hero;
