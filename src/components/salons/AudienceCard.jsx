
import React from "react";

const AudienceCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="rounded-md border border-[#252526] bg-[#1d1d1e] p-5 sm:p-6">
      {/* Icon */}
      <div className="flex h-9 w-9 items-center justify-center rounded border border-[#3e382a] bg-[#171718]">
        <Icon size={16} className="text-[#c4a151]" />
      </div>

      {/* Stage */}
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-[#b5944e] sm:text-sm">
        {item.step}
      </p>

      {/* Title */}
      <h3 className="mt-3 font-serif text-xl leading-tight text-[#ddd8d0] sm:text-2xl">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-[1.7] text-[#858078]">
        {item.description}
      </p>

      {/* Button */}
      <button className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#b5944e] transition hover:text-[#e0bd68] sm:text-sm">
        {item.button} →
      </button>
    </div>
  );
};

export default AudienceCard;
