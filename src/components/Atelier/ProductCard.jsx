import React from "react";
import { ChevronRight } from "lucide-react";
import WishlistButton from "../common/WishlistButton";
import { useGlobalUI } from "../../context/GlobalUIContext";

const ProductCard = ({ product, index }) => {
  const { openInquiry } = useGlobalUI();
  const wishlistProduct = { ...product, wishlistId: `atelier-${product.title}` };

  return (
    <article className="group border border-[#292827] bg-[#171718] transition duration-500 hover:border-[#816b3d]">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 bg-[#111112]/90 px-3 py-1 font-mono text-xs uppercase tracking-[1px] text-[#c5a258] sm:text-sm">
          {product.tag}
        </span>

        <div className="absolute right-4 top-4 flex items-center gap-3">
          <span className="font-mono text-xs text-[#aaa39a] sm:text-sm">
            0{index + 1} / 03
          </span>
          <WishlistButton
            product={wishlistProduct}
            className="flex h-9 w-9 items-center justify-center border border-[#514c43] bg-[#111112]/90 text-[#c5a258] transition hover:border-[#c5a258]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-serif text-2xl leading-snug text-[#e5e1dc]">
            {product.title}
          </h3>

          <span className="whitespace-nowrap font-mono text-sm text-[#c5a258] sm:text-base">
            {product.price}
          </span>
        </div>

        <p className="mt-3 text-base leading-7 text-[#8d8881]">
          {product.description}
        </p>

        <button
          type="button"
          onClick={() => openInquiry(product.title)}
          className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[1px] text-[#b59551] transition hover:text-[#e0bd68] sm:text-sm"
        >
          Enquire about creation
          <ChevronRight size={16} />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;