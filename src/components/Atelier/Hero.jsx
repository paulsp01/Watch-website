import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroimg from "../../assets/Hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-[650px] bg-[#101011]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(180,145,70,0.08),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-[1250px] grid-cols-1 gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[1.5px] text-[#b69755] sm:text-sm">
            <span>01</span>
            <span>—</span>
            <span>Haute Horlogerie</span>
            <span>—</span>
            <span>Atelier</span>
          </div>

          <h1 className="max-w-[650px] font-serif text-4xl leading-tight tracking-[-1px] text-[#e5e1dc] sm:text-5xl lg:text-7xl lg:leading-[0.95]">
            Sculpting Time
            <br />
            Into{" "}
            <span className="italic text-[#c6a45c]">
              Celestial Art
            </span>
          </h1>

          <p className="mt-7 max-w-[490px] text-base leading-7 text-[#98958e]">
            Where exceptional horological craftsmanship and rare
            complications are transformed into timeless works of art.
            Discover our latest creations and explore the universe of
            independent watchmaking.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="flex items-center gap-3 bg-[#d1ac53] px-5 py-3 font-mono text-xs uppercase tracking-[1px] text-black transition hover:bg-[#e0bd68] sm:px-6 sm:text-sm"
            >
              Explore Collections
              <ArrowUpRight size={16} />
            </button>

            <button
              type="button"
              className="border border-[#514c43] px-5 py-3 font-mono text-xs uppercase tracking-[1px] text-[#d2cabc] transition hover:border-[#b59551] sm:px-6 sm:text-sm"
            >
              Request Appointment
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-[470px] grid-cols-3 gap-4 border-t border-[#292827] pt-6 sm:gap-8">
            <Stat value="120+" label="Years of craft" />
            <Stat value="42" label="Limited creations" />
            <Stat value="18" label="Master artisans" />
          </div>
        </div>

        {/* Watch */}
        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute -right-2 top-7 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#a8874b]/60 bg-[#181718] text-center font-mono text-xs uppercase leading-4 tracking-[1px] text-[#c5a258] sm:-right-3 sm:h-[72px] sm:w-[72px] sm:text-sm">
            Swiss
            <br />
            Made
            <br />
            2026
          </div>

          <div className="overflow-hidden border border-[#393631] bg-[#171718]">
            <img
              src={heroimg}
              alt="Luxury watch"
              className="h-[430px] w-full object-cover sm:h-[500px]"
            />

            <div className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[1.5px] text-[#a6884c] sm:text-sm">
                    Patek Philippe
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#e5e1dc]">
                    Celestial Tourbillon
                  </h3>
                </div>

                <span className="whitespace-nowrap font-mono text-sm text-[#a6884c] sm:text-base">
                  CHF 285,000
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-[#77746e] sm:text-base">
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
    <div>
      <h3 className="font-serif text-xl text-[#c5a258] sm:text-2xl">
        {value}
      </h3>

      <p className="mt-2 font-mono text-xs leading-5 uppercase tracking-[0.5px] text-[#77736d] sm:text-sm sm:tracking-[1px]">
        {label}
      </p>
    </div>
  );
};

export default Hero;