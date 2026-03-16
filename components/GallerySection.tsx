export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Himalayan Moments
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

  <div className="text-center">
    <img
      src="/images/Adikailash1.png"
      alt="Adi Kailash"
      className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
    />
    <p className="mt-3 font-semibold text-lg">Adi Kailash</p>
  </div>

  <div className="text-center">
    <img
      src="/images/Om2.png"
      alt="Om Parvat"
      className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
    />
    <p className="mt-3 font-semibold text-lg">Om Parvat</p>
  </div>

  <div className="text-center">
    <img
      src="/images/Darrma1.png"
      alt="Panchachuli"
      className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
    />
    <p className="mt-3 font-semibold text-lg">Panchachuli Peaks</p>
  </div>

  <div className="text-center">
    <img
      src="/images/Adikailash2.png"
      alt="Adi Kailash Lake"
      className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
    />
    <p className="mt-3 font-semibold text-lg">Parvati Sarovar (Adi Kailash)</p>
  </div>

  <div className="text-center">
    <img
      src="/images/Om1.png"
      alt="Om Snow Symbol"
      className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
    />
    <p className="mt-3 font-semibold text-lg">Om Parvat Snow Symbol</p>
  </div>

  <div className="text-center">
    <img
      src="/images/Darma2.png"
      alt="Darma Valley"
      className="rounded-xl object-cover h-72 w-full hover:scale-105 transition duration-300"
    />
    <p className="mt-3 font-semibold text-lg">Darma Valley</p>
  </div>

</div>
      </div>
    </section>
  );
}