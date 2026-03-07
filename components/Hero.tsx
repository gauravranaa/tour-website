export default function Hero() {
  return (
    <section className="h-screen bg-[url('/images/kailash.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="text-center bg-black/60 p-10 rounded-2xl max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          Sacred Himalayan Expeditions
        </h1>
        <p className="text-xl mb-8">
          Adi Kailash • Om Parvat • Panchachuli Base Camp
        </p>
        <button className="bg-orange-500 px-8 py-3 rounded-full hover:bg-orange-600 transition">
          View Expeditions
        </button>
      </div>
    </section>
  );
}