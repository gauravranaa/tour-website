export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Himalayan Moments
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
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
            alt="Adi Kailash Lake"
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
      </div>
    </section>
  );
}