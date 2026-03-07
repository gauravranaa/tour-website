import ExpeditionCard from "./ExpeditionCard";

export default function Expeditions() {
  return (
    <section className="py-20 bg-gray-100 px-8">
      <h2 className="text-4xl font-bold text-center mb-16">
        Our Sacred Expeditions
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
    </section>
  );
}