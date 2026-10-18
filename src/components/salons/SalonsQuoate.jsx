
import React from "react";

const SalonsQuoate = () => {
  return (
    <section className="px-5 pb-20 pt-2 sm:px-8">
      <div className="mx-auto max-w-[650px] text-center">
        {/* Number */}
        <div className="mb-5 font-serif text-3xl text-[#c4a151]">
          99
        </div>

        {/* Quote */}
        <blockquote className="font-serif text-xl italic leading-[1.7] text-[#d6d0c5] sm:text-2xl">
          "To step into the Geneva sanctuary on the Rhône is to detach
          entirely from standard temporal constraints. Time flows in
          conversation with their master watchmaker, revealing more
          horological depth than decades in auction rooms."
        </blockquote>

        {/* Author */}
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-[#b5944e] sm:text-sm sm:tracking-[0.2em]">
          A Discreet Collector's Reflection
        </p>

        <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#858078]">
          Courtesy of Maison Elysée Private Client
        </p>
      </div>
    </section>
  );
};

export default SalonsQuoate;
