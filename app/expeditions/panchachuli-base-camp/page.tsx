import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Panchachuli() {
  return (
    <div>
      <Navbar />

      <section className="bg-[url('/images/panchachuli.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white">
        <div className="bg-black/60 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Panchachuli Base Camp Trek
          </h1>
          <p className="mt-4 text-lg">
            Explore the Untouched Beauty of Darma Valley
          </p>
        </div>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          About the Trek
        </h2>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Panchachuli Base Camp is a scenic high-altitude trek located in 
          the beautiful Darma Valley of Uttarakhand. The trek offers 
          breathtaking views of the five snow-capped Panchachuli peaks 
          and a peaceful Himalayan experience.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">
          Trek Highlights
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li>• Darma Valley scenic drive</li>
          <li>• Base camp camping experience</li>
          <li>• Snow peak sunrise views</li>
          <li>• Professional trek guide support</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Duration
        </h2>

        <p className="text-gray-700">
          5 Days / 4 Nights
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">
          Pricing
        </h2>

        <div className="bg-gray-100 p-8 rounded-xl shadow-md">
          <p className="text-2xl font-semibold text-orange-600">
            ₹18,000 per person
          </p>
          <p className="mt-4">
            Includes stay, meals, trekking guide & local transport.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            Book Your Trek
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}