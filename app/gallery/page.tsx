"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {

  const images = [
    "/images/Adikailash4.png",
    "/images/Om2.png",
    "/images/Darma2.png"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero with Auto Image Slider */}
      <section
  className="bg-cover bg-center h-[calc(100vh-80px)] flex items-center justify-center text-white transition-all duration-700"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[currentImage]})`
  }}
>
  <div className="bg-black/60 backdrop-blur-md p-10 rounded-2xl text-center max-w-3xl">

    <h1 className="text-5xl md:text-6xl font-bold">
      Gallery
    </h1>

    <p className="mt-4 text-lg md:text-xl">
      Sacred Himalayan Moments
    </p>

  </div>
</section>

      {/* Gallery Grid */}
      <section className="py-20 px-8 bg-gray-100">
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

          <div className="text-center group">
            <img
              src="/images/Adikailash1.png"
              alt="Adi Kailash"
              className="rounded-xl w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <p className="mt-3 font-semibold text-lg text-gray-800">
              Adi Kailash
            </p>
          </div>

          <div className="text-center group">
            <img
              src="/images/Om2.png"
              alt="Om Parvat"
              className="rounded-xl w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <p className="mt-3 font-semibold text-lg text-gray-800">
              Om Parvat
            </p>
          </div>

          <div className="text-center group">
            <img
              src="/images/Darrma1.png"
              alt="Panchachuli"
              className="rounded-xl w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <p className="mt-3 font-semibold text-lg text-gray-800">
              Panchachuli Peaks
            </p>
          </div>

          <div className="text-center group">
            <img
              src="/images/adikailash2.png"
              alt="Adi Kailash Lake"
              className="rounded-xl w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <p className="mt-3 font-semibold text-lg text-gray-800">
              Parvati Sarovar (Adi Kailash)
            </p>
          </div>

          <div className="text-center group">
            <img
              src="/images/Om1.png"
              alt="Om Snow Symbol"
              className="rounded-xl w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <p className="mt-3 font-semibold text-lg text-gray-800">
              Om Parvat Snow Symbol
            </p>
          </div>

          <div className="text-center group">
            <img
              src="/images/Darma2.png"
              alt="Darma Valley"
              className="rounded-xl w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
            />
            <p className="mt-3 font-semibold text-lg text-gray-800">
              Darma Valley
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}