import React from "react";
import Card from "./ProductCard";
import { highJewelleryProducts } from "./data/products";

const cardLayout = [
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
];

const Heading = () => {
  return (
    <section className="my-12 px-5 py-8 sm:px-8 lg:my-15 lg:px-10 lg:py-10">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#D4AF37] sm:text-sm">
        The Maison's exceptional creations
      </p>

      <div className="mt-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <h2 className="w-full font-serif text-3xl capitalize leading-tight text-white sm:text-4xl lg:w-1/2 lg:text-5xl">
          The haute joaillerie vitrines
        </h2>
        <p className="max-w-md font-sans text-sm leading-6 text-[#9E824C]">
          Rare stones and considered forms, selected for collectors who value
          exceptional craftsmanship.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        {highJewelleryProducts.map((product, index) => (
          <div
            key={product.id}
            className={`h-[460px] sm:h-[500px] lg:h-[480px] ${cardLayout[index]}`}
          >
            <Card product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Heading;
