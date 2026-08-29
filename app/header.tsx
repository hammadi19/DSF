"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import { contact } from "./dsf-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-neutral-950 text-white backdrop-blur-sm lg:-mb-[102px] lg:bg-black/35">
      <div className="section-container grid min-h-[78px] grid-cols-[auto_1fr_auto] items-center gap-4 py-3 lg:min-h-[102px] lg:grid-cols-[250px_1fr_auto] lg:py-4">
        <Link href="/" aria-label="DSF Auto Care home">
          <Image
            className="h-12 w-36 rounded object-cover sm:w-40 lg:h-14 lg:w-44"
            src="/assets/dsf/logo.jpg"
            alt="DSF Auto Care"
            width={176}
            height={56}
            priority
          />
        </Link>
        <nav
          className="hidden gap-5 overflow-x-auto lg:flex lg:justify-center xl:gap-9"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link className={`header-link ${link.href === "/" ? "text-[var(--red)]" : ""}`} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden flex-wrap items-center gap-5 lg:flex lg:justify-end">
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
        <div className="flex items-center justify-end gap-3 lg:hidden">
          <a className="header-social" href={`tel:${contact.phone.replaceAll(" ", "")}`} aria-label="Call DSF Autocare">
            <Phone aria-hidden="true" className="size-4" fill="currentColor" />
          </a>
          <button
            className="grid size-11 place-items-center border border-white/25 text-white transition hover:border-[var(--red)] hover:bg-[var(--red)]"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>
      <div className={`mobile-drawer lg:hidden ${isOpen ? "mobile-drawer-open" : ""}`}>
        <nav className="section-container grid gap-2 pb-6 pt-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link className="border border-white/10 bg-white/[0.06] px-5 py-4 text-lg font-medium transition hover:border-[var(--red)] hover:text-[var(--red)]" href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <a className="header-social" href={contact.facebook} aria-label="DSF Autocare on Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a className="header-social" href={`https://wa.me/${contact.whatsapp}`} aria-label="Message DSF Autocare on WhatsApp">
              <FaWhatsapp aria-hidden="true" />
            </a>
            <Link className="ml-auto bg-[var(--red)] px-6 py-3 text-sm font-semibold text-white" href="/contact" onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
