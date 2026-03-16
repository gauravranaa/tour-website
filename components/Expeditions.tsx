import ExpeditionCard from "./ExpeditionCard";

export default function Expeditions() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our spritual and Adventure trips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <ExpeditionCard
            title="Adi Kailash and Om Parvat"
            description="Himalayan pilgrimage near the Indo-Tibet border, Witness the natural ॐ formation in the snow-clad Himalayas."
            
            image="/images/Adikailash1.png"
            link="/expeditions/adi-kailash"
          />

          

          <ExpeditionCard
            title="Panchachuli Base Camp "
            description="Beautiful and Adventure tour in the breathtaking Darma Valley, experience local food and culture.                                                                        "
            image="/images/Darma2.png"
            link="/expeditions/panchachuli-base-camp"
          />

        </div>

      </div>
    </section>
  );
}