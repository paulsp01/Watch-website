import React from "react";
import WishlistButton from "../common/WishlistButton";
import { useGlobalUI } from "../../context/GlobalUIContext";

const ProductCard = ({ product }) => {
  const { openInquiry } = useGlobalUI();
  const wishlistProduct = { ...product, wishlistId: `high-jewellery-${product.id}` };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-[#292722] bg-[#171715]">
      {/* Product Image */}
      <div className="relative min-h-0 flex-1 overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-3 sm:left-4 sm:right-4 sm:top-4">
          <span className="font-mono text-xs uppercase leading-5 tracking-[0.15em] text-[#c5a75c] sm:text-sm sm:tracking-[0.18em]">
            {product.category}
          </span>
          <WishlistButton
            product={wishlistProduct}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#514c43] bg-black/70 text-[#c5a75c] transition hover:border-[#c5a75c]"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex min-h-[250px] shrink-0 flex-col justify-between border-t border-[#292722] p-4 sm:min-h-[255px] sm:p-5">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-serif text-xl leading-snug text-[#ddd8ca] sm:text-2xl">
              {product.title}
            </h2>

            <span className="shrink-0 font-mono text-xs text-[#817b6c] sm:text-sm">
              {String(product.id).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-3 font-sans text-sm leading-6 text-[#827d72] sm:text-base sm:leading-7">
            {product.description}
          </p>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[#716b5f] sm:text-sm">
              Investment
            </p>

            <p className="mt-1 font-mono text-base text-[#b7af9c] sm:text-lg">
              {product.price}
            </p>
          </div>

          <button
            type="button"
            onClick={() => openInquiry(product.title)}
            className="shrink-0 border border-[#494437] px-3 py-2 font-mono text-xs uppercase tracking-wider text-[#a69d89] transition hover:border-[#c5a75c] hover:text-[#c5a75c] sm:text-sm"
          >
            Enquire
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;