import Link from "next/link";
import {
  ContactSection,
  ContactStrip,
  FeatureGrid,
  ServiceArea,
  Shell,
  WhyChoose,
} from "./components";

export default function Home() {
  return (
    <Shell>
      <section className="hero">
        <video
          src="/assets/dsf/landing-video.mp4"
          poster="/assets/dsf/landing-1.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay">
          <p>Mobile Autocare Across Leicestershire</p>
          <h1>Mobile vehicle servicing & maintenance at your door step.</h1>
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
    </Shell>
  );
}
