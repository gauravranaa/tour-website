"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Panchachuli() {

  const images = [
    "/images/Darma2.png",
    "/images/Darrma1.png"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // slower transition feels better

    return () => clearInterval(interval);

  }, []);

  return (
    <div>

      <Navbar />

      {/* HERO FULL PAGE SLIDER */}

      <section className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center text-white overflow-hidden">

        <img
          key={currentImage}
          src={images[currentImage]}
          alt="Panchachuli Trek"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 bg-black/60 backdrop-blur-md p-10 rounded-2xl text-center max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-bold">
            Panchachuli Base Camp Trek
          </h1>

          <p className="mt-4 text-lg">
            Explore the Untouched Beauty of Darma Valley
          </p>

        </div>

      </section>


      {/* ABOUT TREK */}

      <section className="py-16 px-8 max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-6">
          About the Trek
        </h2>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Panchachuli Base Camp is a scenic Himalayan trek located in the
          breathtaking Darma Valley of Uttarakhand. The journey offers
          magnificent views of the five Panchachuli peaks along with
          beautiful alpine landscapes, remote Himalayan villages and
          pristine mountain rivers.
        </p>


        {/* IMAGE SLIDER */}

        <div className="relative h-[420px] rounded-xl overflow-hidden shadow-xl mb-16">

          <img
            key={`content-${currentImage}`}
            src={images[currentImage]}
            alt="Panchachuli Valley"
            className="w-full h-full object-cover transition-all duration-700"
          />

        </div>


        {/* TREK HIGHLIGHTS */}

        <h2 className="text-3xl font-bold mb-10">
          Trek Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="p-6 border rounded-xl text-center shadow-sm">
            Scenic Darma Valley Drive
          </div>

          <div className="p-6 border rounded-xl text-center shadow-sm">
            Panchachuli Base Camp Camping
          </div>

          <div className="p-6 border rounded-xl text-center shadow-sm">
            Sunrise Views of Panchachuli Peaks
          </div>

          <div className="p-6 border rounded-xl text-center shadow-sm">
            Remote Himalayan Villages
          </div>

          <div className="p-6 border rounded-xl text-center shadow-sm">
            Alpine Meadows & Rivers
          </div>

          <div className="p-6 border rounded-xl text-center shadow-sm">
            Professional Trek Guides
          </div>

        </div>


        {/* DURATION */}

        <h2 className="text-3xl font-bold mb-4">
          Duration
        </h2>

        <p className="text-gray-700 mb-16">
          5 Days / 4 Nights
        </p>

      </section>


      {/* CONTACT + INQUIRY */}

      <section className="py-16 px-8 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12">

          {/* CONTACT */}

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Contact Us
            </h2>

            <p className="text-gray-600 mb-6">
              For Panchachuli Base Camp, Adi Kailash and Om Parvat expeditions,
              contact us for trek dates, permits and travel planning.
            </p>

            <p className="mb-3">
              <strong>Phone:</strong> +91 6395515336, +91 9389663855
            </p>

            <p className="mb-3">
              <strong>Email:</strong> kailashnathadikailashtourism@gmail.com
            </p>

            <p className="mb-6">
              <strong>Location:</strong> Uttarakhand, India
            </p>

            <a
              href="https://wa.me/916395515336"
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </a>

          </div>


          {/* FORM */}

          <div className="bg-gray-100 p-8 rounded-xl shadow-md">

            <h3 className="text-2xl font-semibold mb-6">
              Send an Inquiry
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                placeholder="Inquiry for Panchachuli Base Camp Trek"
                className="w-full border p-3 rounded-lg h-32"
              />

              <button
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