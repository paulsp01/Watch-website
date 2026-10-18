
import React from "react";
import { ShieldCheck } from "lucide-react";

const PrivacyInfo = () => {
  return (
    <div className="mt-9 flex flex-col justify-between gap-5 border-t border-[#292827] pt-6 sm:flex-row sm:items-center">
      {/* LEFT */}
      <div className="flex items-start gap-3">
        <div className="mt-1 text-[#c4a151]">
          <ShieldCheck size={18} />
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#b5944e] sm:text-sm">
            Privacy & Certified Experience
          </p>

          <p className="mt-2 text-sm leading-[1.6] text-[#858078]">
            Every visit is handled by discreet private salon specialists.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <button className="w-fit rounded-full border border-[#39362f] px-4 py-3 font-mono text-xs uppercase tracking-wider text-[#9d9587] transition hover:border-[#806b3e] hover:text-[#c4a151] sm:text-sm">
        Download Salon Charter PDF
      </button>
    </div>
  );
};

export default PrivacyInfo;
