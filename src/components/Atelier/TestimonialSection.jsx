
import React from "react";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="w-full overflow-hidden bg-[#111112] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
        <div className="mx-auto w-full max-w-[900px] border border-[#282725] bg-[#181819] px-4 py-8 text-center min-[400px]:px-5 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16">
          {/* Rating Stars */}
          <div
            className="mb-5 flex items-center justify-center gap-1 text-[#c7a34f] sm:mb-6 sm:gap-1.5"
            aria-label="5 out of 5 stars"
            role="img"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                fill="currentColor"
                strokeWidth={1.5}
                className="shrink-0 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Testimonial */}
          <blockquote className="mx-auto max-w-[760px] break-words font-serif text-base italic leading-7 text-[#ddd6ca] min-[400px]:text-lg sm:text-xl sm:leading-8 md:text-2xl md:leading-9 lg:text-[28px] lg:leading-[1.65] xl:text-3xl">
            “Commissioning the Celeste N° 02 was an intimate journey into
            mechanical mastery. Maison Elysée's artisans achieved what I
            thought was impossible.”
          </blockquote>

          {/* Client Details */}
          <div className="mt-6 sm:mt-7 md:mt-8">
            <div className="mx-auto mb-4 h-px w-10 bg-[#806b3e] sm:mb-5 sm:w-12" />

            <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#b59551] min-[400px]:text-xs sm:text-sm sm:tracking-[2px]">
              Private Client · Geneva
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
