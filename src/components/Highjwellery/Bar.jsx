import React from "react";
import { Gem, Diamond } from "lucide-react";

const Bar = () => {
  return (
    <div className="my-12 flex flex-col justify-between gap-6 bg-[#272523da] px-5 py-6 text-white sm:px-8 lg:my-15 lg:flex-row lg:items-center lg:px-10">
      <div className="flex items-center gap-3">
        <Gem size={28} color="#9E824C" />

        <div>
          <h1 className="text-base font-medium sm:text-lg">
            Lorem ipsum dolor sit
          </h1>
          <p className="mt-1 text-sm leading-6 text-[#9E824C]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-[#ddd8d0] lg:gap-x-8">
        <li className="flex items-center gap-2">
          <Diamond size={14} color="#9E824C" />
          Lorem ipsum dolor
        </li>
        <li className="flex items-center gap-2">
          <Diamond size={14} color="#9E824C" />
          Lorem, ipsum dolor.
        </li>
        <li className="flex items-center gap-2">
          <Diamond size={14} color="#9E824C" />
          Lorem, ipsum dolor.
        </li>
      </ul>
    </div>
  );
};

export default Bar;