import Link from "next/link";
import {
  ArticleCards,
  BrandSearch,
  ContactSection,
  ContactStrip,
  FeatureGrid,
  FeaturedServices,
  ServiceArea,
  StatsBand,
  WorkProcess,
  WhyChoose,
} from "./components";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-83px)]">
        <video
          className="h-[calc(100vh-83px)] min-h-[560px] w-full object-cover"
          src="/assets/dsf/landing-video.mp4"
          poster="/assets/dsf/landing-1.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
        <div className="section-container absolute inset-x-0 top-1/2 z-10 grid -translate-y-1/2 items-center gap-10 text-white lg:grid-cols-[1fr_390px]">
          <div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">Mobile vehicle servicing & maintenance at your door step.</h1>
            <p className="mt-4 border-l-4 border-[var(--red)] pl-4 text-xl font-black text-[var(--red)]">Across all of Leicestershire</p>
            <p className="mt-5 max-w-2xl leading-8 text-neutral-200">Professional servicing, diagnostics, brakes, batteries and hidden feature coding brought to your home, workplace or roadside.</p>
            <div className="flex flex-wrap gap-3">
              <Link className="button" href="/contact">Book Now</Link>
              <Link className="button bg-white text-neutral-950 hover:bg-neutral-200 focus-visible:bg-neutral-200" href="/services">View Services</Link>
            </div>
          </div>
          <form className="hidden rounded-md bg-white p-7 text-[var(--foreground)] shadow-2xl lg:grid lg:gap-4">
            <h2 className="text-xl font-black">Find Your Mobile Service</h2>
            <select aria-label="Select vehicle make"><option>Vehicle make</option><option>Audi</option><option>Volkswagen</option><option>BMW</option><option>Other</option></select>
            <select aria-label="Select service"><option>Service required</option><option>Servicing</option><option>Diagnostics</option><option>Brakes</option><option>Battery</option></select>
            <select aria-label="Select location"><option>Your location</option><option>Shepshed</option><option>Leicester</option><option>Loughborough</option><option>Elsewhere in Leicestershire</option></select>
            <p className="text-sm font-bold text-[var(--muted)]">Mobile appointments across Leicestershire</p>
            <Link className="button mt-0" href="/contact">Search Availability</Link>
          </form>
        </div>
      </section>
      <ContactStrip />
      <BrandSearch />
      <FeatureGrid />
      <FeaturedServices />
      <StatsBand />
      <WorkProcess />
      <WhyChoose />
      <ServiceArea />
      <ContactSection />
      <ArticleCards />
    </>
  );
}
