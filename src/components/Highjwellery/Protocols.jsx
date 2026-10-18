import React from "react";
import { MapPinCheckInside } from "lucide-react";

const Protocols = () => {
  const protocols = [
    {
      title: "Lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nobis fugiat harum reprehenderit debitis libero laborum nostrum quasi tempora quidem.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nobis fugiat harum reprehenderit debitis libero laborum nostrum quasi tempora quidem.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nobis fugiat harum reprehenderit debitis libero laborum nostrum quasi tempora quidem.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 bg-[#23211E] px-5 py-12 sm:px-8 lg:flex-row lg:gap-12 lg:px-10 lg:py-16">
      {/* Protocol Content */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <p className="text-xs uppercase tracking-[0.18em] text-[#D4AF37] sm:text-sm">
          Protocols of Traceability
        </p>

        <h2 className="font-serif text-3xl capitalize leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          Sovereignty in provenance &amp; pure lapidary ethics
        </h2>

        <p className="text-base leading-7 text-[#d0b06f]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellendus ea sapiente modi nisi vitae repudiandae debitis, esse
          fugiat voluptatem placeat a possimus, similique magni doloribus
          cupiditate tempora dolorum quaerat.
        </p>

        <div className="flex flex-col gap-4">
          {protocols.map((protocol, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-md bg-[#3a3a3a] p-5 sm:p-6"
            >
              <MapPinCheckInside
                size={24}
                className="mt-1 shrink-0 text-[#d0b06f]"
              />

              <div>
                <h3 className="text-lg leading-snug text-[#d0b06f] sm:text-xl">
                  {protocol.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#bca678] sm:text-base sm:leading-7">
                  {protocol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="/HighJwellerimages/img1.png"
          alt="High jewellery craftsmanship and gemstone provenance"
          className="h-[400px] w-full rounded-md object-cover sm:h-[550px] lg:h-[700px]"
        />
      </div>
    </section>
  );
};

export default Protocols;