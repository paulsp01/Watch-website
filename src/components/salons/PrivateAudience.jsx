
import React from "react";
import { accessSteps } from "./data/salondata.js";
import AudienceCard from "./AudienceCard";
import PrivacyInfo from "./PrivacyInfo";

const PrivateAudience = () => {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] rounded-lg border border-[#222223] bg-[#181819] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
        {/* HEADER */}
        <div className="max-w-[700px]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#b5944e] sm:text-sm sm:tracking-[0.3em]">
            Sanctuary Protocol
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-[#ddd8d0] sm:text-4xl lg:text-5xl">
            The Private Audience Code
          </h2>

          <p className="mt-4 max-w-[650px] text-sm leading-[1.7] text-[#858078] sm:text-base">
            Every audience at Maison Elysée is structured under strict
            protocols of discretion, unhurried attention and individual
            hospitality.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
          {accessSteps.map((item) => (
            <AudienceCard key={item.step} item={item} />
          ))}
        </div>

        {/* PRIVACY */}
        <PrivacyInfo />
      </div>
    </section>
  );
};

export default PrivateAudience;
