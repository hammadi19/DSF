import Link from "next/link";
import { Phone, Wrench } from "lucide-react";
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
      <section className="relative min-h-[760px] overflow-hidden lg:min-h-[820px]">
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
        <div className="section-container absolute inset-x-0 top-[54%] z-10 grid -translate-y-1/2 items-center gap-10 text-white lg:grid-cols-[1fr_470px] lg:gap-12">
          <div className="max-w-4xl">
            <h1 className="max-w-3xl text-[39px] font-medium leading-[41px] sm:text-[56px] sm:leading-[58px] lg:text-[80px] lg:leading-[82px]">Mobile vehicle servicing & maintenance at your door step.</h1>
            <p className="mt-5 border-l-[5px] border-[var(--red)] pl-[15px] text-[23px] font-medium leading-8 text-[var(--red)] sm:text-[28px] sm:leading-9 lg:mt-[25px]">Across all of Leicestershire</p>
            <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-white sm:text-lg sm:leading-8">Professional servicing, diagnostics, brakes, batteries and hidden feature coding brought to your home, workplace or roadside.</p>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link className="hero-cta" href="/contact">
                <Phone aria-hidden="true" className="size-8" />
                <span>Call DSF</span>
                <strong>{contact.phone}</strong>
              </Link>
              <Link className="hero-cta" href="/services">
                <Wrench aria-hidden="true" className="size-8" />
                <span>View Mobile</span>
                <strong>Services</strong>
              </Link>
            </div>
            <div className="mt-8 inline-flex border-b border-white/50 pb-3 text-lg font-bold">
              <span>Want to learn more about us?</span>
              <Link className="ml-4 text-[var(--red)]" href="/about">Click here +</Link>
            </div>
            <div className="mt-8 grid gap-3 rounded border border-white/15 bg-black/45 p-4 backdrop-blur-sm lg:hidden">
              <strong className="text-lg font-semibold">Need mobile servicing?</strong>
              <div className="flex flex-wrap gap-3">
                <Link className="bg-[var(--red)] px-5 py-3 text-sm font-semibold text-white" href="/contact">Book Now</Link>
                <a className="border border-white/25 px-5 py-3 text-sm font-semibold text-white" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
              </div>
            </div>
          </div>
          <form className="hero-form hidden text-[var(--foreground)] lg:grid">
            <span className="mx-auto mb-2 h-1 w-16 bg-[var(--red)]" />
            <h2 className="text-center text-[30px] font-medium leading-10">Find Your Mobile Service</h2>
            <p className="mb-3 text-center text-sm font-medium text-neutral-600">Tell us what you need and we will come to you.</p>
            <div className="grid gap-3.5">
              <select aria-label="Select vehicle make"><option>Vehicle make</option><option>Audi</option><option>Volkswagen</option><option>BMW</option><option>Other</option></select>
              <select aria-label="Select service"><option>Service required</option><option>Servicing</option><option>Diagnostics</option><option>Brakes</option><option>Battery</option></select>
              <select aria-label="Select location"><option>Your location</option><option>Shepshed</option><option>Leicester</option><option>Loughborough</option><option>Elsewhere in Leicestershire</option></select>
              <select aria-label="Select appointment"><option>Appointment type</option><option>Home</option><option>Workplace</option><option>Roadside</option></select>
              <select aria-label="Select vehicle specialist"><option>Specialist support</option><option>Audi</option><option>Volkswagen</option><option>BMW</option><option>All makes</option></select>
            </div>
            <Link className="button mt-5 w-full py-4 text-base" href="/contact">Search Availability</Link>
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
