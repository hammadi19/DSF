import Image from "next/image";
import Link from "next/link";
import { contact, features, services, towns, whyChoose } from "./dsf-data";

export function PageHero({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <section className="relative min-h-[420px] overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
      <div className="section-container absolute inset-x-0 bottom-16 z-10 text-white">
        <p className="eyebrow">DSF Auto Care</p>
        <h1 className="max-w-3xl text-5xl font-black leading-none sm:text-7xl">{title}</h1>
        <span className="mt-4 block max-w-3xl text-lg leading-8 text-neutral-100">{text}</span>
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section className="bg-[var(--red)] py-5 text-white" aria-label="DSF Autocare contact and rating">
      <div className="section-container grid items-center gap-4 md:grid-cols-[1fr_1fr_auto]">
        <a className="text-xl font-black" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
        <span className="text-xl font-black">***** 5 star Google rating</span>
        <Link className="button bg-neutral-950 hover:bg-neutral-800" href="/contact">Book Now</Link>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="section-y" aria-label="DSF Autocare highlights">
      <div className="section-container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <article className="min-h-44 border border-[var(--line)] bg-white p-7" key={item.title}>
            <h2 className="mb-3 text-base font-black">{item.title}</h2>
            <p className="leading-7 text-[var(--muted)]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section-y">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Why Choose DSF Auto Care</p>
          <h2>Straight answers, careful workmanship, and the workshop brought to you.</h2>
        </div>
        <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-5">
          {whyChoose.map((item, index) => (
            <details key={item.title} className="why-card" open={index === 0}>
              <summary className="grid cursor-pointer gap-4">
                <span className="grid size-12 place-items-center rounded-full border-2 border-[var(--red)] text-xl font-black text-[var(--red)]">{index + 1}</span>
                <strong>{item.title}</strong>
              </summary>
              <p className="mt-4 leading-7 text-[var(--muted)]">{item.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceArea() {
  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="section-container grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Mobile across Leicestershire</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">We service all of Leicestershire.</h2>
          <span className="mt-5 block max-w-xl leading-8 text-neutral-300">Based in Shepshed, DSF Autocare covers appointments at homes, workplaces and roadside locations across the county.</span>
        </div>
        <div className="map-panel" aria-label="Leicestershire service area">
          <div className="county-ring"><span>Leicestershire</span></div>
          {towns.map((town, index) => (
            <em key={town} className={`town town-${index + 1}`}>{town}</em>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section-y bg-white" id="contact">
      <div className="section-container grid gap-12 lg:grid-cols-[1fr_minmax(320px,470px)]">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Ready to book mobile vehicle servicing?</h2>
          <span className="mt-5 block max-w-2xl leading-8 text-[var(--muted)]">Call, email or message on WhatsApp and DSF Autocare will arrange a convenient appointment across Leicestershire.</span>
        </div>
        <form className="grid gap-4 border border-[var(--line)] bg-stone-100 p-6">
          <label className="form-label">Name<input type="text" name="name" placeholder="Your name" /></label>
          <label className="form-label">Phone<input type="tel" name="phone" placeholder="Your phone number" /></label>
          <label className="form-label">Message<textarea name="message" placeholder="Tell us what your vehicle needs" /></label>
          <a className="button" href={`tel:${contact.phone.replaceAll(" ", "")}`}>Call DSF Autocare</a>
        </form>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="section-y">
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Our Services</p>
          <h2>Expandable service cards with the detail ready when you need it.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <details className="service-card" key={service.title}>
              <summary className="grid cursor-pointer">
                <Image className="aspect-[1.6] h-full w-full object-cover" src={service.image} alt="" width={720} height={450} sizes="(max-width: 980px) 50vw, 33vw" />
                <span className="p-5 text-xl font-black">{service.title}</span>
              </summary>
              <p className="px-5 pb-4 leading-7 text-[var(--muted)]">{service.intro}</p>
              <ul className="columns-1 px-9 pb-6 text-sm leading-7 text-[var(--steel)] sm:columns-2">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
