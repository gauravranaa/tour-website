import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="bg-[url('/images/kailash.jpg')] bg-cover bg-center h-[50vh] flex items-center justify-center text-white">
        <div className="bg-black/60 p-10 rounded-2xl text-center">
          <h1 className="text-5xl font-bold">Gallery</h1>
          <p className="mt-4 text-lg">
            Sacred Himalayan Moments
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          
          <img
            src="/images/kailash.jpg"
            alt="Adi Kailash"
            className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
          />

          <img
            src="/images/omparvat.jpg"
            alt="Om Parvat"
            className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
          />

          <img
            src="/images/panchachuli.jpg"
            alt="Panchachuli"
            className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
          />

          <img
            src="/images/kailash.jpg"
            alt="Jolingkong Lake"
            className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
          />

          <img
            src="/images/omparvat.jpg"
            alt="Om Snow Symbol"
            className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
          />

          <img
            src="/images/panchachuli.jpg"
            alt="Darma Valley"
            className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
          />

        </div>
      </section>

      <Footer />
    </div>
  );
}