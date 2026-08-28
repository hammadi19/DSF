import { ContactSection, PageHero } from "../components";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        text="Professional mobile vehicle servicing and repairs from Shepshed across Leicestershire."
        image="/assets/dsf/about-hero.png"
      />
      <section className="section-y">
        <div className="section-container grid gap-10 text-[var(--muted)] md:grid-cols-2">
          <div className="space-y-6">
            <p>At DSF Autocare, we believe getting your vehicle serviced or repaired should be straightforward, convenient and affordable. Based in Shepshed, we provide professional mobile vehicle servicing and repairs across Leicestershire, bringing the garage directly to your home or workplace.</p>
            <p>Whether your car needs a routine service, brake replacement, diagnostics or mechanical repairs, we&apos;re committed to delivering honest advice, quality workmanship and transparent pricing on every job. Our fully equipped mobile service saves you the inconvenience of taking your vehicle to a garage, allowing you to carry on with your day while we take care of your car.</p>
          </div>
          <div className="space-y-6">
            <p>Having worked on countless Volkswagen, Audi and BMW vehicles over the years, we&apos;ve built a strong reputation for our expertise with these manufacturers including unlocking hidden features. Alongside this, we provide professional servicing and repairs for all makes and models, ensuring every customer receives the same trusted service.</p>
            <p>From Shepshed to Leicester, Loughborough, Coalville, Ashby, Hinckley, Melton Mowbray and beyond, DSF Autocare is trusted by drivers across Leicestershire for convenient, professional vehicle servicing and repairs.</p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
