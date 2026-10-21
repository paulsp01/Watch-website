
import React from "react";
import { MapPin, Mail } from "lucide-react";

const PrivateAudienceSection = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0d0d0e] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 xl:gap-20 xl:px-14 2xl:gap-24 2xl:px-20">

        {/* Left Content */}
        <div className="flex min-w-0 flex-col justify-center">
          <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#b59551] min-[400px]:text-xs min-[400px]:tracking-[2px] sm:text-sm">
            A Private Invitation
          </p>

          <h2 className="mt-3 font-serif text-[clamp(1.9rem,4vw,3.5rem)] leading-[1.12] tracking-[-0.5px] text-[#e5e1dc] sm:mt-4 sm:leading-tight lg:tracking-[-1px]">
            Request Private
            <br />
            Audience
          </h2>

          <p className="mt-5 max-w-[480px] text-sm leading-7 text-[#807d77] sm:mt-7 sm:text-base sm:leading-8">
            An invitation to experience our collections, private salons,
            exceptional timepieces and bespoke creations in an intimate
            setting.
          </p>

          {/* Contact Information */}
          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
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
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#51452e] text-[#b59551] sm:h-9 sm:w-9">
        {icon}
      </span>

      <span className="min-w-0 break-words font-mono text-[10px] uppercase leading-5 tracking-[0.4px] text-[#88837a] min-[400px]:text-xs min-[400px]:tracking-[0.5px] sm:text-sm sm:tracking-[1px]">
        {text}
      </span>
    </div>
  );
};

const ConciergeForm = () => {
  return (
    <div className="w-full min-w-0 border border-[#292827] bg-[#181819] p-4 sm:p-6 md:p-8 lg:p-6 xl:p-9 2xl:p-10">

      {/* Form Heading */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3 sm:mb-8 sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[1.2px] text-[#b59551] min-[400px]:text-xs min-[400px]:tracking-[1.5px] sm:text-sm">
            Fill the form below
          </p>

          <h3 className="mt-2 font-serif text-xl leading-snug text-[#e5e1dc] sm:text-2xl md:text-3xl">
            Concierge Enquiry
          </h3>
        </div>

        <div className="shrink-0 text-right font-mono text-[9px] uppercase leading-5 tracking-[0.7px] text-[#88837a] min-[400px]:text-[10px] sm:text-xs sm:tracking-[1px]">
          Confidential
          <br />
          &amp; Discreet
        </div>
      </div>

      {/* Form Fields */}
      <form className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-1 xl:grid-cols-2">
          <InputField
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            required
          />

          <InputField
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            required
          />
        </div>

        <InputField
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />

        <InputField
          label="Country / Region"
          name="country"
          autoComplete="country-name"
          required
        />

        {/* Message */}
        <div className="min-w-0">
          <label
            htmlFor="interest"
            className="font-mono text-[10px] uppercase tracking-[0.8px] text-[#77736c] sm:text-xs sm:tracking-[1px]"
          >
            Tell us about your interest
          </label>

          <textarea
            id="interest"
            name="interest"
            rows={4}
            placeholder="Share your interests with our concierge..."
            className="mt-2 block min-h-[100px] w-full max-w-full resize-y border-b border-[#393631] bg-transparent px-0 py-3 text-base leading-6 text-[#e5e1dc] outline-none placeholder:text-[#625e57] focus:border-[#b59551] sm:min-h-[110px]"
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            id="contactConsent"
            name="contactConsent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#c6a45c]"
          />

          <label
            htmlFor="contactConsent"
            className="min-w-0 cursor-pointer text-xs leading-6 text-[#88837a] sm:text-sm"
          >
            I agree to be contacted privately regarding Maison Elysée
            collections and services.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex min-h-12 w-full items-center justify-center px-3 py-3 text-center font-mono text-[10px] uppercase tracking-[0.7px] text-black transition-colors duration-300 hover:bg-[#e1bf6a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6a45c] bg-[#d1ac53] min-[400px]:text-xs min-[400px]:tracking-[1px] sm:text-sm sm:tracking-[1.5px]"
        >
          Request Private Audience
        </button>
      </form>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  autoComplete,
  required = false,
}) => {
  const id = `concierge-${name}`;

  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.8px] text-[#77736c] sm:text-xs sm:tracking-[1px]"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 block min-h-10 w-full min-w-0 border-b border-[#393631] bg-transparent px-0 py-2 text-base text-[#e5e1dc] outline-none transition-colors placeholder:text-[#625e57] focus:border-[#b59551]"
      />
    </div>
  );
};

export default PrivateAudienceSection;
