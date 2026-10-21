
import React from "react";
import { ChevronRight } from "lucide-react";
import WishlistButton from "../common/WishlistButton";
import { useGlobalUI } from "../../context/GlobalUIContext";

const ProductCard = ({ product, index }) => {
  const { openInquiry } = useGlobalUI();

  const wishlistProduct = {
    ...product,
    wishlistId: `atelier-${product.title}`,
  };

  return (
    <article className="group flex h-full min-w-0 flex-col border border-[#292827] bg-[#171718] transition-colors duration-500 hover:border-[#816b3d]">
      {/* Image */}
      <div className="relative w-full overflow-hidden">
        <div className="aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-[4/3] xl:aspect-[5/4]">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Product Tag */}
        <span className="absolute left-2 top-2 max-w-[60%] truncate border border-[#514c43]/60 bg-[#111112]/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.8px] text-[#c5a258] min-[400px]:left-3 min-[400px]:top-3 min-[400px]:text-[10px] sm:left-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[1px]">
          {product.tag}
        </span>

        {/* Product Number and Wishlist */}
        <div className="absolute right-2 top-2 flex items-center gap-2 min-[400px]:right-3 min-[400px]:top-3 sm:right-4 sm:top-4 sm:gap-3">
          <span className="whitespace-nowrap font-mono text-[10px] text-[#aaa39a] min-[400px]:text-xs sm:text-sm">
            {String(index + 1).padStart(2, "0")} / 03
          </span>

          <WishlistButton
            product={wishlistProduct}
            className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#514c43] bg-[#111112]/90 text-[#c5a258] transition-colors duration-300 hover:border-[#c5a258] sm:h-9 sm:w-9"
          />
        </div>
      </div>

      {/* Product Content */}
      <div className="flex flex-1 flex-col p-3 min-[400px]:p-4 sm:p-5 md:p-6 lg:p-4 xl:p-5 2xl:p-6">
        {/* Title and Price */}
        <div className="flex min-w-0 flex-col gap-2 min-[480px]:flex-row min-[480px]:items-start min-[480px]:justify-between sm:gap-3">
          <h3 className="min-w-0 break-words font-serif text-lg leading-snug text-[#e5e1dc] sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
            {product.title}
          </h3>

          <span className="shrink-0 whitespace-normal font-mono text-xs leading-5 text-[#c5a258] min-[480px]:text-right sm:text-sm md:text-base">
            {product.price}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 flex-1 break-words text-sm leading-6 text-[#8d8881] sm:mt-4 sm:text-base sm:leading-7">
          {product.description}
        </p>

        {/* Inquiry Button */}
        <button
          type="button"
          onClick={() => openInquiry(product.title)}
          className="mt-5 inline-flex w-fit max-w-full items-center gap-1.5 text-left font-mono text-[10px] uppercase tracking-[0.7px] text-[#b59551] transition-colors duration-300 hover:text-[#e0bd68] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b59551] focus-visible:ring-offset-4 focus-visible:ring-offset-[#171718] min-[400px]:text-[11px] sm:mt-6 sm:gap-2 sm:text-xs sm:tracking-[1px] md:text-sm"
        >
          <span>Enquire about creation</span>
          <ChevronRight
            size={16}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
