
import React from "react";

const Hero = () => {
  return (
    <section className="relative px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(177,143,71,0.08),transparent_32%)]" />

      <div className="relative mx-auto max-w-[900px] text-center">
        {/* Badge */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[#4c4330] bg-[#181817] px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c3a052]" />

          <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#b5944e] sm:text-sm">
            Exclusive Sanctuary Access
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-[#e2ded7] sm:text-5xl lg:text-6xl">
          Private Viewing{" "}
          <span className="italic text-[#c8a558]">
            Sanctuaries
          </span>
        </h1>

        {/* Locations */}
        <div className="mt-4 flex justify-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-[#8c8579] sm:text-sm">
          <span>Geneva</span>
          <span>•</span>
          <span>Paris</span>
          <span>•</span>
          <span>London</span>
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[600px] text-sm leading-[1.7] text-[#8c8880] sm:text-base">
          Confidential audiences held in strict privacy for patrons,
          connoisseurs, collectors, and family offices seeking rare
          timepieces and exceptional horological experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="bg-[#d5b258] px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-black transition hover:bg-[#e4c46e] sm:px-6 sm:text-sm sm:tracking-[0.13em]">
            Book a Private Salon Appointment
          </button>

          <button className="border border-[#38352f] bg-[#171718] px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#aaa398] transition hover:border-[#806b3e] sm:px-6 sm:text-sm sm:tracking-[0.13em]">
            Explore Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
