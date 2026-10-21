import React from "react";

const Dossier = () => {
  return (
    <section className="border-t border-[#242324] bg-[#121213] px-5 py-16 lg:px-10 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1100px] rounded-lg border border-[#292725] bg-gradient-to-br from-[#1b1b1c] via-[#151516] to-[#24231f] px-6 py-12 text-center sm:px-10 lg:px-20 lg:py-16">
        <p className="text-xs tracking-[0.3em] text-[#9E824C] sm:text-sm">
          PRIVATE SALON ACCESS
        </p>

        <h2 className="mt-3 font-serif text-3xl leading-tight text-[#ded9d2] sm:text-4xl">
          Request Confidential Dossier &
          <br />
          Viewing
        </h2>

        <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-[#858078]">
          Due to strict annual production limits of 48 examples, viewings of
          the Tourbillon Céleste and Master Complications are reserved for
          verified collectors and patrons.
        </p>

        <form className="mx-auto mt-10 max-w-[760px] text-left">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-xs tracking-[0.15em] text-[#8b857e] sm:text-sm">
                PATRON NAME
              </label>

              <input
                type="text"
                placeholder="Ex. Lord Julian Vance"
                className="mt-2 w-full border-b border-[#35332f] bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-[#615d57] focus:border-[#d7ad38]"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.15em] text-[#8b857e] sm:text-sm">
                SECURE CORRESPONDENCE (EMAIL / SIGNAL)
              </label>

              <input
                type="email"
                placeholder="protocol@maison.ch"
                className="mt-2 w-full border-b border-[#35332f] bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-[#615d57] focus:border-[#d7ad38]"
              />
            </div>

            <div>
              <label className="text-xs tracking-[0.15em] text-[#8b857e] sm:text-sm">
                PREFERRED COMPLICATION FOCUS
              </label>

              <select
                defaultValue="Tourbillon Céleste (Calibre ME-880)"
                className="mt-2 w-full border-b border-[#35332f] bg-[#151516] py-3 text-sm text-[#b8b3ac] outline-none focus:border-[#d7ad38]"
              >
                <option>Tourbillon Céleste (Calibre ME-880)</option>
                <option>Master Complications</option>
                <option>Minute Repeater</option>
              </select>
            </div>

            <div>
              <label className="text-xs tracking-[0.15em] text-[#8b857e] sm:text-sm">
                SALON LOCATION
              </label>

              <select
                defaultValue="Genève — 40, Rue du Rhône"
                className="mt-2 w-full border-b border-[#35332f] bg-[#151516] py-3 text-sm text-[#b8b3ac] outline-none focus:border-[#d7ad38]"
              >
                <option>Genève — 40, Rue du Rhône</option>
                <option>Paris — Place Vendôme</option>
                <option>London — New Bond Street</option>
              </select>
            </div>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-[#77716a]">
            <input
              type="checkbox"
              className="mt-1 shrink-0 accent-[#d7ad38]"
            />
            <span>
              I understand that dossier allocation is governed by verified
              provenance screening and private salon protocols.
            </span>
          </label>

          <div className="text-center">
            <button
              type="submit"
              className="mt-7 bg-[#d7ad38] px-6 py-3 text-xs font-medium tracking-[0.15em] text-black transition hover:bg-[#edc64c] sm:px-10 sm:text-sm"
            >
              DISPATCH PRIVATE DOSSIER REQUEST
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Dossier;