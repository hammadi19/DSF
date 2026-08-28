import { ContactSection, PageHero, ServicesGrid } from "../components";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        text="Servicing, diagnostics, repairs, batteries, brakes, suspension and specialist feature coding."
        image="/assets/dsf/services-hero.jpg"
      />
      <ServicesGrid />
      <ContactSection />
    </>
  );
}
