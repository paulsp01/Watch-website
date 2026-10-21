
import React from "react";
import CollectionHeader from "./CollectionHeader";
import ProductCard from "./ProductCard";
import { products } from "./atelierData.js";

const CollectionSection = () => {
  return (
    <section className="w-full overflow-hidden bg-[#111112] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20">

        {/* Collection Heading */}
        <CollectionHeader />

        {/* Product Grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="min-w-0 w-full"
            >
              <ProductCard
                product={product}
                index={index}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CollectionSection;
