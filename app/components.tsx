import Image from "next/image";
import Link from "next/link";
import { contact, features, services, towns, whyChoose } from "./dsf-data";

const serviceBrands = [
  { name: "Audi", count: "Specialist" },
  { name: "Volkswagen", count: "Specialist" },
  { name: "BMW", count: "Specialist" },
  { name: "Diagnostics", count: "Mobile" },
  { name: "Servicing", count: "On-site" },
  { name: "Repairs", count: "All makes" },
];

const processSteps = [
  {
    title: "Personal Attention",
    text: "Tell us what your vehicle needs and we will guide you clearly from the first call.",
  },
  {
    title: "Receive Up Front Quote",
    text: "You get honest pricing and practical advice before any work begins.",
  },
  {
    title: "Mobile Appointment",
    text: "We come to your home, workplace or roadside location across Leicestershire.",
  },
  {
    title: "Share Requirement",
    text: "Diagnostics, servicing and repairs are planned around your exact vehicle.",
  },
  {
    title: "Pay Post Service",
    text: "Work is completed carefully and explained clearly before payment.",
  },
  {
    title: "Schedule Maintenance",
    text: "Keep your car safe and reliable with regular servicing and health checks.",
  },
];

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

export function BrandSearch() {
  return (
    <section className="bg-white py-12">
      <div className="section-container">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-black">I Want Search</h2>
          <div className="flex gap-2 text-xs font-black">
            <span className="bg-[var(--red)] px-4 py-2 text-white">Browse Service</span>
            <span className="border border-[var(--line)] px-4 py-2">Browse Vehicle</span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {serviceBrands.map((item) => (
            <article className="relative grid min-h-28 place-items-center border border-[var(--line)] bg-white p-5 text-center shadow-sm" key={item.name}>
              <span className="absolute right-3 top-2 text-xs font-black text-[var(--muted)]">{item.count}</span>
              <strong className="text-lg font-black">{item.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="section-y pt-4" aria-label="DSF Autocare highlights">
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

export function FeaturedServices() {
  return (
    <section className="section-y bg-white">
      <div className="section-container">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black leading-tight">Our Featured Services</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">Mobile servicing, repairs and diagnostics delivered with professional care across Leicestershire.</p>
          </div>
          <Link className="bg-[var(--red)] px-6 py-4 text-sm font-black text-white transition hover:bg-[var(--red-dark)]" href="/services">All Services</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article className="border border-[var(--line)] bg-white shadow-sm" key={service.title}>
              <div className="relative">
                <Image className="aspect-[1.55] w-full object-cover" src={service.image} alt="" width={720} height={465} sizes="(max-width: 980px) 50vw, 33vw" />
                <span className="absolute left-0 top-0 bg-[var(--red)] px-3 py-2 text-xs font-black uppercase text-white">Mobile</span>
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs font-black uppercase text-[var(--red)]">DSF Autocare</p>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 line-clamp-3 leading-7 text-[var(--muted)]">{service.intro}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container">
        <div className="grid gap-px bg-[var(--red)] p-7 text-white md:grid-cols-4">
          {[
            ["20+", "Years Experience"],
            ["5", "Star Google Rating"],
            ["100%", "Mobile Service"],
            ["All", "Leicestershire"],
          ].map(([value, label]) => (
            <article className="border-white/25 px-5 py-3 md:border-r last:border-r-0" key={label}>
              <strong className="block text-3xl font-black">{value}</strong>
              <span className="text-sm font-bold">{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section-y bg-white">
      <div className="section-container">
        <div className="section-heading mx-auto text-center">
          <p className="eyebrow">Why Choose DSF Auto Care</p>
          <h2>Straight answers, careful workmanship, and the workshop brought to you.</h2>
        </div>
        <div className="grid items-start gap-7 md:grid-cols-2 xl:grid-cols-5">
          {whyChoose.map((item, index) => (
            <details key={item.title} className="why-card" open={index === 0}>
              <summary className="grid cursor-pointer gap-7">
                <span className="grid size-[70px] place-items-center rounded-full border-[3px] border-[var(--red)] text-2xl font-black text-[var(--red)]">{index + 1}</span>
                <strong className="text-2xl font-black leading-tight">{item.title}</strong>
              </summary>
              <p className="mt-8 text-xl leading-9 text-[var(--muted)]">{item.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkProcess() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="section-container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Our Work Process</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">A straightforward mobile service from first message to final vehicle health check.</p>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px_1fr]">
          <div className="grid gap-14">
            {processSteps.slice(0, 3).map((step) => (
              <article className="process-step" key={step.title}>
                <span className="process-icon">+</span>
                <div>
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 max-w-sm text-lg font-semibold leading-8 text-neutral-400">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="relative mx-auto flex min-h-[720px] w-full max-w-[420px] items-center justify-center max-lg:min-h-[520px]">
            <div className="absolute inset-x-20 inset-y-0 rounded-full bg-gradient-to-b from-neutral-100 via-white to-neutral-100" />
            <div className="process-car">
              <Image
                className="h-full w-full object-cover"
                src="/assets/dsf/landing-2.jpg"
                alt=""
                width={420}
                height={720}
                priority
              />
            </div>
          </div>
          <div className="grid gap-14">
            {processSteps.slice(3).map((step) => (
              <article className="process-step lg:flex-row lg:text-left" key={step.title}>
                <span className="process-icon">+</span>
                <div>
                  <h3 className="text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 max-w-sm text-lg font-semibold leading-8 text-neutral-400">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
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
    <section className="relative overflow-hidden bg-neutral-950 py-20 text-white" id="contact">
      <Image className="object-cover opacity-20" src="/assets/dsf/landing-3.jpg" alt="" fill sizes="100vw" />
      <div className="section-container relative z-10 grid gap-12 lg:grid-cols-[1fr_minmax(320px,470px)]">
        <div className="self-center">
          <p className="eyebrow">Contact Us</p>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Ready to book mobile vehicle servicing?</h2>
          <span className="mt-5 block max-w-2xl leading-8 text-neutral-200">Call, email or message on WhatsApp and DSF Autocare will arrange a convenient appointment across Leicestershire.</span>
          <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-8">
            <span className="grid size-14 place-items-center rounded-full bg-[var(--red)] text-2xl font-black">C</span>
            <div>
              <h3 className="font-black">Have Any Question? Find Your Solution</h3>
              <a className="mt-1 block text-neutral-300" href={`tel:${contact.phone.replaceAll(" ", "")}`}>Call : {contact.phone}</a>
            </div>
          </div>
        </div>
        <form className="grid gap-4 rounded-md bg-white p-7 text-[var(--foreground)] shadow-2xl">
          <h3 className="text-xl font-black">Fulfill Your Requirements</h3>
          <label className="form-label">Name<input type="text" name="name" placeholder="Your name" /></label>
          <label className="form-label">Phone<input type="tel" name="phone" placeholder="Your phone number" /></label>
          <label className="form-label">Message<textarea name="message" placeholder="Tell us what your vehicle needs" /></label>
          <a className="button mt-0" href={`tel:${contact.phone.replaceAll(" ", "")}`}>Send Message</a>
        </form>
      </div>
    </section>
  );
}

export function ArticleCards() {
  const articles = [
    { title: "When Your Vehicle Needs Diagnostics", image: "/assets/dsf/diagnostics.webp", month: "Aug" },
    { title: "Keeping Brakes Safe Between Services", image: "/assets/dsf/brakes.jpg", month: "Sep" },
    { title: "Why Regular Oil Changes Matter", image: "/assets/dsf/landing-3.jpg", month: "Oct" },
  ];

  return (
    <section className="section-y bg-white">
      <div className="section-container">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <h2 className="text-4xl font-black leading-tight">Our Recent News & Articles</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">Helpful maintenance notes and mobile service reminders from DSF Autocare.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article className="blog-card" key={article.title}>
              <div className="relative">
                <Image className="aspect-[2.08] w-full object-cover" src={article.image} alt="" width={760} height={365} />
                <span className="blog-date">
                  <strong>17</strong>
                  {article.month}
                </span>
              </div>
              <div className="px-10 py-12">
                <p className="text-base font-black uppercase text-neutral-400">Vehicle Care</p>
                <h3 className="mt-6 text-3xl font-black leading-tight">{article.title}</h3>
                <Link className="mt-9 inline-flex items-center gap-4 text-xl font-black text-[var(--red)]" href="/services">Read More <span>-&gt;</span></Link>
              </div>
            </article>
          ))}
        </div>
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
