import { useDispatch, useSelector } from "react-redux";
import { Heart, X, Trash2 } from "lucide-react";
import { removeFromWishlist, clearWishlist } from "../../redux/slices/wishlistSlice";
import { useGlobalUI } from "../../context/GlobalUIContext";

const WishlistDrawer = () => {
  const { activePanel, closePanel, openInquiry } = useGlobalUI();
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (activePanel !== "wishlist") return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePanel();
      }}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="wishlist-title"
        className="ml-auto flex h-full w-full max-w-md flex-col border-l border-[#39342a] bg-[#111110] text-[#e8e2d8]"
      >
        <div className="flex items-center justify-between border-b border-[#292725] p-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d7ad38]">
              Saved creations
            </p>
            <h2 id="wishlist-title" className="mt-1 font-serif text-2xl">
              Wishlist ({items.length})
            </h2>
          </div>
          <button onClick={closePanel} aria-label="Close wishlist" className="text-[#aaa39a] hover:text-white">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
            <Heart size={30} className="text-[#9e824c]" />
            <p className="mt-4 font-serif text-xl">No saved creations yet</p>
            <p className="mt-2 text-sm leading-6 text-[#89847d]">
              Use the heart on a creation to keep it here for your visit.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {items.map((item) => (
                <article key={item.id} className="flex gap-4 border border-[#292725] p-3">
                  <img src={item.image} alt={item.title} className="h-24 w-20 shrink-0 object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#b5944e]">{item.category}</p>
                    <h3 className="mt-1 font-serif text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm text-[#aaa39a]">{item.price}</p>
                    <button
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                      className="mt-3 inline-flex items-center gap-2 text-xs text-[#aaa39a] hover:text-[#d7ad38]"
                    >
                      <Trash2 size={13} /> Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="space-y-3 border-t border-[#292725] p-5">
              <button
                onClick={() => openInquiry(`Wishlist consultation (${items.length} saved creations)`)}
                className="w-full bg-[#d7ad38] px-4 py-3 text-xs uppercase tracking-widest text-black"
              >
                Enquire about saved creations
              </button>
              <button
                onClick={() => dispatch(clearWishlist())}
                className="w-full border border-[#39342a] px-4 py-3 text-xs uppercase tracking-widest text-[#aaa39a] hover:text-white"
              >
                Clear wishlist
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default WishlistDrawer;
