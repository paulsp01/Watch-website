
import { useState } from "react";
import { Search, User, Heart, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const { openInquiry, openWishlist } = useGlobalUI();

  const wishlistCount = useSelector(
    (state) => state.wishlist.items.length
  );

  const linkClass = ({ isActive }) =>
    `block py-2 transition-colors duration-300 hover:text-[#d7ad38] ${
      isActive ? "text-[#d7ad38]" : "text-[#ddd8d0]"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 w-full border-b border-[#9E824C]/50 bg-[#171614] text-white">
      <div className="mx-auto flex w-full max-w-[1800px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:flex-nowrap lg:gap-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Maison Élysée home"
          onClick={closeMenu}
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          <img
            src="/screen.png"
            alt=""
            className="h-5 w-8 shrink-0 object-contain sm:h-6 sm:w-10"
          />

          <span className="flex min-w-0 flex-col">
            <span className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[1px] min-[375px]:text-base min-[375px]:tracking-[1.5px] sm:text-xl sm:tracking-[2px] xl:text-2xl">
              Maison Élysée
            </span>

            <span className="mt-1 whitespace-nowrap font-mono text-[7px] font-medium capitalize tracking-[1px] min-[375px]:text-[8px] min-[375px]:tracking-[1.5px] sm:text-[10px] sm:tracking-[2px] text-[#9E824C]">
              Haute horlogerie · Genève
            </span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 lg:block"
        >
          <ul className="flex items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[1.2px] xl:gap-6 xl:text-xs xl:tracking-[1.5px] 2xl:gap-8">
            {navigation.map((item) => (
              <li key={item.path} className="shrink-0">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={linkClass}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <button
            type="button"
            onClick={() => openInquiry("General enquiry")}
            className="hidden border border-[#9E824C] px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition hover:bg-[#d7ad38] hover:text-black sm:inline-flex sm:px-4 sm:text-xs"
          >
            Inquire
          </button>

          <button
            type="button"
            onClick={openWishlist}
            aria-label={`Open wishlist, ${wishlistCount} saved`}
            className="relative rounded-full p-2 text-[#d7ad38] transition hover:bg-white/10"
          >
            <Heart size={18} />

            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#d7ad38] px-1 text-[10px] font-medium text-black">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => openInquiry("Personal consultation")}
            aria-label="Request personal consultation"
            className="rounded-full bg-[#D4AF37] p-2 text-black transition hover:bg-[#e8c65a]"
          >
            <User size={17} />
          </button>

          <button
            type="button"
            onClick={() => openInquiry("Help finding a creation")}
            aria-label="Search and enquire"
            className="rounded-full p-2 text-[#ddd8d0] transition hover:bg-white/10 hover:text-[#d7ad38]"
          >
            <Search size={18} />
          </button>

          {/* Mobile / Tablet Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-full p-2 text-[#d7ad38] transition hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile / Tablet Navigation */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="basis-full border-t border-[#9E824C]/30 pt-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[1.5px] sm:text-sm">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeMenu}
                    className={linkClass}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                openInquiry("General enquiry");
              }}
              className="mt-4 w-full border border-[#9E824C] px-4 py-3 font-mono text-xs uppercase tracking-[1.5px] transition hover:bg-[#d7ad38] hover:text-black sm:hidden"
            >
              Inquire
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;