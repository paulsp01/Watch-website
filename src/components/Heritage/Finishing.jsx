
import React from "react";
import { ArrowUpRight } from "lucide-react";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";

const Finishing = () => {
  const cards = [
    {
      category: "ANGULAR FINISHING",
      title: "Anglage",
      description:
        "Every exposed edge is individually beveled and polished by hand to create a precise transition between light and shadow.",
      image: img7,
    },
    {
      category: "DIAL CRAFT",
      title: "Grand Feu Enamel",
      description:
        "Multiple firings create depth and permanence. Each dial is inspected individually before entering the atelier.",
      image: img8,
    },
    {
      category: "BLACK POLISH",
      title: "Poli Noir",
      description:
        "A perfectly flat surface alternates between deep black and brilliant reflections depending on the angle of light.",
      image: img9,
    },
  ];

  return (
    <section className="border-y border-[#242324] bg-[#101011] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">

        {/* TITLE */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#a88a47] sm:text-sm sm:tracking-[0.3em]">
            THE ARTISAN'S DISCIPLINE • HAND FINISHING
          </p>

          <h2 className="mt-3 font-serif text-4xl leading-tight text-[#ded9d2] sm:text-5xl">
            Métiers d'Art & Finishing
            <br />
            Disciplines
          </h2>

          <p className="mx-auto mt-4 max-w-[550px] text-sm leading-[1.7] text-[#858078] sm:text-base">
            In our Geneva ateliers, every visible surface receives its own
            treatment. Each operation is performed slowly, deliberately and
            according to generations of accumulated knowledge.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-md border border-[#292829] bg-[#19191a]"
            >
              {/* IMAGE */}
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <span className="absolute left-3 top-3 bg-black/70 px-2 py-1 font-mono text-xs tracking-wider text-[#d5ad3a]">
                  MÉTIERS D'ART
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#9e824c] sm:text-sm">
                  {card.category}
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#ddd8d0]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.7] text-[#858078]">
                  {card.description}
                </p>

                <button className="mt-5 flex items-center gap-2 text-xs tracking-[0.12em] text-[#d5ad3a] transition hover:text-[#e8c34d] sm:text-sm">
                  DISCOVER TECHNIQUE
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Finishing;
