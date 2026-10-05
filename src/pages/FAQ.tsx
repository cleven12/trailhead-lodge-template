import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqCategories = [
  {
    category: "Booking & Reservations",
    questions: [
      {
        q: "How do I make a reservation?",
        a: "You can book directly through our website using the booking widget on the homepage, or contact us via email or phone. We recommend booking at least 2 weeks in advance, especially during peak season (June-October and December-February).",
      },
      {
        q: "What is your cancellation policy?",
        a: "Free cancellation up to 7 days before check-in. Cancellations made 3-7 days before arrival will incur a 50% charge. Cancellations within 72 hours of arrival are non-refundable. No-shows will be charged the full booking amount.",
      },
      {
        q: "Do you require a deposit?",
        a: "Yes, we require a 30% deposit to confirm your reservation. The remaining balance is due upon arrival. We accept credit cards, bank transfers, and mobile money payments.",
      },
      {
        q: "Can I modify my booking dates?",
        a: "Yes, you can modify your booking up to 7 days before arrival, subject to availability. Please contact us as soon as possible if you need to change your dates.",
      },
    ],
  },
  {
    category: "Check-in & Check-out",
    questions: [
      {
        q: "What are your check-in and check-out times?",
        a: "Check-in is from 2:00 PM onwards. Check-out is by 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability and an additional fee.",
      },
      {
        q: "What do I need to bring for check-in?",
        a: "Please bring a valid government-issued photo ID (passport for international guests) and your booking confirmation. We'll also need a credit card or cash deposit for incidentals.",
      },
      {
        q: "Is there an age restriction?",
        a: "Guests of all ages are welcome! Children under 5 stay free in the same room as parents. We have family suites available for larger groups.",
      },
    ],
  },
  {
    category: "Accommodations",
    questions: [
      {
        q: "What's the difference between rooms and tents?",
        a: "Our rooms are located in the main house and offer traditional hotel-style accommodations with modern amenities. Our luxury tents provide a glamping experience—comfortable beds, en-suite bathrooms, and private decks, surrounded by nature. Both options include all meals.",
      },
      {
        q: "Are the accommodations air-conditioned?",
        a: "Our deluxe rooms and family suites have air conditioning. Standard rooms and tents have ceiling fans and are designed for natural ventilation, which is comfortable year-round due to our elevation.",
      },
      {
        q: "Do all rooms have private bathrooms?",
        a: "Yes, all accommodations have private, en-suite bathrooms with hot water, toiletries, and fresh towels.",
      },
      {
        q: "Is WiFi available?",
        a: "Yes, complimentary WiFi is available in all accommodations and common areas. However, please note that internet speeds may be slower than in urban areas.",
      },
    ],
  },
  {
    category: "Meals & Dining",
    questions: [
      {
        q: "Are meals included in the room rate?",
        a: "Yes! All our accommodations include three farm-fresh meals per day: breakfast, lunch, and dinner. All ingredients are sourced from our organic farm or local suppliers.",
      },
      {
        q: "Can you accommodate dietary restrictions?",
        a: "Absolutely. We cater to vegetarian, vegan, gluten-free, and other dietary needs. Please inform us of any restrictions or allergies at the time of booking or at least 48 hours before arrival.",
      },
      {
        q: "What time are meals served?",
        a: "Breakfast: 7:00 AM - 10:00 AM, Lunch: 12:30 PM - 2:00 PM, Dinner: 7:00 PM - 9:00 PM. Special meal times can be arranged for early departures or excursions.",
      },
      {
        q: "Can I visit the farm?",
        a: "Yes! Farm tours are complimentary for all guests. You can see where your meals come from and learn about our sustainable farming practices. We also offer optional harvesting experiences.",
      },
    ],
  },
  {
    category: "Facilities & Activities",
    questions: [
      {
        q: "What facilities do you offer?",
        a: "We have an infinity pool with the Peak views, shared lounge areas, beautiful gardens, farm walking paths, and a reading library. All facilities are complimentary for guests.",
      },
      {
        q: "Do you organize excursions?",
        a: "While we don't organize tours directly, we can connect you with trusted local tour operators for Peak hikes, wildlife trips, cultural visits, and other activities. We're happy to provide recommendations.",
      },
      {
        q: "Is the property child-friendly?",
        a: "Yes! Children love our farm. They can explore safely, interact with farm animals (supervised), and enjoy the pool. We don't have a formal kids' club, but there's plenty for families to do together.",
      },
      {
        q: "Is parking available?",
        a: "Yes, we offer free, secure on-site parking for all guests.",
      },
    ],
  },
  {
    category: "Location & Transportation",
    questions: [
      {
        q: "How far is Trailhead Lodge from the regional airport?",
        a: "We're approximately 45 minutes (35 km) from the regional international airport. We can arrange airport transfers for an additional fee—just let us know your arrival details.",
      },
      {
        q: "Do you provide transportation?",
        a: "Yes, we offer airport pickup and drop-off services for a fee. We can also arrange transportation for local excursions. Please book in advance.",
      },
      {
        q: "Can I rent a car?",
        a: "We can connect you with reliable car rental services in Your Town. However, we recommend using local drivers who know the area well.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2070"
          alt="Frequently Asked Questions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Frequently Asked Questions</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Find answers to common questions about staying at Trailhead Lodge. Can't find what you're looking for? 
          Feel free to contact us directly.
        </p>

        <div className="space-y-8">
          {faqCategories.map((category, catIndex) => (
            <Card key={catIndex}>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`item-${catIndex}-${qIndex}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-accent/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help! Contact us via phone, email, or our contact form, and we'll get back to you 
            within 24 hours.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact" className="text-primary hover:underline font-semibold">
              Visit Contact Page →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
