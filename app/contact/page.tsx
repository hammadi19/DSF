import { ContactSection, PageHero, ServiceArea } from "../components";
import { contact } from "../dsf-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        text="Book mobile vehicle servicing and repairs across Leicestershire."
        image="/assets/dsf/contact-hero.jpeg"
      />
      <section className="section-y pb-6">
        <div className="section-container grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="border border-[var(--line)] bg-white p-6">
            <h2 className="mb-3 text-base font-black">Phone</h2>
            <a className="font-black text-[var(--red)]" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
          </article>
          <article className="border border-[var(--line)] bg-white p-6">
            <h2 className="mb-3 text-base font-black">Email</h2>
            <a className="font-black text-[var(--red)]" href={`mailto:${contact.email}`}>{contact.email}</a>
          </article>
          <article className="border border-[var(--line)] bg-white p-6">
            <h2 className="mb-3 text-base font-black">Base</h2>
            <p className="leading-7 text-[var(--muted)]">{contact.location}</p>
          </article>
          <article className="border border-[var(--line)] bg-white p-6">
            <h2 className="mb-3 text-base font-black">Service Area</h2>
            <p className="leading-7 text-[var(--muted)]">All of Leicestershire</p>
          </article>
        </div>
      </section>
      <ServiceArea />
      <ContactSection />
    </>
  );
}
