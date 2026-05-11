import Hero from "@/components/sections/hero";
import Problems from "@/components/sections/problems";
import Solutions from "@/components/sections/solutions";
import HowItWork from "@/components/sections/how-it-work";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";  
import LatestReports from "@/components/sections/reports";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Problems />
      <Solutions />
      <HowItWork />
      <Features />
      <LatestReports />
      <Testimonials />
      <CTA />
    </main>
  );
}