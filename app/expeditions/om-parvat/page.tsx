import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OmParvat() {
  return (
    <div>
      <Navbar />

      <section className="bg-[url('/images/omparvat.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white">
        <div className="bg-black/60 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Om Parvat Darshan
          </h1>
          <p className="mt-4 text-lg">
            Witness the Sacred ॐ Manifestation in the Himalayas
          </p>
        </div>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          About the Journey
        </h2>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Om Parvat is one of the rare mountains in the world where 
          a natural snow formation resembles the sacred Hindu symbol “ॐ”.
          Located near the Indo-Nepal border in Uttarakhand, 
          this spiritual site attracts devotees and explorers alike.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">
          Expedition Highlights
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li>• Nabidhang View Point Darshan</li>
          <li>• High Altitude Himalayan Drive</li>
          <li>• Inner Line Permit Assistance</li>
          <li>• Local Guide Support</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Best Time to Visit
        </h2>

        <p className="text-gray-700">
          May to October (subject to weather and government clearance).
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Pricing
        </h2>

        

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/916395515336"
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}