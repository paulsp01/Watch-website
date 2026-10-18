import React from "react";
import CollectionHeader from "./CollectionHeader";
import ProductCard from "./ProductCard";
import { products } from "./atelierData.js";

const CollectionSection = () => {
  return (
    <section className="bg-[#111112] py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        
        <CollectionHeader />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              product={product}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CollectionSection;