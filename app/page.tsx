import Link from "next/link";
import {
  ContactSection,
  ContactStrip,
  FeatureGrid,
  ServiceArea,
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
        <div className="section-container absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 text-white">
          <p className="eyebrow">Mobile Autocare Across Leicestershire</p>
          <h1 className="max-w-4xl text-5xl font-black leading-none sm:text-7xl lg:text-8xl">Mobile vehicle servicing & maintenance at your door step.</h1>
          <Link className="button" href="/contact">
            Book Now
          </Link>
        </div>
      </section>
      <ContactStrip />
      <FeatureGrid />
      <WhyChoose />
      <ServiceArea />
      <ContactSection />
    </>
  );
}
