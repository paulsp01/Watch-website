import Card from "./Card.jsx";

const SalonList = ({ salons }) => {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] space-y-10 lg:space-y-14">
        {salons.map((salon, index) => (
          <Card key={salon.title} salon={salon} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SalonList;
