import { ContactSection, PageHero, ServicesGrid, Shell } from "../components";

export default function ServicesPage() {
  return (
    <Shell>
      <PageHero
        title="Our Services"
        text="Servicing, diagnostics, repairs, batteries, brakes, suspension and specialist feature coding."
        image="/assets/dsf/services-hero.jpg"
      />
      <ServicesGrid />
      <ContactSection />
    </Shell>
  );
}
