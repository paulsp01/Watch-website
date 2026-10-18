
import React from "react";

const SalonDetails = ({ salon }) => {
  return (
    <div className="px-2 pb-3 lg:px-0">
      {/* Top */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#b5944e] sm:text-sm">
          {salon.location}
        </p>

        <span className="font-mono text-xs uppercase tracking-wider text-[#858078] sm:text-sm">
          {salon.established}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-4 font-serif text-3xl leading-tight text-[#ddd8d0] sm:text-4xl">
        {salon.title}
        <br />
        <span className="text-[#e2ddd4]">{salon.subtitle}</span>
      </h2>

      {/* Description */}
      <p className="mt-4 text-sm leading-[1.7] text-[#858078] sm:text-base">
        {salon.description}
      </p>

      {/* Details */}
      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-[#292827] pt-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#858078] sm:text-sm">
            Architecture
          </p>

          <p className="mt-2 text-sm leading-[1.6] text-[#c4bcae]">
            {salon.architect}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#858078] sm:text-sm">
            Specialty
          </p>

          <p className="mt-2 text-sm leading-[1.6] text-[#c4bcae]">
            {salon.specialty}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#858078] sm:text-sm">
            Address
          </p>

          <p className="mt-2 text-sm leading-[1.6] text-[#c4bcae]">
            {salon.address}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#858078] sm:text-sm">
            Appointments
          </p>

          <p className="mt-2 text-sm leading-[1.6] text-[#c4bcae]">
            {salon.hours}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalonDetails;
