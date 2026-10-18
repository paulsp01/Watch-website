import { Search, User, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGlobalUI } from "../context/GlobalUIContext";

const navigation = [
  { name: "atelier", path: "/" },
  { name: "complication", path: "/complications" },
  { name: "high jewellery", path: "/high-jwellery" },
  { name: "heritage", path: "/heritage" },
  { name: "salons", path: "/salons" },
];

const Header = () => {
  const { openInquiry, openWishlist } = useGlobalUI();
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  return (
    <header className="relative z-20 flex flex-wrap items-center justify-center gap-4 border-b border-[#9E824C]/50 px-4 py-4 text-white lg:gap-5 lg:px-8">
      <NavLink to="/" aria-label="Maison Élysée home" className="flex items-center gap-3">
        <img src="/screen.png" alt="" className="h-4 w-15 object-contain" />
        <span className="flex flex-col">
          <span className="text-xl font-medium uppercase tracking-[2px] sm:text-[25px]">Maison Élysée</span>
          <span className="font-mono text-[10px] font-medium capitalize tracking-[2px] text-[#9E824C] sm:text-xs">
            Haute horlogerie · Genève
          </span>
        </span>
      </NavLink>

      <nav aria-label="Main navigation">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-mono text-[10px] uppercase tracking-[1.5px] sm:gap-6 sm:text-xs">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `transition hover:text-[#d7ad38] ${isActive ? "text-[#d7ad38]" : "text-[#ddd8d0]"}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => openInquiry("General enquiry")}
          className="border border-[#9E824C] px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition hover:bg-[#d7ad38] hover:text-black sm:px-4 sm:text-xs"
        >
          Inquire
        </button>
        <button type="button" onClick={openWishlist} aria-label={`Open wishlist, ${wishlistCount} saved`} className="relative p-2 text-[#d7ad38]">
          <Heart size={18} />
          {wishlistCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#d7ad38] px-1 text-[10px] text-black">
              {wishlistCount}
            </span>
          )}
        </button>
        <button type="button" onClick={() => openInquiry("Personal consultation")} aria-label="Request personal consultation" className="rounded-full bg-[#D4AF37] p-2 text-black">
          <User size={16} />
        </button>
        <button type="button" onClick={() => openInquiry("Help finding a creation")} aria-label="Search and enquire" className="p-1 text-[#ddd8d0] hover:text-[#d7ad38]">
          <Search size={16} />
        </button>
      </div>
    </header>
  );
};

export default Header;
