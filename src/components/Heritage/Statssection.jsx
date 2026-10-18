
import React from "react";

const Statssection = () => {
  const stats = [
    ["1892", "Founded in Geneva"],
    ["100%", "Hand Finished"],
    ["122.6Y", "Celestial Accuracy"],
    ["XIII", "Poinçon Standard"],
  ];

  return (
    <section className="border-y border-[#242324] bg-[#151516]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 sm:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div
            key={label}
            className={`px-5 py-5 sm:py-6 ${
              index < 2
                ? "border-b border-[#292829] sm:border-b-0"
                : ""
            } ${
              index % 2 === 0 && index !== 3
                ? "border-r border-[#292829]"
                : ""
            } ${
              index === 1
                ? "sm:border-r sm:border-[#292829]"
                : ""
            } ${
              index === 2
                ? "border-r border-[#292829] sm:border-r"
                : ""
            }`}
          >
            <p className="font-serif text-2xl text-[#d5ad3a] sm:text-3xl">
              {value}
            </p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#858078] sm:text-xs sm:tracking-[0.15em]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statssection;
