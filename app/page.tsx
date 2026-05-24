import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Services } from "@/components/Services";
import { WhyCoulee } from "@/components/WhyCoulee";
import { Process } from "@/components/Process";
import { ServiceArea } from "@/components/ServiceArea";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TrustMarquee />
        <Services />
        <WhyCoulee />
        <Process />
        <Pricing />
        <ServiceArea />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
