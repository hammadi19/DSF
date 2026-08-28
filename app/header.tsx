import Image from "next/image";
import Link from "next/link";
import { contact } from "./dsf-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 -mb-[96px] border-b border-white/15 bg-black/35 text-white backdrop-blur-sm">
      <div className="section-container grid min-h-24 items-center gap-5 py-4 lg:grid-cols-[250px_1fr_auto]">
        <Link href="/" aria-label="DSF Auto Care home">
          <Image
            className="h-14 w-44 rounded object-cover"
            src="/assets/dsf/logo.jpg"
            alt="DSF Auto Care"
            width={176}
            height={56}
            priority
          />
        </Link>
        <nav
          className="flex gap-5 overflow-x-auto text-base font-bold lg:justify-center xl:gap-9"
          aria-label="Main navigation"
        >
          <Link className="header-link text-[var(--red)]" href="/">Home</Link>
          <Link className="header-link" href="/about">About Us</Link>
          <Link className="header-link" href="/services">Our Services</Link>
          <Link className="header-link" href="/contact">Contact Us</Link>
        </nav>
        <div className="flex flex-wrap items-center gap-5 lg:justify-end">
          <button className="search-button hidden xl:block" type="button" aria-label="Search" />
          <a className="hidden items-center gap-4 xl:flex" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
            <span className="grid size-14 place-items-center rounded-full bg-[var(--red)] text-2xl font-black leading-none text-white">C</span>
            <span className="grid text-sm font-bold leading-tight text-neutral-200">
              Have any Questions?
              <strong className="mt-1 text-lg text-white">{contact.phone}</strong>
            </span>
          </a>
          <Link className="bg-[var(--red)] px-9 py-4 font-black text-white transition hover:bg-[var(--red-dark)]" href="/contact">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
