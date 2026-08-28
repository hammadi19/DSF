import Image from "next/image";
import Link from "next/link";
import { contact } from "./dsf-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95">
      <div className="section-container grid items-center gap-4 py-3 lg:grid-cols-[auto_1fr_auto]">
        <Link href="/" aria-label="DSF Auto Care home">
          <Image
            className="h-12 w-28 rounded object-cover sm:h-[58px] sm:w-[132px]"
            src="/assets/dsf/logo.jpg"
            alt="DSF Auto Care"
            width={132}
            height={58}
            priority
          />
        </Link>
        <nav
          className="flex gap-4 overflow-x-auto text-sm font-bold text-white lg:justify-center lg:gap-8"
          aria-label="Main navigation"
        >
          <Link className="transition hover:text-[var(--red)]" href="/">Home</Link>
          <Link className="transition hover:text-[var(--red)]" href="/about">About Us</Link>
          <Link className="transition hover:text-[var(--red)]" href="/services">Our Services</Link>
          <Link className="transition hover:text-[var(--red)]" href="/contact">Contact Us</Link>
        </nav>
        <div className="flex gap-2 lg:justify-end" aria-label="Social links">
          <a className="grid size-9 place-items-center rounded-full bg-white font-black text-neutral-950" href={contact.facebook} aria-label="DSF Autocare on Facebook">f</a>
          <a className="grid size-9 place-items-center rounded-full bg-[var(--green)] font-black text-white" href={`https://wa.me/${contact.whatsapp}`} aria-label="Message DSF Autocare on WhatsApp">W</a>
        </div>
      </div>
    </header>
  );
}
