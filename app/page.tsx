import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Compare from "@/components/Compare";
import Results from "@/components/Results";
import Case from "@/components/Case";
import ContactForm from "@/components/ContactForm";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <HowItWorks />
      <Compare />
      <Results />
      <Case />
      <ContactForm />
      <FinalCta />
      <Footer />
      <ScrollReveal />
    </>
  );
}
