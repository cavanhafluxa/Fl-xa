import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import CardapioShowcase from "@/components/CardapioShowcase";
import Compare from "@/components/Compare";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import Case from "@/components/Case";
import ContactForm from "@/components/ContactForm";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollVelocity from "@/components/magic/ScrollVelocity";
import TextReveal from "@/components/magic/TextReveal";

const VELOCITY_WORDS = [
  "Sem taxas abusivas",
  "Seus dados são seus",
  "Mais ticket médio",
  "Zero caos no delivery",
  "Base de clientes própria",
  "Fluxa Kitchen",
  "Fluxa Cardápio",
  "Database Marketing",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollVelocity items={VELOCITY_WORDS} />
      <Problem />
      <HowItWorks />
      <CardapioShowcase />
      <Compare />
      <TextReveal
        eyebrow="A virada"
        text="O problema não é o seu restaurante. É o canal que você usa."
      />
      <Results />
      <Pricing />
      <Case />
      <ContactForm />
      <FinalCta />
      <Footer />
      <ScrollReveal />
    </>
  );
}
