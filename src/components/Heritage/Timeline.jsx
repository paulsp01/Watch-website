
import React from "react";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";

const Timeline = () => {
  const timeline = [
    {
      year: "1892",
      title: "Sanctuary on Lake Geneva",
      category: "THE ORIGIN",
      description:
        "Founded beside Lake Geneva, our first atelier established a tradition of exceptional hand-finishing and mechanical precision.",
      image: img13,
    },
    {
      year: "1924",
      title: "The Sideral Pocket Complication",
      category: "MECHANICAL HERITAGE",
      description:
        "A remarkable pocket chronometer combining astronomical indications with an exceptionally refined hand-finished movement.",
      image: img14,
    },
    {
      year: "1958",
      title: "The Ultra-Thin Squelette Masterwork",
      category: "MINIATURIZED PRECISION",
      description:
        "A skeletonized calibre exposing every bridge, wheel and component while maintaining exceptional mechanical performance.",
      image: img15,
    },
    {
      year: "1989",
      title: "Poinçon de Genève Across All Movements",
      category: "GENEVA CERTIFICATION",
      description:
        "Every movement became subject to the rigorous standards of the Poinçon de Genève and its exacting finishing requirements.",
      image: img16,
    },
    {
      year: "2024",
      title: "Meteorite & Tourbillon Masterpiece",
      category: "CONTEMPORARY HOROLOGY",
      description:
        "A contemporary expression of our heritage combining celestial meteorite, tourbillon architecture and traditional finishing.",
      image: img12,
    },
  ];

  return (
    <section className="bg-[#101011] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">

      
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#a88a47] sm:text-sm sm:tracking-[0.3em]">
              THE GENEVA ATELIER • 1892 — PRESENT
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#ded9d2] sm:text-5xl">
              Epochs of Grand
              <br />
              Complication
            </h2>
          </div>

          <p className="hidden max-w-[300px] text-right text-sm leading-[1.7] text-[#858078] md:block">
            From our first Geneva sanctuary to contemporary celestial
            complications, each generation has added another chapter to the
            Maison Élysée archive.
          </p>
        </div>

      
        <div className="space-y-4 ">
          {timeline.map((item) => (
            <article
              key={item.year}
              className="overflow-hidden rounded-md border border-[#292829] bg-[#19191a] py-20 px-10 "
            >
              <div className="flex justify-between items-center">

                {/* YEAR */}
                <div className="flex items-center border-b border-[#292829] px-5 py-4 md:border-b-0 md:border-r">
                  <div>
                    <p className="font-serif text-2xl text-[#d5ad3a] sm:text-3xl">
                      {item.year}
                    </p>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#858078] sm:text-xs sm:tracking-[0.15em]">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* TEXT */}
                <div className="px-5 py-5">
                  <h3 className="max-w-[430px] font-serif text-xl leading-tight text-[#ddd8d0] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[500px] text-sm leading-[1.7] text-[#858078]">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs tracking-[0.12em] text-[#d5ad3a] sm:text-sm sm:tracking-[0.15em]">
                      ARCHIVE DOCUMENT
                    </span>

                    <span className="h-px w-5 bg-[#5c4d2e]" />

                    <span className="text-xs text-[#858078]">
                      GENEVA ATELIER
                    </span>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative h-[150px] md:h-full md:min-h-[180px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-50 w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                  <span className="absolute bottom-3 left-3 bg-black/70 px-2 py-1 font-mono text-xs tracking-wider text-[#d5ad3a]">
                    ARCHIVE PLATE • {item.year}
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
