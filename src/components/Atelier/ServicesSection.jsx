import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "./atelierData";

const ServicesSection = () => {
  return (
    <section className="bg-[#0d0d0e] py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="font-mono text-xs uppercase tracking-[2px] text-[#b59551] sm:text-sm">
            The Pursuit of Distinction
          </p>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-[#e5e1dc] sm:text-4xl">
            Bespoke Atelier Services
          </h2>

          <p className="mt-4 text-base leading-7 text-[#77746f]">
            Considered experiences created for exceptional collectors,
            connoisseurs and those seeking something truly singular.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
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
    <div className="border border-[#292827] bg-[#181819] p-6 transition hover:border-[#806b3e] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-[#b59551]">
          {service.number}
        </span>

        <ArrowUpRight size={18} className="text-[#74623d]" />
      </div>

      <h3 className="mt-10 font-serif text-2xl leading-snug text-[#e5e1dc]">
        {service.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-[#8d8881]">
        {service.text}
      </p>

      <button
        type="button"
        className="mt-8 font-mono text-xs uppercase tracking-[1px] text-[#b59551] transition hover:text-[#e0bd68] sm:text-sm"
      >
        Discover service →
      </button>
    </div>
  );
};

export default ServicesSection;