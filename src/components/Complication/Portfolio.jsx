import React from "react";
import { ChevronRight } from "lucide-react";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";

const watches = [
  {
    id: "MC-316",
    category: "MONOPUSHER CHRONOGRAPH",
    title: "Souverain Chronographe\nSquelette",
    price: "CHF 248,000",
    image: img7,
    description:
      "A 42mm ultra-thin architectural feat featuring sapphire bridge geometry and integrated horizontal clutch.",
  },
  {
    id: "MP-903",
    category: "ACOUSTIC HOROLOGY",
    title: "Répétition Minutes\nÉternelle",
    price: "CHF 395,000",
    image: img8,
    description:
      "Resonant cathedral chiming tuned to Grand et Petite sonnerie with a sublime striking case.",
  },
  {
    id: "MB-431",
    category: "ASTRONOMICAL CALENDAR",
    title: "Quantime Perpétuel\nLunaire",
    price: "CHF 265,000",
    image: img9,
    description:
      "Astronomical precision joined by day, date, month and leap-year complexity.",
  },
];

const Portfolio = () => {
  return (
    <section className="border-t border-[#171718] bg-[#121213] px-5 py-14 lg:px-10 lg:py-20 xl:px-20">
      <div className="mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#9E824C] sm:text-sm sm:tracking-[0.28em]">
              PERMANENT HOROLOGICAL ARCHIVE
            </p>

            <h2 className="mt-2 font-serif text-3xl leading-tight text-[#d9d5ce] sm:text-4xl">
              Master Complications Portfolio
            </h2>
          </div>

          <p className="text-xs leading-5 tracking-[0.12em] text-[#77736d] sm:text-sm sm:tracking-[0.2em]">
            CURATED EDITIONS • NUMBERED MANUFACTURES
          </p>
        </div>

        {/* Watch cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {watches.map((watch) => (
            <article
              key={watch.id}
              className="group overflow-hidden rounded-md border border-[#242426] bg-[#1a1a1b]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={watch.image}
                  alt={watch.title.replace("\n", " ")}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute right-3 top-3 bg-black/70 px-3 py-2 text-xs text-[#e2ded7] sm:text-sm">
                  {watch.price}
                </span>

                <span className="absolute bottom-3 left-3 text-xs tracking-[0.15em] text-[#d7ad38] sm:text-sm">
                  {watch.id}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <p className="text-xs tracking-[0.15em] text-[#9E824C] sm:text-sm sm:tracking-[0.2em]">
                  {watch.category}
                </p>

                <h3 className="mt-2 whitespace-pre-line font-serif text-xl leading-snug text-[#ddd8d0] sm:text-2xl">
                  {watch.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#8d8881]">
                  {watch.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#292728] pt-4">
                  <span className="text-xs leading-5 text-[#77716a] sm:text-sm">
                    CHF • 52 Reserve • Grade 5 Titanium
                  </span>

                  <button
                    type="button"
                    className="flex shrink-0 items-center gap-1 text-xs tracking-[0.12em] text-[#d7ad38] transition hover:text-[#edc64c] sm:text-sm"
                  >
                    DETAILS
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;