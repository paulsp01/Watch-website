
import React from "react";

const Hero = () => {
  return (
    <section className="px-4 pt-7 pb-8 text-center sm:pt-10 sm:pb-12">
      <div className="mx-auto mb-5 w-fit rounded-full border border-[#29251d] bg-[#191817] px-4 py-1.5 text-[8px] tracking-[2px] text-[#d9b96c]">
        ✦ PROTOCOL NO. MDCXII — SECRETUM AUDIENTIA
      </div>

      <h1 className="font-serif text-3xl leading-tight text-[#e8e4df] sm:text-5xl lg:text-[54px]">
        Confidential Audience &amp;
        <span className="block italic text-[#d9bd7a]">
          Bespoke Mandate
        </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl font-serif text-[11px] leading-5 text-[#c1b9ad]">
        Audiences are granted by personal invitation or verified patron
        request. Every transmission is strictly sequestered and sealed
        under 256-bit cryptographic protocol.
      </p>

      <div className="mt-5 flex items-center justify-center gap-3 text-[8px] tracking-[3px] text-[#927747]">
        <span className="h-px w-8 bg-[#51452c]" />
        GENÈVE · VENDÔME · BOND ST
        <span className="h-px w-8 bg-[#51452c]" />
      </div>
    </section>
  );
};

export default Hero;
