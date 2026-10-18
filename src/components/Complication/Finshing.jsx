import React from "react";
import img12 from "../../assets/img12.png";

const Finshing = () => {
  const inspectionItems = [
    {
      title: "Poinçon de Genève Criterion XII",
      value: "100% PASS",
      text: "Internal sharp angles and mirror-finished visible surfaces.",
    },
    {
      title: "Specular Steel Chamfers",
      value: "48h / BRIDGE",
      text: "Surfaces appear pitch black from one angle, brilliant mirror from another.",
    },
    {
      title: "Wheel Train Sinking & Escapement Ruby Mounts",
      value: "29 JEWELS",
      text: "Polished steel plates and individually hand-finished jewels.",
    },
  ];

  return (
    <section className="bg-[#101011] px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1500px] items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Inspection image */}
        <div className="rounded-lg border border-[#292725] bg-[#19191a] p-3">
          <div className="relative h-[300px] overflow-hidden rounded-md sm:h-[400px] lg:h-[450px]">
            <img
              src={img12}
              alt="Watch movement inspection"
              className="h-full w-full object-cover"
            />

            <div className="absolute left-3 top-3 rounded-sm bg-black/70 px-3 py-2 text-xs tracking-[0.12em] text-[#d7ad38] sm:text-sm">
              MICRO-ANGLE INSPECTION
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap justify-between gap-2 text-xs text-white/70 sm:text-sm">
              <span>Specular Angle • Concave Hand Filled</span>
              <span>TOLERANCE ±0.002mm</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 pt-3 sm:grid-cols-3">
            {[
              "1. ANGULAR MAIN",
              "2. BLACK POLISH",
              "3. CÔTES DE GENÈVE",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#111112] px-2 py-3 text-center text-xs tracking-[0.1em] text-[#8e8982] sm:px-3 sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.25em] text-[#9E824C] sm:text-sm">
            POINÇON DE GENÈVE CERTIFIED
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-[#e0dcd5] sm:text-4xl lg:text-5xl">
            The Sovereign Rules of
            <br />
            Finishing
          </h2>

          <p className="mt-5 max-w-[600px] text-sm leading-7 text-[#99948c]">
            In our Geneva manufacture, not a single surface remains as
            machining-cut. Every flank is filed by hand with genuine wood
            paste, diamond powder, and ancestral gauge burnishers to achieve
            soft luminous reflections devoid of optical distortion.
          </p>

          <div className="mt-7 space-y-3">
            {inspectionItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between gap-3 rounded-md border border-[#242426] bg-[#1a1a1b] p-4 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="text-sm font-medium leading-6 text-[#d2cdc5]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#77736d]">
                    {item.text}
                  </p>
                </div>

                <span className="shrink-0 text-xs tracking-[0.08em] text-[#d7ad38] sm:text-sm">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finshing;