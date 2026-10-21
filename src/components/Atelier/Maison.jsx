
import React from "react";
import img16 from "../../assets/img16.png";
import img2 from "../../assets/img2.png";

const Maison = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0d0d0e] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 xl:gap-20 xl:px-20 ">

       
        <div className="grid min-w-0 grid-cols-2 items-start gap-2 sm:gap-4 md:gap-5 lg:gap-3 xl:gap-5">

          <div className="min-w-0 overflow-hidden bg-[#151516]">
            <img
              src={img16}
              alt="Master watchmaker"
              loading="lazy"
              className="block aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5]"
            />
          </div>

          <div className="mt-6 min-w-0 overflow-hidden bg-[#151516] sm:mt-10 md:mt-12 lg:mt-10 xl:mt-16">
            <img
              src={img2}
              alt="Intricate luxury watch movement"
              loading="lazy"
              className="block aspect-[3/4] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5]"
            />
          </div>
        </div>

  
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#b59551] min-[400px]:text-xs min-[400px]:tracking-[2px] sm:text-sm">
            Our Swiss Atelier
          </p>

          <h2 className="mt-3 font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.12] tracking-[-0.5px] text-[#e5e1dc] sm:mt-4 sm:leading-tight lg:tracking-[-1px]">
            Centuries of
            <br />
            Horological Virtuosity
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#89857e] sm:mt-7 sm:text-base sm:leading-8">
            Within our Geneva atelier, precision and artistry converge.
            Every Maison Elysée creation is born from a dialogue between
            traditional craftsmanship and contemporary imagination.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#89857e] sm:text-base sm:leading-8">
            Our master watchmakers dedicate countless hours to every
            component, from the smallest wheel to the most intricate
            finishing detail.
          </p>

          {/* Quote */}
          <div className="mt-6 border-l border-[#a58548] bg-[#151516] px-4 py-4 sm:mt-7 sm:px-6 sm:py-5">
            <p className="font-serif text-sm italic leading-7 text-[#aaa59b] sm:text-base sm:leading-8">
              "A timepiece should not merely measure time. It should
              preserve a moment, express a character, and become part of
              its owner's story."
            </p>

            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.8px] text-[#b59551] min-[400px]:text-xs min-[400px]:tracking-[1px] sm:text-sm">
              — Master Watchmaker
            </p>
          </div>

          {/* Atelier Tags */}
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
            <span className="max-w-full rounded-full border border-[#3c3933] px-3 py-2 font-mono text-[10px] uppercase leading-4 tracking-[0.5px] text-[#99948a] sm:px-4 sm:text-xs sm:tracking-[1px] md:text-sm">
              Geneva 1898
            </span>

            <span className="max-w-full rounded-full border border-[#3c3933] px-3 py-2 font-mono text-[10px] uppercase leading-4 tracking-[0.5px] text-[#99948a] sm:px-4 sm:text-xs sm:tracking-[1px] md:text-sm">
              Independent Manufacture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maison;
