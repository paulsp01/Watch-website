import React from "react";
import img16 from "../../assets/img16.png";
import img2 from "../../assets/img2.png";

const Maison = () => {
  return (
    <section className="bg-[#0d0d0e] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Images */}
        <div className="grid grid-cols-2 gap-2">
          <div className="overflow-hidden">
            <img
              src={img16}
              alt="Master watchmaker"
              className="h-[300px] w-full object-cover sm:h-[360px]"
            />
          </div>

          <div className="mt-12 overflow-hidden sm:mt-16">
            <img
              src={img2}
              alt="Watch movement"
              className="h-[300px] w-full object-cover sm:h-[360px]"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[2px] text-[#b59551] sm:text-sm">
            Our Swiss Atelier
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#e5e1dc] sm:text-4xl lg:text-5xl">
            Centuries of
            <br />
            Horological Virtuosity
          </h2>

          <p className="mt-7 text-base leading-7 text-[#89857e]">
            Within our Geneva atelier, precision and artistry converge.
            Every Maison Elysée creation is born from a dialogue between
            traditional craftsmanship and contemporary imagination.
          </p>

          <p className="mt-4 text-base leading-7 text-[#89857e]">
            Our master watchmakers dedicate countless hours to every
            component, from the smallest wheel to the most intricate
            finishing detail.
          </p>

          <div className="mt-7 border-l border-[#a58548] bg-[#151516] px-5 py-5">
            <p className="font-serif text-base italic leading-7 text-[#aaa59b]">
              "A timepiece should not merely measure time. It should
              preserve a moment, express a character, and become part of
              its owner's story."
            </p>

            <p className="mt-3 font-mono text-xs uppercase tracking-[1px] text-[#b59551] sm:text-sm">
              — Master Watchmaker
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#3c3933] px-4 py-2 font-mono text-xs uppercase tracking-[1px] text-[#99948a] sm:text-sm">
              Geneva 1898
            </span>

            <span className="rounded-full border border-[#3c3933] px-4 py-2 font-mono text-xs uppercase tracking-[1px] text-[#99948a] sm:text-sm">
              Independent Manufacture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maison;