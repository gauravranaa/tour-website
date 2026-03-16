"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {

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

      {/* Hero Section with Auto Image Slider */}
     <section
  className="bg-cover bg-center min-h-screen flex items-center justify-center text-white transition-all duration-700"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[currentImage]})`
  }}
>
  <div className="bg-black/60 backdrop-blur-md p-10 rounded-2xl text-center max-w-3xl">

    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      About KailashNath Tourism
    </h1>

    <p className="text-lg md:text-xl">
      Born in the Himalayas. Guided by Faith.
    </p>

  </div>
</section>

      {/* Story Section */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Our Story
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          KailashNath Tourism was founded with one vision —
          to make the divine journeys of Adi Kailash and Om Parvat
          safe, authentic, and spiritually meaningful.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Based in Uttarakhand, we specialize in high-altitude
          pilgrimage expeditions near the Indo-Tibet border.
          Our team consists of experienced local guides who
          understand the terrain, weather, and sacred significance
          of these Himalayan destinations.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We operate limited batch expeditions to ensure safety,
          comfort, and a deeply personal experience in the
          Himalayas.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            To provide safe, government-compliant, and spiritually
            fulfilling Himalayan journeys.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We assist with Inner Line Permits, documentation,
            high-altitude safety protocols, and personalized
            guidance throughout the expedition.
          </p>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Pilgrims Trust Us
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-600">
              Local Himalayan Expertise
            </h3>
            <p className="text-gray-600">
              Deep understanding of border region routes and
              high-altitude conditions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-600">
              Permit & Documentation Support
            </h3>
            <p className="text-gray-600">
              Complete assistance for Inner Line Permit and
              mandatory government requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-600">
              Safety First Approach
            </h3>
            <p className="text-gray-600">
              Structured itinerary, experienced guides, and
              emergency coordination protocols.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}