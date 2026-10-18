
import React from "react";
import { Clock3 } from "lucide-react";

const SalonContact = ({ salon }) => {
  return (
    <div className="mt-5 rounded border border-[#292827] bg-[#171718] p-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        {/* Contact */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#858078] sm:text-sm">
            Direct Contact
          </p>

          <p className="mt-2 font-mono text-sm text-[#b99b5a]">
            {salon.phone}
          </p>

          <p className="mt-2 break-words text-sm leading-relaxed text-[#858078]">
            {salon.email}
          </p>
        </div>

        {/* Button */}
        <button className="flex items-center justify-center gap-2 rounded bg-[#262526] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[#c4bcae] transition hover:bg-[#343235] sm:text-sm">
          <Clock3 size={15} />
          Request Private Audience
        </button>
      </div>
    </div>
  );
};

export default SalonContact;
