import Image from "next/image";
import { contact } from "./dsf-data";

export function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 text-white">
      <div className="section-container grid gap-9 md:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <Image className="mb-5 rounded" src="/assets/dsf/logo.jpg" alt="DSF Auto Care" width={180} height={79} />
          <p className="leading-7 text-neutral-300">Mobile vehicle servicing and repairs across Leicestershire.</p>
        </div>
        <div>
          <h2 className="mb-3 text-base font-black">Contact</h2>
          <p className="leading-7 text-neutral-300">{contact.phone}</p>
          <p className="leading-7 text-neutral-300">{contact.email}</p>
          <p className="leading-7 text-neutral-300">{contact.location}</p>
        </div>
        <div>
          <h2 className="mb-3 text-base font-black">Service Area</h2>
          <p className="leading-7 text-neutral-300">Shepshed to Leicester, Loughborough, Coalville, Ashby, Hinckley, Melton Mowbray and beyond.</p>
        </div>
      </div>
    </footer>
  );
}
