"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "./dsf-data";

const coverImages = [
  "/assets/dsf/cover-1.jpg",
  "/assets/dsf/cover-2.jpg",
  "/assets/dsf/cover-3.jpg",
];

export function HomeHero() {
  const [phase, setPhase] = useState<"video" | "image">("video");
  const [imageIndex, setImageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (phase === "video") {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        void video.play();
      }
      return;
    }

    const timer = window.setTimeout(() => {
      if (imageIndex >= coverImages.length - 1) {
        setPhase("video");
        return;
      }

      setImageIndex((current) => current + 1);
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [phase, imageIndex]);

  return (
    <section className="relative min-h-[630px] overflow-hidden sm:min-h-[700px] lg:min-h-[820px]">
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${phase === "video" ? "opacity-100" : "opacity-0"}`}
        src="/assets/dsf/landing-video.mp4"
        poster="/assets/dsf/landing-1.jpg"
        autoPlay
        muted
        playsInline
        onEnded={() => {
          setImageIndex(0);
          setPhase("image");
        }}
      />
      {coverImages.map((image, index) => (
        <Image
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${phase === "image" && imageIndex === index ? "opacity-100" : "opacity-0"}`}
          src={image}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          key={image}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
      <div className="section-container absolute inset-x-0 top-1/2 z-10 grid -translate-y-1/2 items-center gap-10 text-white lg:top-[54%]">
        <div className="max-w-4xl">
          <h1 className="max-w-3xl text-[34px] font-medium leading-[37px] sm:text-[56px] sm:leading-[58px] lg:text-[80px] lg:leading-[82px]">Mobile vehicle servicing & maintenance at your door step.</h1>
          <p className="mt-5 border-l-[5px] border-[var(--red)] pl-[15px] text-[20px] font-medium leading-7 text-[var(--red)] sm:text-[28px] sm:leading-9 lg:mt-[25px]">Across all of Leicestershire</p>
          <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-white sm:text-lg sm:leading-8">Professional servicing, diagnostics, brakes, batteries and hidden feature coding brought to your home, workplace or roadside.</p>
          <div className="mt-8 hidden flex-wrap gap-5 lg:flex">
            <Link className="hero-cta" href="/contact">
              <Phone aria-hidden="true" className="size-8" />
              <span>Call DSF</span>
              <strong>{contact.phone}</strong>
            </Link>
            <Link className="hero-cta" href="/services">
              <Wrench aria-hidden="true" className="size-8" />
              <span>View Mobile</span>
              <strong>Services</strong>
            </Link>
          </div>
          <div className="mt-8 hidden border-b border-white/50 pb-3 text-lg font-bold sm:inline-flex">
            <span>Want to learn more about us?</span>
            <Link className="ml-4 text-[var(--red)]" href="/about">Click here +</Link>
          </div>
          <div className="mt-8 grid gap-3 rounded border border-white/15 bg-black/45 p-4 backdrop-blur-sm lg:hidden">
            <strong className="text-lg font-semibold">Need mobile servicing?</strong>
            <div className="flex flex-wrap gap-3">
              <Link className="bg-[var(--red)] px-5 py-3 text-sm font-semibold text-white" href="/contact">Book Now</Link>
              <a className="border border-white/25 px-5 py-3 text-sm font-semibold text-white" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
