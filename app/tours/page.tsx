import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpeditionCard from "@/components/ExpeditionCard";

export default function Tours() {
  return (
    <div>
      <Navbar />

      <section className="py-20 bg-gray-100 px-8">
        <h1 className="text-5xl font-bold text-center mb-16">
          Our Sacred Tours
        </h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <ExpeditionCard
            title="Adi Kailash Expedition"
            description="6 Days Sacred Himalayan journey near Indo-Tibet border."
            image="/images/kailash.jpg"
            link="/expeditions/adi-kailash"
          />

          <ExpeditionCard
            title="Om Parvat Darshan"
            description="Witness the divine ॐ snow formation in the Himalayas."
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

      <Footer />
    </div>
  );
}