import React from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#292725] bg-[#0d0d0e] px-5 py-12 lg:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-xl tracking-[0.15em] text-[#ddd8d0]">
            MAISON ÉLYSÉE
          </h3>

          <p className="mt-2 text-xs tracking-[0.2em] text-[#9E824C]">
            MANUFACTURE D'EXCEPTION • GENÈVE
          </p>

          <p className="mt-5 max-w-[300px] text-sm leading-7 text-[#77736d]">
            Custodian of horological complications and bespoke high jewelry
            since 1928. Each caliber is conceived, hand-bereled, assembled in
            accordance with the exacting standards of the Poinçon de Genève.
          </p>

          <div className="mt-5 flex items-center gap-2 text-xs leading-5 tracking-[0.12em] text-[#d7ad38]">
            <ShieldCheck size={16} />
            <span>POINÇON DE GENÈVE CERTIFIED</span>
          </div>
        </div>

        {/* Private Salons */}
        <div>
          <h4 className="text-sm tracking-[0.2em] text-[#d7ad38]">
            PRIVATE SALONS
          </h4>

          <div className="mt-5 space-y-5 text-sm leading-6 text-[#77736d]">
            <p>
              Genève
              <br />
              40, Rue du Rhône
              <br />
              +41 22 819 00 00
            </p>

            <p>
              Paris
              <br />
              12, Place Vendôme
              <br />
              +33 1 42 68 00 00
            </p>

            <p>
              London
              <br />
              14, New Bond Street
              <br />
              +44 20 7946 0000
            </p>
          </div>
        </div>

        {/* Protocols */}
        <div>
          <h4 className="text-sm tracking-[0.2em] text-[#d7ad38]">
            PROTOCOLS
          </h4>

          <div className="mt-5 space-y-4 text-sm leading-6 text-[#77736d]">
            <p>Tourbillon Commission</p>
            <p>Provenance & Registry</p>
            <p>Restoration Atelier</p>
            <p>Master Complications Dossier</p>
            <p>Private Viewings</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm tracking-[0.2em] text-[#d7ad38]">
            NEWSLETTER
          </h4>

          <p className="mt-5 text-sm leading-7 text-[#77736d]">
            Receive confidential briefings regarding unique piece allocations
            and viewings.
          </p>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-between border-b border-[#33312e] pb-3 text-sm text-[#bbb6ae] transition-colors duration-300 hover:text-[#d7ad38]"
          >
            Your email protocol
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 flex max-w-[1500px] flex-col justify-between gap-4 border-t border-[#222123] pt-5 text-xs leading-6 tracking-[0.1em] text-[#5e5a55] md:flex-row md:items-center">
        <span>© 1892–2025 MAISON ÉLYSÉE. ALL RIGHTS RESERVED.</span>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <span>TERMS OF PROVENANCE</span>
          <span>CONFIDENTIALITY PROTOCOL</span>
          <span>LEGAL REGISTER</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;