export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/kailash.jpg')",
      }}
    >
      <div className="text-center px-6 max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sacred Himalayan Expeditions
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Adi Kailash • Om Parvat • Panchachuli Base Camp
        </p>

        <a
          href="#expeditions"
          className="bg-orange-500 px-8 py-3 rounded-full text-lg font-semibold
          hover:bg-orange-600 transition shadow-lg"
        >
          View Expeditions
        </a>

      </div>
    </section>
  );
}