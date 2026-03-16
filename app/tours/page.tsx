import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpeditionCard from "@/components/ExpeditionCard";

export default function Tours() {
  return (
    <div>
      <Navbar />

      <section className="py-20 bg-gray-100 px-8">
        <h1 className="text-5xl font-bold text-center mb-16">
          Our Spirtual and Adventure Tours
        </h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <ExpeditionCard
            title="Adi Kailash and Om Parvat"
            description="6 Days Sacred Himalayan journey near Indo-Tibet border."
            image="/images/Adikailash1.png"
            link="/expeditions/adi-kailash"
          />

          <ExpeditionCard
            title="Panchachuli Base Camp (Darma Valley)"
            description="Adventure trek in the breathtaking Darma Valley."
            image="/images/Darma2.png"
            link="/expeditions/panchachuli-base-camp"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}