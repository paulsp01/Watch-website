import React from "react";
import { MapPin, Mail } from "lucide-react";

const PrivateAudienceSection = () => {
  return (
    <section className="bg-[#0d0d0e] py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[2px] text-[#b59551] sm:text-sm">
            A Private Invitation
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight text-[#e5e1dc] sm:text-4xl lg:text-5xl">
            Request Private
            <br />
            Audience
          </h2>

          <p className="mt-7 max-w-[450px] text-base leading-7 text-[#807d77]">
            An invitation to experience our collections, private salons,
            exceptional timepieces and bespoke creations in an intimate
            setting.
          </p>

          <div className="mt-8 space-y-4">
            <InfoItem
              icon={<MapPin size={16} />}
              text="Geneva · Paris · London"
            />

            <InfoItem
              icon={<Mail size={16} />}
              text="Private consultations available"
            />
          </div>
        </div>

        {/* Form */}
        <ConciergeForm />
      </div>
    </section>
  );
};

const InfoItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#51452e] text-[#b59551]">
        {icon}
      </span>

      <span className="font-mono text-xs leading-5 uppercase tracking-[0.5px] text-[#88837a] sm:text-sm sm:tracking-[1px]">
        {text}
      </span>
    </div>
  );
};

const ConciergeForm = () => {
  return (
    <div className="border border-[#292827] bg-[#181819] p-5 sm:p-9">
      <div className="mb-7 flex flex-wrap justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[1.5px] text-[#b59551] sm:text-sm">
            Fill the form below
          </p>

          <h3 className="mt-2 font-serif text-2xl text-[#e5e1dc]">
            Concierge Enquiry
          </h3>
        </div>

        <div className="text-right font-mono text-xs leading-5 uppercase tracking-[1px] text-[#88837a] sm:text-sm">
          Confidential
          <br />
          & Discreet
        </div>
      </div>

      <form className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <InputField label="First Name" />
          <InputField label="Last Name" />
        </div>

        <InputField label="Email Address" type="email" />
        <InputField label="Country / Region" />

        <div>
          <label className="font-mono text-xs uppercase tracking-[1px] text-[#77736c] sm:text-sm">
            Tell us about your interest
          </label>

          <textarea
            rows={3}
            className="mt-2 w-full resize-none border-b border-[#393631] bg-transparent py-2 text-base leading-6 text-[#e5e1dc] outline-none focus:border-[#b59551]"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 shrink-0 accent-[#c6a45c]"
          />

          <p className="text-sm leading-6 text-[#88837a]">
            I agree to be contacted privately regarding Maison Elysée
            collections and services.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#d1ac53] px-3 py-3 font-mono text-xs uppercase tracking-[1px] text-black transition hover:bg-[#e1bf6a] sm:text-sm sm:tracking-[1.5px]"
        >
          Request Private Audience
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, type = "text" }) => {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-[1px] text-[#77736c] sm:text-sm">
        {label}
      </label>

      <input
        type={type}
        className="mt-2 w-full border-b border-[#393631] bg-transparent py-2 text-base text-[#e5e1dc] outline-none focus:border-[#b59551]"
      />
    </div>
  );
};

export default PrivateAudienceSection;