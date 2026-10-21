
import React from "react";
import { ArrowUpRight } from "lucide-react";

const CollectionHeader = () => {
  return (
    <div className="mb-8 flex w-full flex-col items-start justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end sm:gap-6">

      {/* Heading */}
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase leading-5 tracking-[1.5px] text-[#b59551] min-[400px]:text-xs min-[400px]:tracking-[2px] sm:text-sm">
          Haute Horlogerie & Jewellery
        </p>

        <h2 className="mt-2 font-serif text-2xl leading-tight tracking-[-0.5px] text-[#ded9d2] min-[400px]:text-3xl sm:mt-3 sm:text-4xl lg:text-5xl">
          Vault of Masterworks
        </h2>
      </div>

      {/* View All Button */}
      <button
        type="button"
        className="inline-flex shrink-0 items-center gap-2 border-b border-[#b59551]/40 pb-1.5 font-mono text-[10px] uppercase tracking-[0.8px] text-[#b59551] transition-colors duration-300 hover:border-[#e0bd68] hover:text-[#e0bd68] min-[400px]:text-xs sm:mb-1 sm:text-xs lg:text-sm"
      >
        <span>View all creations</span>
        <ArrowUpRight
          size={15}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>
    </div>
  );
};

export default CollectionHeader;
