import { ContactSection, PageHero, ServiceArea, Shell } from "../components";
import { contact } from "../dsf-data";

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        title="Contact Us"
        text="Book mobile vehicle servicing and repairs across Leicestershire."
        image="/assets/dsf/contact-hero.jpeg"
      />
      <section className="contact-details">
        <article>
          <h2>Phone</h2>
          <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
        </article>
        <article>
          <h2>Email</h2>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </article>
        <article>
          <h2>Base</h2>
          <p>{contact.location}</p>
        </article>
        <article>
          <h2>Service Area</h2>
          <p>All of Leicestershire</p>
        </article>
      </section>
      <ServiceArea />
      <ContactSection />
    </Shell>
  );
}
