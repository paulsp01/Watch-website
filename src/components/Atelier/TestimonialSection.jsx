import React from "react";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-[#111112] py-20 sm:py-24">
      <div className="mx-auto max-w-[800px] px-5">
        <div className="border border-[#282725] bg-[#181819] px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mb-5 flex justify-center gap-1 text-[#c7a34f]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} fill="currentColor" />
            ))}
          </div>

          <blockquote className="font-serif text-xl italic leading-8 text-[#ddd6ca] sm:text-2xl sm:leading-9">
            "Commissioning the Celeste N° 02 was an intimate journey into
            mechanical mastery. Maison Elysée's artisans achieved what I
            thought was impossible."
          </blockquote>

          <p className="mt-7 font-mono text-xs uppercase tracking-[1.5px] text-[#b59551] sm:text-sm">
            Private Client · Geneva
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;