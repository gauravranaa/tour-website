import ExpeditionCard from "./ExpeditionCard";

export default function Expeditions() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Sacred Expeditions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <ExpeditionCard
            title="Adi Kailash"
            description="Sacred Himalayan pilgrimage near the Indo-Tibet border."
            image="/images/kailash.jpg"
            link="/expeditions/adi-kailash"
          />

          <ExpeditionCard
            title="Om Parvat"
            description="Witness the natural ॐ formation in the snow-clad Himalayas."
            image="/images/omparvat.jpg"
            link="/expeditions/om-parvat"
          />

          <ExpeditionCard
            title="Panchachuli Base Camp"
            description="Adventure trek in the breathtaking Darma Valley."
            image="/images/panchachuli.jpg"
            link="/expeditions/panchachuli-base-camp"
          />

        </div>

      </div>
    </section>
  );
}