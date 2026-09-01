import Image from "next/image";
import { ContactSection, PageHero } from "../components";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        text="Professional mobile vehicle servicing and repairs from Shepshed across Leicestershire."
        image="/assets/dsf/cover-1.jpg"
      />
      <section className="section-y">
        <div className="section-container">
          <div className="grid gap-10 text-[var(--muted)] md:grid-cols-2">
            <div className="space-y-6">
              <p>At DSF Autocare, we believe getting your vehicle serviced or repaired should be straightforward, convenient and affordable. Based in Shepshed, we provide professional mobile vehicle servicing and repairs across Leicestershire, bringing the garage directly to your home or workplace.</p>
              <p>Whether your car needs a routine service, brake replacement, diagnostics or mechanical repairs, we&apos;re committed to delivering honest advice, quality workmanship and transparent pricing on every job. Our fully equipped mobile service saves you the inconvenience of taking your vehicle to a garage, allowing you to carry on with your day while we take care of your car.</p>
            </div>
            <div className="space-y-6">
              <p>Having worked on countless Volkswagen, Audi and BMW vehicles over the years, we&apos;ve built a strong reputation for our expertise with these manufacturers including unlocking hidden features. Alongside this, we provide professional servicing and repairs for all makes and models, ensuring every customer receives the same trusted service.</p>
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-5xl text-center">
            <strong className="block text-[28px] font-semibold leading-[38px] text-[var(--foreground)] sm:text-[36px] sm:leading-[46px]">
              From Shepshed to Leicester, Loughborough, Coalville, Ashby, Hinckley, Melton Mowbray and beyond, DSF Autocare is trusted by drivers across Leicestershire for convenient, professional vehicle servicing and repairs.
            </strong>
            <div className="relative mt-8 overflow-hidden border border-[var(--line)]">
              <Image
                className="aspect-[2.1] w-full object-cover"
                src="/assets/dsf/cover-2.jpg"
                alt=""
                width={1200}
                height={570}
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
