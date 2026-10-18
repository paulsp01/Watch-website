
import React from "react";
import { ArrowUpRight } from "lucide-react";

const ArchiveSection = () => {
  return (
    <section className="bg-[#111112] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#a88a47] sm:text-sm sm:tracking-[0.3em]">
              PRESERVATION • RESEARCH • RESTORATION
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#ddd8d0] sm:text-5xl">
              The Living Archive &
              <br />
              Restoration Service
            </h2>

            <p className="mt-4 max-w-[550px] text-sm leading-[1.7] text-[#858078] sm:text-base">
              Today, our historical archive protects over a century of Geneva
              watchmaking knowledge. Each restored movement is treated as a
              piece of living history rather than simply an object.
            </p>

            {/* ARCHIVE POINTS */}
            <div className="mt-7 space-y-5">
              {[
                {
                  number: "01",
                  title: "Artisanal Finishing Protocol",
                  description:
                    "Every visible surface is finished manually according to our internal Geneva standards.",
                },
                {
                  number: "02",
                  title: "Heritage Restoration Protocol",
                  description:
                    "Historic Maison Élysée calibres are restored while preserving their original character.",
                },
                {
                  number: "03",
                  title: "Private Archive Access",
                  description:
                    "Verified collectors may request access to selected historical records and movements.",
                },
              ].map((item) => (
                <div key={item.number} className="flex gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#66542e] font-mono text-xs text-[#d5ad3a]">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-serif text-lg text-[#d2cdc5] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-[1.7] text-[#858078]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-7 flex items-center gap-2 text-xs tracking-[0.15em] text-[#d5ad3a] transition hover:text-[#e8c34d] sm:text-sm">
              EXPLORE THE LIVING ARCHIVE
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-md border border-[#292829] bg-[#1b1a1b] p-5 sm:p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-[#a88a47] sm:text-sm sm:tracking-[0.3em]">
              PRIVATE ARCHIVE ACCESS
            </p>

            <h3 className="mt-3 font-serif text-3xl leading-tight text-[#ddd8d0] sm:text-4xl">
              Register for the
              <br />
              Heritage Archive
            </h3>

            <p className="mt-4 text-sm leading-[1.7] text-[#858078]">
              Request access to selected historical documents, movement
              records and restoration archives.
            </p>

            {/* FORM */}
            <div className="mt-6 space-y-5">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full border-b border-[#34312e] bg-transparent py-3 text-sm text-white outline-none placeholder:text-xs placeholder:tracking-wider placeholder:text-[#858078] focus:border-[#9e824c]"
              />

              <input
                type="email"
                placeholder="CORRESPONDENCE EMAIL"
                className="w-full border-b border-[#34312e] bg-transparent py-3 text-sm text-white outline-none placeholder:text-xs placeholder:tracking-wider placeholder:text-[#858078] focus:border-[#9e824c]"
              />

              <select
                defaultValue=""
                className="w-full border-b border-[#34312e] bg-transparent py-3 text-sm text-[#858078] outline-none focus:border-[#9e824c]"
              >
                <option value="" disabled>
                  ARCHIVE SUBJECT
                </option>
                <option>Historic Movement</option>
                <option>Restoration</option>
                <option>Heritage Documents</option>
              </select>
            </div>

            <button className="mt-7 flex w-full items-center justify-center gap-2 bg-[#d5ad3a] px-3 py-3 text-xs tracking-[0.12em] text-black transition hover:bg-[#e8c34d] sm:text-sm sm:tracking-[0.16em]">
              REQUEST ARCHIVE ACCESS
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;
