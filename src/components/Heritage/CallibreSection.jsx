
import React from "react";

const CallibreSection = () => {
  const specifications = [
    ["Movement", "Calibre 881-A"],
    ["Architecture", "Ultra-thin skeletonized"],
    ["Frequency", "21,600 vph"],
    ["Power Reserve", "72 hours"],
    ["Case", "18K Rose Gold"],
    ["Complications", "Tourbillon"],
  ];

  return (
    <section className="bg-[#151516] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1050px]">
        <div className="rounded-md border border-[#292829] bg-[#1b1a1b] p-5 sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">

            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#a88a47] sm:text-sm sm:tracking-[0.3em]">
                CALIBRE 881-A • HERITAGE DOSSIER
              </p>

              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#ddd8d0] sm:text-5xl">
                Calibre 881-A
                <br />
                Spec Dossier
              </h2>

              <p className="mt-4 max-w-[450px] text-sm leading-[1.7] text-[#858078] sm:text-base">
                A compact expression of our architectural philosophy. The
                calibre exposes its mechanical logic while maintaining strict
                standards of finishing and reliability.
              </p>

              {/* SPECIFICATIONS */}
              <div className="mt-7 space-y-3">
                {specifications.map(([name, value]) => (
                  <div
                    key={name}
                    className="flex justify-between gap-4 border-b border-[#302e2d] pb-3"
                  >
                    <span className="text-sm text-[#858078]">
                      {name}
                    </span>

                    <span className="text-right text-sm text-[#d0cac2]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT MOVEMENT DIAGRAM */}
            <div className="rounded-md border border-[#302e2d] bg-[#111112] p-5">
              <div className="flex justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-[#9e824c]">
                  MOVEMENT ARCHITECTURE
                </span>

                <span className="font-mono text-xs text-[#858078]">
                  ME-881-A
                </span>
              </div>

              {/* CIRCLE */}
              <div className="mx-auto my-8 flex aspect-square max-w-[230px] items-center justify-center rounded-full border border-[#463a29]">
                <div className="flex h-[155px] w-[155px] items-center justify-center rounded-full border border-[#66522d]">
                  <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[#95783c]">
                    <div className="h-5 w-5 rounded-full border border-[#d5ad3a]" />
                  </div>
                </div>
              </div>

              {/* BOTTOM SPECS */}
              <div className="grid grid-cols-3 border-t border-[#2b2928] pt-4 text-center">
                <div>
                  <p className="font-serif text-xl text-[#d5ad3a]">
                    21,600
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#858078]">
                    VPH
                  </p>
                </div>

                <div className="border-x border-[#2b2928]">
                  <p className="font-serif text-xl text-[#d5ad3a]">
                    72H
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#858078]">
                    RESERVE
                  </p>
                </div>

                <div>
                  <p className="font-serif text-xl text-[#d5ad3a]">
                    29
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#858078]">
                    JEWELS
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CallibreSection;
