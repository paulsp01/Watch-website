import React from "react";
import { ArrowUpRight } from "lucide-react";
import img1 from "../../assets/img1.png";

const stats = [
  ["12", "UNIQUE CALIBRES"],
  ["300+", "HOURS\nHAND-FINISHED"],
  ["GENÈVE", "POINÇON\nCERTIFIED"],
];

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-5 py-12 lg:px-10 lg:py-16">
      {/* Small heading */}
      <div className="mb-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d7ad38]" />

        <span className="text-xs tracking-[0.2em] text-[#9E824C] sm:text-base sm:tracking-[0.3em]">
          HAUTE HORLOGERIE CABINET • GENÈVE
        </span>
      </div>

      <div className="mb-8 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-[600px]">
          <h2 className="font-serif text-4xl leading-tight text-[#e5e1dc] sm:text-5xl lg:text-6xl lg:leading-[0.95]">
            Grandes
            <br />
            Complications
          </h2>

          <p className="mt-5 max-w-[550px] text-base leading-7 text-[#96918a]">
            Mechanical virtuosity and astronomical masterworks, crafted at the
            confluence of ancestral hand-finishing and micro-mechanical
            equilibrium. Every movement carries the sovereign mark of Genevan
            perfection.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 overflow-hidden rounded-md border border-[#292725] bg-[#19191a] lg:min-w-[430px]">
          {stats.map(([number, label]) => (
            <div
              key={number}
              className="border-r border-[#292725] px-3 py-4 last:border-r-0 sm:px-5 sm:py-5"
            >
              <p className="font-serif text-lg text-[#d7ad38] sm:text-2xl">
                {number}
              </p>

              <p className="mt-2 whitespace-pre-line text-[10px] leading-4 tracking-[0.1em] text-[#99948d] sm:text-xs sm:leading-5 sm:tracking-[0.15em]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main watch */}
      <div className="grid overflow-hidden rounded-lg border border-[#242325] bg-[#1b1a1b] lg:grid-cols-[1.2fr_0.8fr]">
        {/* Image */}
        <div className="relative min-h-[350px] overflow-hidden sm:min-h-[450px] lg:min-h-[590px]">
          <img
            src={img1}
            alt="Tourbillon Céleste"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute left-4 top-4 rounded-full border border-[#9E824C]/50 bg-black/50 px-3 py-2 text-xs tracking-[0.1em] text-[#d7ad38] sm:left-5 sm:top-5 sm:px-4 sm:text-base">
            ◉ PIECE UNIQUE Nº 04/08
          </div>

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs tracking-[0.15em] text-[#9E824C] sm:text-base sm:tracking-[0.2em]">
              CALIBRE ME-880
            </span>

            <span className="text-base text-[#d0cbc3]">CHF 265,000</span>
          </div>

          <h3 className="mt-3 font-serif text-3xl leading-tight text-[#e5e1dc] sm:text-4xl">
            Tourbillon
            <br />
            Céleste
          </h3>

          <p className="mt-5 text-base leading-7 text-[#9d9891]">
            Constructed with a rotating celestial chart and dark aventurine
            glass and elevated 60-second one-minute tourbillon cage.
            Hand-chamfered rose-gold bridges express the sovereign heart of
            mechanical timekeeping against astronomical depth.
          </p>

          <div className="mt-6 border border-[#292725] bg-[#151516] p-4">
            <p className="text-xs leading-5 tracking-[0.12em] text-[#d7ad38] sm:text-base sm:tracking-[0.18em]">
              ASTRONOMICAL GEAR TRAIN 23h 56m 04s
            </p>

            <div className="mt-3 flex flex-col gap-2 text-xs leading-5 text-[#858079] sm:flex-row sm:justify-between sm:text-base">
              <span>Sidereal Alignment: 99.9%</span>
              <span>Deviation: 1 day / 122 yrs</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {[
              ["ARCHITECTURE", "Skeletonized 18K 5N Rose Gold"],
              ["OSCILLATION", "21,600 vph (3 Hz)"],
              ["POWER AUTONOMY", "72 Hours Twin Barrel"],
              ["GEM SETTING", "29 Jewels, Synthetic Rubies"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs tracking-[0.15em] text-[#77716a] sm:text-base sm:tracking-[0.2em]">
                  {label}
                </p>

                <p className="mt-1 text-base leading-6 text-[#d2cdc6]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-7 flex w-full items-center justify-center gap-3 bg-[#d7ad38] px-3 py-3 text-xs font-medium tracking-[0.12em] text-black transition hover:bg-[#edc64c] sm:text-base sm:tracking-[0.2em]"
          >
            ACQUIRE VIEWING ALLOCATION
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;