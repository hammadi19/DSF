import Link from "next/link";
import { contact } from "./dsf-data";
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
      <section className="relative min-h-[820px] overflow-hidden rounded-b-[28px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/dsf/landing-video.mp4"
          poster="/assets/dsf/landing-1.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
        <div className="section-container absolute inset-x-0 top-[54%] z-10 grid -translate-y-1/2 items-center gap-12 text-white lg:grid-cols-[1fr_430px]">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black leading-tight sm:text-7xl lg:text-8xl">Mobile vehicle servicing & maintenance at your door step.</h1>
            <p className="mt-7 border-l-4 border-[var(--red)] pl-5 text-3xl font-black text-[var(--red)]">Across all of Leicestershire</p>
            <p className="mt-7 max-w-3xl text-xl font-semibold leading-9 text-white">Professional servicing, diagnostics, brakes, batteries and hidden feature coding brought to your home, workplace or roadside.</p>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link className="hero-cta" href="/contact">
                <span>Call DSF</span>
                <strong>{contact.phone}</strong>
              </Link>
              <Link className="hero-cta" href="/services">
                <span>View Mobile</span>
                <strong>Services</strong>
              </Link>
            </div>
            <div className="mt-8 inline-flex border-b border-white/50 pb-3 text-lg font-bold">
              <span>Want to learn more about us?</span>
              <Link className="ml-4 text-[var(--red)]" href="/about">Click here +</Link>
            </div>
          </div>
          <form className="hidden rounded-lg border border-neutral-200 bg-white p-10 text-[var(--foreground)] shadow-2xl lg:grid lg:gap-5">
            <h2 className="mb-3 text-center text-3xl font-black">Find Your Mobile Service</h2>
            <select aria-label="Select vehicle make"><option>Vehicle make</option><option>Audi</option><option>Volkswagen</option><option>BMW</option><option>Other</option></select>
            <select aria-label="Select service"><option>Service required</option><option>Servicing</option><option>Diagnostics</option><option>Brakes</option><option>Battery</option></select>
            <select aria-label="Select location"><option>Your location</option><option>Shepshed</option><option>Leicester</option><option>Loughborough</option><option>Elsewhere in Leicestershire</option></select>
            <select aria-label="Select appointment"><option>Appointment type</option><option>Home</option><option>Workplace</option><option>Roadside</option></select>
            <select aria-label="Select vehicle specialist"><option>Specialist support</option><option>Audi</option><option>Volkswagen</option><option>BMW</option><option>All makes</option></select>
            <div className="mt-2">
              <p className="text-sm font-bold text-[var(--muted)]">Area: <strong className="text-[var(--foreground)]">All of Leicestershire</strong></p>
              <div className="mt-4 h-1.5 bg-neutral-200">
                <div className="relative h-full w-2/3 bg-[var(--red)]">
                  <span className="absolute -left-1 -top-1.5 size-4 rounded bg-[var(--red)]" />
                  <span className="absolute -right-1 -top-1.5 size-4 rounded bg-[var(--red)]" />
                </div>
              </div>
            </div>
            <Link className="button mt-2 w-full" href="/contact">Search Availability</Link>
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
