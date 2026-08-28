import Image from "next/image";
import Link from "next/link";
import { contact } from "./dsf-data";

const usefulLinks = [
  "Servicing",
  "Plug in Diagnostics",
  "Battery Replacements",
  "Brake Pads Replacement",
  "Hidden Feature Unlocking",
  "General Repairs",
];

const recentPosts = [
  {
    title: "Time to book your next service",
    image: "/assets/dsf/landing-3.jpg",
  },
  {
    title: "The best time to check brakes",
    image: "/assets/dsf/brakes.jpg",
  },
  {
    title: "Replacing a weak battery",
    image: "/assets/dsf/battery.webp",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white">
      <Image
        className="object-cover opacity-20"
        src="/assets/dsf/landing-1.jpg"
        alt=""
        fill
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="section-container relative z-10">
        <div className="flex flex-col gap-8 border-b border-white/15 py-12 md:flex-row md:items-center md:justify-between">
          <Image
            className="rounded"
            src="/assets/dsf/logo.jpg"
            alt="DSF Auto Care"
            width={240}
            height={106}
          />
          <div className="flex gap-7 text-xl font-black" aria-label="Social links">
            <a href={contact.facebook} aria-label="DSF Autocare on Facebook">f</a>
            <a href={`https://wa.me/${contact.whatsapp}`} aria-label="Message DSF Autocare on WhatsApp">w</a>
            <a href={`mailto:${contact.email}`} aria-label="Email DSF Autocare">@</a>
            <a href="/contact" aria-label="Contact DSF Autocare">c</a>
          </div>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 xl:grid-cols-[1.15fr_1fr_1.1fr_1fr]">
          <div>
            <h2 className="footer-title">Contact Information</h2>
            <p className="mb-8 max-w-sm text-lg font-semibold leading-8 text-neutral-300">
              Mobile vehicle servicing, maintenance and diagnostics brought to
              your door across Leicestershire.
            </p>
            <ul className="grid gap-5 text-lg font-semibold text-neutral-300">
              <li><span className="footer-icon">●</span>{contact.location}</li>
              <li><span className="footer-icon">●</span>{contact.phone}</li>
              <li><span className="footer-icon">●</span>{contact.email}</li>
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Useful Links</h2>
            <ul className="grid gap-4 text-lg font-semibold text-neutral-300">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <Link className="transition hover:text-white" href="/services">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Recent Posts</h2>
            <div className="grid gap-5">
              {recentPosts.map((post) => (
                <Link className="grid grid-cols-[92px_1fr] gap-4 border-b border-white/10 pb-5 last:border-b-0" href="/services" key={post.title}>
                  <Image
                    className="h-16 w-[92px] object-cover"
                    src={post.image}
                    alt=""
                    width={92}
                    height={64}
                  />
                  <span>
                    <strong className="block text-lg leading-6">{post.title}</strong>
                    <em className="mt-2 block text-sm not-italic text-[var(--red)]">DSF Autocare</em>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="footer-title">Book Mobile Service</h2>
            <p className="mb-8 text-lg font-semibold leading-8 text-neutral-300">
              Call or message DSF Autocare to arrange servicing, repairs or
              diagnostics across Leicestershire.
            </p>
            <div className="grid gap-3">
              <a className="footer-action" href={`tel:${contact.phone.replaceAll(" ", "")}`}>Call Now</a>
              <a className="footer-action" href={`https://wa.me/${contact.whatsapp}`}>WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 py-8 text-base font-semibold text-neutral-300 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 DSF Autocare. All rights reserved.</p>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
