import React from "react";
import hero from "../../assets/Hero.png";
import {
  ChevronDown,
  LockKeyholeOpen,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-12 px-5 py-8 text-white sm:px-8 lg:flex-row lg:gap-10 lg:px-10 lg:py-10">
      {/* Hero Image */}
      <div className="relative w-full lg:w-[60%]">
        <img
          src={hero}
          alt="High jewellery gemstone collection"
          className="h-[420px] w-full object-cover object-center sm:h-[550px] lg:h-[800px] xl:h-[850px]"
        />

        <div className="absolute bottom-4 left-3 right-3 flex flex-col gap-4 rounded-lg bg-[#23211E] p-4 sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
          <div>
            <h2 className="flex items-center gap-2 text-xs uppercase leading-5 tracking-wider text-[#9E824C] sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#9E824C]" />
              Lorem ipsum dolor sit amet.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-lg uppercase leading-snug text-white sm:text-xl">
                Lorem, ipsum dolor.
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#9E824C]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis?
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-wider text-[#9E824C] sm:text-sm">
                Lorem ipsum.
              </p>
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-medium uppercase tracking-wider text-black transition hover:bg-[#e4c45d]"
              >
                Acquire
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-7 left-3 z-10 rounded-lg bg-[#272523] px-5 py-3 sm:left-5">
          <h2 className="text-sm tracking-wider text-[#9E824C] sm:text-base">
            Lorem ipsum dolor.
          </h2>
          <p className="mt-1 text-sm leading-5 tracking-wide text-[#ddd8d0]">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex w-full flex-col gap-5 pt-2 sm:gap-6 lg:w-[40%] lg:pt-0">
        <p className="text-sm leading-6 tracking-wide text-[#9E824C]">
          Lorem ipsum dolor sit amet-----
        </p>

        <h1 className="font-serif text-4xl capitalize leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Sovereign gemstones of incomparable provenance
        </h1>

        <p className="text-base font-sans leading-7 text-[#d0ccc4] sm:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quia
          unde veniam, laboriosam consequuntur dicta nostrum eveniet repudiandae
          ducimus possimus deserunt earum, fugiat quos cumque eaque, maxime
          culpa eligendi incidunt!
        </p>

        <div className="grid grid-cols-3 gap-3 rounded-md bg-[#23211E] p-4 text-xs uppercase sm:gap-4 sm:p-5 sm:text-sm">
          <div>
            <h2 className="text-xl text-[#9E824C] sm:text-2xl">0%</h2>
            <p className="mt-2 leading-5 text-[#d0ccc4]">
              Lorem, ipsum dolor.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#9E824C] sm:text-2xl">Type IIa</h2>
            <p className="mt-2 leading-5 text-[#d0ccc4]">
              Lorem, ipsum dolor.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#9E824C] sm:text-2xl">Mogok</h2>
            <p className="mt-2 leading-5 text-[#d0ccc4]">
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex w-fit items-center justify-center gap-2 rounded-full bg-[#383837] px-7 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#9E824C] transition hover:bg-[#484641] sm:px-10 sm:text-sm"
        >
          View vitrines
          <ChevronDown size={16} />
        </button>

        <p className="flex items-center gap-2 text-xs font-medium uppercase leading-6 tracking-wider text-[#e4c993] sm:text-sm">
          <LockKeyholeOpen size={16} />
          Reserve confidential audience
        </p>
      </div>
    </div>
  );
};

export default Hero;