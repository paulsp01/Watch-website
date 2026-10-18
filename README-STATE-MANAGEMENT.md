# Maison Élysée — component and state-management plan

## Install and run

```bash
npm install
npm run dev
```

The project uses React + Vite + React Router + Tailwind CSS. Redux Toolkit and React Redux are dependencies in `package.json`. Run `npm install` after replacing the project files so `package-lock.json` is synchronized.

## Component reuse decisions

### Shared application shell
- `components/Layout.jsx`: shared Header, routed page (`Outlet`), and Footer.
- `components/Header.jsx`: common navigation and global actions.
- `components/Footer.jsx`: common footer.
- `components/PageContainer.jsx`: lightweight page wrapper; currently used by Salons.
- `components/common/InquiryModal.jsx`: one enquiry modal opened from Header or product cards.
- `components/common/WishlistButton.jsx`: same wishlist control used by Atelier and High Jewellery product cards.
- `components/common/WishlistDrawer.jsx`: shared wishlist panel, reads items from Redux.

### Keep page-specific
Keep the five page heroes separate: Atelier, Complication, Heritage, High Jewellery, and Salons have different layouts/content. Keep Atelier and High Jewellery product cards separate too: their content shape and visual layout are different. Salon `Card`, `SalonDetails`, `SalonContact`, `Image`, and `AudienceCard` are intentionally salon-specific.

### Data files
- `components/Atelier/atelierData.js`: Atelier product and service data.
- `components/salons/data/salondata.js`: salon and audience-step data.
- `components/Highjwellery/data/products.js`: High Jewellery product data extracted from `Heading.jsx`.

## Context API: global UI panel state

`context/GlobalUIContext.jsx` manages which global panel is open (`inquiry`, `wishlist`, or none) and the subject of an enquiry. This is UI state shared by Header and product cards. It is not duplicated in Redux.

`main.jsx` wraps the app in `GlobalUIProvider` and renders the global modal/drawer once, so there is only one copy of each overlay across routes.

## Redux Toolkit: wishlist data

- `redux/store.js` configures the store and saves wishlist items to `localStorage`.
- `redux/slices/wishlistSlice.js` has toggle, remove, and clear actions.
- `WishlistButton.jsx` uses `useDispatch` to update the wishlist and `useSelector` to show the current saved state.
- `Header.jsx` displays the saved-item count.
- `WishlistDrawer.jsx` lists saved creations and lets the user remove or clear them.

Wishlist IDs are prefixed by collection (`atelier-...` / `high-jewellery-...`) to avoid collisions between collections.

## Important notes

1. The enquiry form currently demonstrates UI state only. It does not send emails or store submissions on a server. Connect an API or form service to make it live.
2. The wishlist is browser-local via `localStorage`; it is not synced between devices or users.
3. The existing `pages/Inquiry.jsx` file is empty and is not registered as a route in `App.jsx`. The global enquiry modal works independently, so the empty page is not required for this implementation.
4. `npm run build` could not be completed in the analysis environment because the uploaded `node_modules` lacked Vite/Rolldown's platform-specific native binding. All 56 source JS/JSX files passed a syntax parse. On your computer, run `npm install` and then `npm run build`.
