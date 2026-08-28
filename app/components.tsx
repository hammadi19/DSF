import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { contact, features, services, towns, whyChoose } from "./dsf-data";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <Image src="/assets/dsf/logo.jpg" alt="DSF Auto Care" width={132} height={58} priority />
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Our Services</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <div className="socials" aria-label="Social links">
        <a href={contact.facebook} aria-label="DSF Autocare on Facebook">f</a>
        <a href={`https://wa.me/${contact.whatsapp}`} aria-label="Message DSF Autocare on WhatsApp">W</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Image src="/assets/dsf/logo.jpg" alt="DSF Auto Care" width={180} height={79} />
        <p>Mobile vehicle servicing and repairs across Leicestershire.</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <p>{contact.location}</p>
      </div>
      <div>
        <h2>Service Area</h2>
        <p>Shepshed to Leicester, Loughborough, Coalville, Ashby, Hinckley, Melton Mowbray and beyond.</p>
      </div>
    </footer>
  );
}

export function PageHero({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <section className="page-hero">
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div>
        <p>DSF Auto Care</p>
        <h1>{title}</h1>
        <span>{text}</span>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="contact-strip" aria-label="DSF Autocare contact and rating">
      <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
      <span>5 star Google rating</span>
      <Link href="/contact">Book Now</Link>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="feature-grid" aria-label="DSF Autocare highlights">
      {features.map((item) => (
        <article key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section why">
      <div className="section-heading">
        <p>Why Choose DSF Auto Care</p>
        <h2>Straight answers, careful workmanship, and the workshop brought to you.</h2>
      </div>
      <div className="why-row">
        {whyChoose.map((item, index) => (
          <details key={item.title} className="why-card" open={index === 0}>
            <summary>
              <span>{index + 1}</span>
              <strong>{item.title}</strong>
            </summary>
            <p>{item.text}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ServiceArea() {
  return (
    <section className="service-area">
      <div className="area-copy">
        <p>Mobile across Leicestershire</p>
        <h2>We service all of Leicestershire.</h2>
        <span>Based in Shepshed, DSF Autocare covers appointments at homes, workplaces and roadside locations across the county.</span>
      </div>
      <div className="map-panel" aria-label="Leicestershire service area">
        <div className="county-ring"><span>Leicestershire</span></div>
        {towns.map((town, index) => (
          <em key={town} className={`town town-${index + 1}`}>{town}</em>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p>Contact Us</p>
        <h2>Ready to book mobile vehicle servicing?</h2>
        <span>Call, email or message on WhatsApp and DSF Autocare will arrange a convenient appointment across Leicestershire.</span>
      </div>
      <form>
        <label>Name<input type="text" name="name" placeholder="Your name" /></label>
        <label>Phone<input type="tel" name="phone" placeholder="Your phone number" /></label>
        <label>Message<textarea name="message" placeholder="Tell us what your vehicle needs" /></label>
        <a className="button" href={`tel:${contact.phone.replaceAll(" ", "")}`}>Call DSF Autocare</a>
      </form>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="section">
      <div className="section-heading">
        <p>Our Services</p>
        <h2>Expandable service cards with the detail ready when you need it.</h2>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <details className="service-card" key={service.title}>
            <summary>
              <Image src={service.image} alt="" width={720} height={450} sizes="(max-width: 980px) 50vw, 33vw" />
              <span>{service.title}</span>
            </summary>
            <p>{service.intro}</p>
            <ul>
              {service.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
