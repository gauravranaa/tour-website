"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {

  const images = [
    "/images/adikailash4.png",
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

      {/* HERO WITH AUTO IMAGE SLIDER */}
      <section
        className="bg-cover bg-center h-[calc(100vh-80px)] flex items-center justify-center text-white transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[currentImage]})`
        }}
      >
        <div className="bg-black/60 backdrop-blur-md p-10 rounded-2xl text-center max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-lg md:text-xl">
            Plan Your Sacred Himalayan Journey
          </p>

        </div>
      </section>


      {/* CONTACT SECTION */}
      <section className="py-24 px-8 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-3xl font-bold mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              For Adi Kailash, Om Parvat & Panchachuli expeditions,
              contact us for batch dates, permits and customized
              travel planning.
            </p>

            <div className="space-y-4 text-gray-700">

              <p>
                <strong>Phone:</strong> +91 6395515336, +91 9389663855
              </p>

              <p>
                <strong>Email:</strong> kailashnathadikailashtourism@gmail.com
              </p>

              <p>
                <strong>Location:</strong> Uttarakhand, India
              </p>

            </div>

            <div className="mt-8">

              <a
                href="https://wa.me/916395515336"
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>


          {/* FORM */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Send an Inquiry
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                placeholder="Which expedition are you interested in?"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}