import Image from "next/image";
import Link from "next/link";
import { contact } from "./dsf-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#2d2d2d] text-white shadow-lg">
      <div className="section-container grid min-h-[78px] items-center gap-5 py-3 lg:grid-cols-[220px_1fr_auto]">
        <Link href="/" aria-label="DSF Auto Care home">
          <Image
            className="h-12 w-36 rounded object-cover sm:h-[58px] sm:w-[170px]"
            src="/assets/dsf/logo.jpg"
            alt="DSF Auto Care"
            width={170}
            height={58}
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
          <button className="hidden text-2xl font-black xl:block" type="button" aria-label="Search">
            ?
          </button>
          <a className="hidden items-center gap-4 xl:flex" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
            <span className="text-5xl font-black leading-none text-[var(--red)]">C</span>
            <span className="grid text-sm font-bold leading-tight text-neutral-200">
              Have any Questions?
              <strong className="mt-1 text-lg text-white">{contact.phone}</strong>
            </span>
          </a>
          <Link className="bg-[var(--red)] px-7 py-3.5 font-black text-white transition hover:bg-[var(--red-dark)]" href="/contact">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
