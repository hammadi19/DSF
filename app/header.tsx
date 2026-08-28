import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { contact } from "./dsf-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 -mb-[102px] border-b border-white/15 bg-black/35 text-white backdrop-blur-sm">
      <div className="section-container grid min-h-[102px] items-center gap-5 py-4 lg:grid-cols-[250px_1fr_auto]">
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
          className="flex gap-5 overflow-x-auto lg:justify-center xl:gap-9"
          aria-label="Main navigation"
        >
          <Link className="header-link text-[var(--red)]" href="/">Home</Link>
          <Link className="header-link" href="/about">About Us</Link>
          <Link className="header-link" href="/services">Our Services</Link>
          <Link className="header-link" href="/contact">Contact Us</Link>
        </nav>
        <div className="flex flex-wrap items-center gap-5 lg:justify-end">
          <div className="hidden items-center gap-3 2xl:flex" aria-label="Social links">
            <a className="header-social" href={contact.facebook} aria-label="DSF Autocare on Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a className="header-social" href={`https://wa.me/${contact.whatsapp}`} aria-label="Message DSF Autocare on WhatsApp">
              <FaWhatsapp aria-hidden="true" />
            </a>
          </div>
          <a className="hidden items-center gap-3 xl:flex" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
            <span className="header-social">
              <Phone aria-hidden="true" className="size-4" fill="currentColor" strokeWidth={2.5} />
            </span>
            <span className="grid text-sm font-bold leading-tight text-neutral-200">
              Have any Questions?
              <strong className="mt-1 text-xl font-medium text-white">{contact.phone}</strong>
            </span>
          </a>
          <Link className="bg-[var(--red)] px-9 py-[15px] text-base font-semibold text-white transition duration-500 hover:bg-[var(--red-dark)]" href="/contact">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
