
import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroimg from "../../assets/Hero.png";

const Hero = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#101011] text-white">
     

      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-4 py-10 sm:gap-12 sm:px-6 sm:py-14 md:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-16 xl:gap-16 xl:px-20 xl:py-20 ">

      
        <div className="flex min-w-0 flex-col justify-center">
       
          <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[1.2px] text-[#b69755] sm:mb-6 sm:gap-x-3 sm:text-xs sm:tracking-[1.5px]">
            <span>01</span>
            <span aria-hidden="true">—</span>
            <span>Haute Horlogerie</span>
            <span aria-hidden="true">—</span>
            <span>Atelier</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[750px] font-serif text-[clamp(2.35rem,6vw,5.5rem)] leading-[1.08] tracking-[-1.5px] text-[#e5e1dc] sm:tracking-[-2px] lg:leading-[1.02] xl:leading-[0.98]">
            Sculpting Time
            <br />
            Into{" "}
            <span className="italic text-[#c6a45c]">
              Celestial Art
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#98958e] sm:mt-7 sm:text-base sm:leading-8">
            Where exceptional horological craftsmanship and rare
            complications are transformed into timeless works of art.
            Discover our latest creations and explore the universe of
            independent watchmaking.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8 sm:gap-4">
            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#d1ac53] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.8px] text-black transition-colors duration-300 hover:bg-[#e0bd68] min-[420px]:w-auto sm:px-6 sm:text-xs md:text-sm"
            >
              <span>Explore Collections</span>
              <ArrowUpRight size={16} className="shrink-0" />
            </button>

            <button
              type="button"
              className="inline-flex min-h-12 w-full items-center justify-center border border-[#514c43] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.8px] text-[#d2cabc] transition-colors duration-300 hover:border-[#b59551] hover:text-[#d7ad38] min-[420px]:w-auto sm:px-6 sm:text-xs md:text-sm"
            >
              Request Appointment
            </button>
          </div>

       
          <div className="mt-10 grid w-full max-w-[500px] grid-cols-3 gap-2 border-t border-[#292827] pt-5 sm:mt-14 sm:gap-5 sm:pt-6 md:gap-8">
            <Stat value="120+" label="Years of craft" />
            <Stat value="42" label="Limited creations" />
            <Stat value="18" label="Master artisans" />
          </div>
        </div>

  
        <div className="relative mx-auto w-full min-w-0 max-w-[560px] lg:max-w-none lg:px-2 xl:px-4">

          {/* Swiss Made Badge */}
          <div className="absolute -right-1 top-4 z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#a8874b]/60 bg-[#181718] text-center font-mono text-[9px] uppercase leading-[1.3] tracking-[0.5px] text-[#c5a258] sm:-right-2 sm:top-6 sm:h-[72px] sm:w-[72px] sm:text-xs sm:tracking-[1px] lg:-right-1 xl:right-0">
            <span>
              Swiss
              <br />
              Made
              <br />
              2026
            </span>
          </div>


          <div className="overflow-hidden border border-[#393631] bg-[#171718]">
            <div className="relative w-full overflow-hidden">
              <img
                src={heroimg}
                alt="Luxury watch from the Celestial Tourbillon collection"
                className="block aspect-[4/5] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/5] 2xl:aspect-[4/5]"
              />
            </div>

            <div className="p-4 sm:p-5 md:p-6">
              <div className="flex flex-col gap-3 min-[480px]:flex-row min-[480px]:items-start min-[480px]:justify-between">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[1.2px] text-[#a6884c] sm:text-xs sm:tracking-[1.5px]">
                    Patek Philippe
                  </p>

                  <h3 className="mt-2 font-serif text-xl leading-snug text-[#e5e1dc] sm:text-2xl md:text-3xl">
                    Celestial Tourbillon
                  </h3>
                </div>

                <span className="shrink-0 font-mono text-xs text-[#a6884c] sm:pt-1 sm:text-sm md:text-base">
                  CHF 285,000
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-[#77746e] sm:mt-4 sm:leading-7">
                A contemporary interpretation of celestial horology,
                presented in a limited edition of twelve pieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => {
  return (
    <div className="min-w-0">
      <h3 className="font-serif text-lg text-[#c5a258] sm:text-2xl md:text-3xl">
        {value}
      </h3>

      <p className="mt-1.5 break-words font-mono text-[9px] uppercase leading-4 tracking-[0.3px] text-[#77736d] min-[380px]:text-[10px] sm:mt-2 sm:text-xs sm:leading-5 sm:tracking-[0.8px] md:text-sm">
        {label}
      </p>
    </div>
  );
};

export default Hero;
