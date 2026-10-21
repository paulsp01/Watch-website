
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "./atelierData";

const ServicesSection = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0d0d0e] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20">
        {/* Section Heading */}
        <div className="mx-auto w-full max-w-[650px] text-center">
          <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#b59551] sm:text-xs sm:tracking-[2px] md:text-sm">
            The Pursuit of Distinction
          </p>

          <h2 className="mt-3 font-serif text-2xl leading-tight text-[#e5e1dc] min-[400px]:text-3xl sm:mt-4 sm:text-4xl md:text-5xl lg:text-[42px] xl:text-5xl">
            Bespoke Atelier Services
          </h2>

          <p className="mx-auto mt-3 max-w-[540px] text-sm leading-6 text-[#77746f] sm:mt-4 sm:text-base sm:leading-7 md:text-[17px]">
            Considered experiences created for exceptional collectors,
            connoisseurs and those seeking something truly singular.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mt-10 sm:gap-5 md:mt-12 lg:grid-cols-3 lg:gap-6 xl:gap-7">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <article className="group flex h-full min-w-0 flex-col border border-[#292827] bg-[#181819] p-5 transition-colors duration-300 hover:border-[#806b3e] sm:p-6 md:p-7 lg:p-6 xl:p-8 2xl:p-9">
      {/* Number and Icon */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-[#b59551] sm:text-sm">
          {service.number}
        </span>

        <ArrowUpRight
          size={18}
          strokeWidth={1.5}
          className="shrink-0 text-[#74623d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-5 sm:w-5"
          aria-hidden="true"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="mt-7 break-words font-serif text-xl leading-snug text-[#e5e1dc] sm:mt-8 sm:text-2xl md:mt-10">
          {service.title}
        </h3>

        <p className="mt-3 flex-1 break-words text-sm leading-6 text-[#8d8881] sm:mt-4 sm:text-base sm:leading-7">
          {service.text}
        </p>

        {/* Action */}
        <button
          type="button"
          className="mt-6 inline-flex w-fit max-w-full items-center gap-2 text-left font-mono text-[10px] uppercase tracking-[1px] text-[#b59551] transition-colors duration-300 hover:text-[#e0bd68] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b59551] focus-visible:ring-offset-4 focus-visible:ring-offset-[#181819] sm:mt-8 sm:text-xs md:text-sm"
        >
          <span>Discover service</span>
          <ArrowUpRight
            size={14}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
};

export default ServicesSection;
