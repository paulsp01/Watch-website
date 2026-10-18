
import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroimg from "../../assets/Hero.png";

const Hero = () => {
  return (
    <section className="bg-[#101011] px-5 py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center rounded-md border border-[#252526] bg-[#151516] p-6 sm:p-8 lg:p-10">
            <p className="text-xs tracking-[0.2em] text-[#9E824C] sm:text-sm sm:tracking-[0.3em]">
              MAISON ÉLYSÉE • HERITAGE
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight text-[#e2ded7] sm:text-5xl lg:text-6xl">
              132 Years of
              <br />
              <span className="italic text-[#d7ad38]">
                Sovereign Craft
              </span>
            </h1>

            <p className="mt-5 max-w-[520px] text-sm leading-[1.7] text-[#89847d] sm:text-base">
              The Geneva atelier of Maison Élysée has preserved a singular
              philosophy: mechanical excellence expressed through
              uncompromising craftsmanship, architectural restraint and
              generations of horological knowledge.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button className="bg-[#d7ad38] px-5 py-3 text-xs tracking-[0.12em] text-black transition hover:bg-[#e8c34d] sm:px-6 sm:text-sm sm:tracking-[0.18em]">
                EXPLORE OUR LEGACY
              </button>

              <button className="text-xs tracking-[0.12em] text-[#9a958d] transition hover:text-[#d7ad38] sm:text-sm sm:tracking-[0.15em]">
                VIEW ARCHIVE →
              </button>
            </div>

            {/* STATS */}
            <div className="mt-8 grid grid-cols-3 border-t border-[#292829]">
              <div className="pt-4">
                <p className="font-serif text-2xl text-[#d7ad38]">
                  1892
                </p>
                <p className="mt-1 text-[10px] tracking-wider text-[#858078] sm:text-xs sm:tracking-[0.15em]">
                  FOUNDED IN GENÈVE
                </p>
              </div>

              <div className="border-x border-[#292829] px-3 pt-4 sm:px-4">
                <p className="font-serif text-2xl text-[#d7ad38]">
                  48
                </p>
                <p className="mt-1 text-[10px] tracking-wider text-[#858078] sm:text-xs sm:tracking-[0.15em]">
                  MASTER CALIBRES
                </p>
              </div>

              <div className="px-3 pt-4 sm:px-4">
                <p className="font-serif text-2xl text-[#d7ad38]">
                  132
                </p>
                <p className="mt-1 text-[10px] tracking-wider text-[#858078] sm:text-xs sm:tracking-[0.15em]">
                  YEARS HERITAGE
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT WATCH */}
          <div className="relative min-h-[430px] overflow-hidden rounded-md border border-[#292728] bg-[#171718]">
            <img
              src={heroimg}
              alt="Tourbillon Céleste"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e] via-transparent to-transparent" />

            {/* TOP LABEL */}
            <div className="absolute left-4 top-4">
              <span className="bg-black/70 px-3 py-2 font-mono text-xs tracking-[0.15em] text-[#d7ad38]">
                MASTERPIECE Nº 001
              </span>
            </div>

            {/* BOTTOM INFO */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs tracking-[0.2em] text-[#d7ad38]">
                    CALIBRE ME-880
                  </p>

                  <h2 className="mt-2 font-serif text-2xl text-[#e3ded7] sm:text-3xl">
                    Tourbillon Céleste
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-[#858078]">
                    Astronomical Tourbillon • Geneva
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9E824C]">
                  <ArrowUpRight size={16} className="text-[#d7ad38]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
