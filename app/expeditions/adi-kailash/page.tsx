import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdiKailash() {
  return (
    <div>
      <Navbar />

      <section className="bg-[url('/images/kailash.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white">
        <div className="bg-black/60 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Adi Kailash Expedition
          </h1>
          <p className="mt-4 text-lg">
            A Sacred Journey to the Divine Himalayas
          </p>
        </div>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          About the Expedition
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Adi Kailash, also known as Chhota Kailash, is one of the most sacred 
          Himalayan peaks located in Uttarakhand near the Indo-Tibet border. 
          The journey includes darshan of the divine mountain and the holy 
          Jolingkong Lake.
        </p>

        <h2 className="text-3xl font-bold mb-6 mt-10">
          Itinerary (6 Days Sample)
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li><strong>Day 1:</strong> Arrival at Dharchula</li>
          <li><strong>Day 2:</strong> Drive to Gunji</li>
          <li><strong>Day 3:</strong> Jolingkong Lake & Adi Kailash Darshan</li>
          <li><strong>Day 4:</strong> Om Parvat Visit</li>
          <li><strong>Day 5:</strong> Return to Dharchula</li>
          <li><strong>Day 6:</strong> Departure</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Pricing
        </h2>

        <div className="bg-gray-100 p-8 rounded-xl shadow-md">
          <p className="text-2xl font-semibold text-orange-600">
            ₹32,000 per person
          </p>
          <p className="mt-4">
            Includes accommodation, meals, permits & local transportation.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            Book via WhatsApp
          </a>
        </div>

      </section>

      <Footer />
    </div>
  );
}