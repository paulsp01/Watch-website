import React from "react";
import { ArrowUpRight } from "lucide-react";

const CollectionHeader = () => {
  return (
    <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="font-mono text-xs uppercase tracking-[2px] text-[#b59551] sm:text-sm">
          Haute Horlogerie & Jewellery
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#ded9d2] sm:text-4xl">
          Vault of Masterworks
        </h2>
      </div>

      <button
        type="button"
        className="hidden items-center gap-2 font-mono text-sm uppercase tracking-[1px] text-[#b59551] transition hover:text-[#e0bd68] sm:flex"
      >
        View all creations
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
};

export default CollectionHeader;