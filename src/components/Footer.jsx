
import React from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden border-t border-[#292725] bg-[#0d0d0e] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16 xl:px-14 2xl:px-20">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-8 xl:gap-12">

        {/* Brand */}
        <div className="min-w-0">
          <h3 className="font-serif text-lg tracking-[0.12em] text-[#ddd8d0] sm:text-xl sm:tracking-[0.15em]">
            MAISON ÉLYSÉE
          </h3>

          <p className="mt-2 break-words text-[10px] tracking-[0.15em] text-[#9E824C] sm:text-xs sm:tracking-[0.2em]">
            MANUFACTURE D'EXCEPTION • GENÈVE
          </p>

          <p className="mt-4 max-w-full text-sm leading-7 text-[#77736d] sm:mt-5 sm:max-w-[300px]">
            Custodian of horological complications and bespoke high jewelry
            since 1928. Each caliber is conceived, hand-bereled, assembled in
            accordance with the exacting standards of the Poinçon de Genève.
          </p>

          <div className="mt-5 flex items-start gap-2 text-[10px] leading-5 tracking-[0.08em] text-[#d7ad38] sm:text-xs sm:tracking-[0.12em]">
            <ShieldCheck size={16} className="mt-0.5 shrink-0" />
            <span>POINÇON DE GENÈVE CERTIFIED</span>
          </div>
        </div>

        {/* Private Salons */}
        <div className="min-w-0">
          <h4 className="text-xs tracking-[0.18em] text-[#d7ad38] sm:text-sm sm:tracking-[0.2em]">
            PRIVATE SALONS
          </h4>

          <div className="mt-4 space-y-5 text-sm leading-6 text-[#77736d] sm:mt-5">
            <p>
              Genève
              <br />
              40, Rue du Rhône
              <br />
              <a
                href="tel:+41228190000"
                className="transition-colors hover:text-[#d7ad38]"
              >
                +41 22 819 00 00
              </a>
            </p>

            <p>
              Paris
              <br />
              12, Place Vendôme
              <br />
              <a
                href="tel:+33142680000"
                className="transition-colors hover:text-[#d7ad38]"
              >
                +33 1 42 68 00 00
              </a>
            </p>

            <p>
              London
              <br />
              14, New Bond Street
              <br />
              <a
                href="tel:+442079460000"
                className="transition-colors hover:text-[#d7ad38]"
              >
                +44 20 7946 0000
              </a>
            </p>
          </div>
        </div>

        {/* Protocols */}
        <div className="min-w-0">
          <h4 className="text-xs tracking-[0.18em] text-[#d7ad38] sm:text-sm sm:tracking-[0.2em]">
            PROTOCOLS
          </h4>

          <div className="mt-4 space-y-4 text-sm leading-6 text-[#77736d] sm:mt-5">
            <p className="break-words">Tourbillon Commission</p>
            <p className="break-words">Provenance &amp; Registry</p>
            <p className="break-words">Restoration Atelier</p>
            <p className="break-words">Master Complications Dossier</p>
            <p className="break-words">Private Viewings</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="min-w-0">
          <h4 className="text-xs tracking-[0.18em] text-[#d7ad38] sm:text-sm sm:tracking-[0.2em]">
            NEWSLETTER
          </h4>

          <p className="mt-4 text-sm leading-7 text-[#77736d] sm:mt-5">
            Receive confidential briefings regarding unique piece allocations
            and viewings.
          </p>

          <button
            type="button"
            className="mt-5 flex w-full min-w-0 items-center justify-between gap-3 border-b border-[#33312e] pb-3 text-left text-sm text-[#bbb6ae] transition-colors duration-300 hover:text-[#d7ad38]"
          >
            <span>Your email protocol</span>
            <ArrowUpRight size={16} className="shrink-0" />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-9 flex w-full max-w-[1500px] flex-col gap-4 border-t border-[#222123] pt-5 text-[10px] leading-6 tracking-[0.08em] text-[#5e5a55] sm:mt-12 sm:text-xs sm:tracking-[0.1em] lg:mt-14">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 1892–2025 MAISON ÉLYSÉE. ALL RIGHTS RESERVED.
          </span>

          <span className="text-[#9E824C]">
            HAUTE HORLOGERIE · GENÈVE
          </span>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 sm:gap-x-5">
          <span className="cursor-pointer transition-colors hover:text-[#d7ad38]">
            TERMS OF PROVENANCE
          </span>

          <span className="cursor-pointer transition-colors hover:text-[#d7ad38]">
            CONFIDENTIALITY PROTOCOL
          </span>

          <span className="cursor-pointer transition-colors hover:text-[#d7ad38]">
            LEGAL REGISTER
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
