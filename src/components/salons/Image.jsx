
import React from "react";

const Image = ({ salon }) => {
  return (
    <div>
      {/* Main Image */}
      <div className="relative overflow-hidden">
        <img
          src={salon.image}
          alt={salon.title}
          className="h-[280px] w-full object-cover sm:h-[350px]"
        />

        {/* Tag */}
        <div className="absolute left-3 top-3 rounded-full border border-[#77705e]/50 bg-[#121212]/90 px-3 py-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#c3a052] sm:text-sm">
            {salon.tag}
          </span>
        </div>

        {/* Location */}
        <div className="absolute bottom-3 left-3">
          <div className="rounded bg-[#101010]/90 px-3 py-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#a59e92] sm:text-sm">
              {salon.location}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 grid grid-cols-4 gap-2">
        {salon.thumbnails.map((thumb, index) => (
          <div
            key={thumb}
            className="h-[65px] overflow-hidden sm:h-[75px]"
          >
            <img
              src={thumb}
              alt={`${salon.title} ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Map */}
        <div className="relative col-span-4 h-[65px] overflow-hidden sm:col-span-4">
          <img
            src={salon.map}
            alt={`${salon.title} location`}
            className="h-full w-full object-cover opacity-70"
          />

          <span className="absolute inset-0 flex items-center justify-center bg-black/30 font-mono text-xs uppercase tracking-wider text-white sm:text-sm">
            Live Exclusive
          </span>
        </div>
      </div>
    </div>
  );
};

export default Image;
