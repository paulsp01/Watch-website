
import React from "react";

const QuoteSection = () => {
  return (
    <section className="border-t border-[#252425] bg-[#0d0d0e] px-4 py-16 text-center sm:py-20">
      <div className="mx-auto max-w-[650px]">
        <div className="mx-auto h-1.5 w-1.5 rounded-full bg-[#d5ad3a]" />

        <blockquote className="mt-6 font-serif text-2xl italic leading-relaxed text-[#ddd8d0] sm:text-3xl">
          "Time is not counted in seconds,
          <br />
          but in the enduring devotion of
          <br />
          the human hand to mechanical
          <br />
          eternity."
        </blockquote>

        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#9e824c] sm:text-sm sm:tracking-[0.25em]">
          MAISON ÉLYSÉE • GENEVA • 1892
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
