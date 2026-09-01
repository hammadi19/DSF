import {
  ContactSection,
  ContactStrip,
  FeatureGrid,
  FeaturedServices,
  ServiceArea,
  StatsBand,
  WorkProcess,
  WhyChoose,
} from "./components";
import { HomeHero } from "./home-hero";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ContactStrip />
      <FeatureGrid />
      <FeaturedServices />
      <StatsBand />
      <WorkProcess />
      <WhyChoose />
      <ServiceArea />
      <ContactSection />
    </>
  );
}
