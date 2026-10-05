import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import AmenitiesBlocks from "@/components/AmenitiesBlocks";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BookingWidget />
      <AmenitiesBlocks />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default Index;
