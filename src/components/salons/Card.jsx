
import React from "react";
import SalonDetails from "./SalonDetails";
import SalonContact from "./SalonContact";
import Image from "./Image";

const Card = ({ salon, index }) => {
  const reverse = index % 2 !== 0;

  return (
    <article className="rounded-md border border-[#1f1f20] bg-[#0d0d0e] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-5">
      <div
        className={`
          grid items-center gap-6 lg:grid-cols-2 lg:gap-10
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* IMAGE */}
        <Image salon={salon} />

        {/* DETAILS */}
        <div>
          <SalonDetails salon={salon} />
          <SalonContact salon={salon} />
        </div>
      </div>
    </article>
  );
};

export default Card;
