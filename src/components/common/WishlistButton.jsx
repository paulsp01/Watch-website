import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../redux/slices/wishlistSlice";

const WishlistButton = ({ product, className = "" }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wishlist.items);

  // Prefix IDs so products from different pages cannot accidentally collide.
  const id = product.wishlistId ?? product.id;
  const isSaved = items.some((item) => item.id === id);

  const handleToggle = () => {
    dispatch(
      toggleWishlist({
        id,
        title: product.title,
        image: product.image,
        price: product.price ?? "",
        category: product.category ?? product.tag ?? "Maison Élysée",
      })
    );
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={isSaved}
      aria-label={isSaved ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
      title={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      className={className}
    >
      <Heart
        size={17}
        className={isSaved ? "fill-[#d7ad38] text-[#d7ad38]" : "text-current"}
      />
    </button>
  );
};

export default WishlistButton;
