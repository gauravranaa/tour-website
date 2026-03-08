"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PickupType = "delhi" | "haldwani" | "pithoragarh";

export default function AdiKailash() {

  const [pickup, setPickup] = useState<PickupType>("haldwani");

  const images = [
    "/images/kailash1.jpg",
    "/images/kailash2.jpg",
    "/images/kailash3.jpg",
    "/images/kailash4.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const itineraries: Record<PickupType, string[]> = {
    delhi: [
      "Day 1: Delhi to Haldwani",
      "Day 2: Haldwani to Dharchula",
      "Day 3: Dharchula to Gunji",
      "Day 4: Adi Kailash Darshan",
      "Day 5: Om Parvat Visit",
      "Day 6: Return Journey"
    ],

    haldwani: [
      "Day 1: Arrival at Dharchula",
      "Day 2: Drive to Gunji",
      "Day 3: Jolingkong Lake & Adi Kailash Darshan",
      "Day 4: Om Parvat Visit",
      "Day 5: Return to Dharchula",
      "Day 6: Departure"
    ],

    pithoragarh: [
      "Day 1: Arrival at Pithoragarh",
      "Day 2: Drive to Dharchula",
      "Day 3: Gunji transfer",
      "Day 4: Adi Kailash Darshan",
      "Day 5: Om Parvat Visit",
      "Day 6: Return"
    ]
  };

  return (
    <div>

      <Navbar />

      {/* HERO */}
      <section className="bg-[url('/images/kailash.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white">
        <div className="bg-black/60 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Adi Kailash Expedition
          </h1>
          <p className="mt-4 text-lg">
            A Sacred Journey to the Divine Himalayas
          </p>
        </div>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto">

        {/* ABOUT */}
        <h2 className="text-3xl font-bold mb-6">
          About the Expedition
        </h2>

        <p className="mb-10 text-gray-700 leading-relaxed">
          Adi Kailash, also known as Chhota Kailash, is one of the most sacred 
          Himalayan peaks located in Uttarakhand near the Indo-Tibet border.
          The journey includes darshan of the divine mountain and the holy 
          Jolingkong Lake.
        </p>

        {/* AUTO IMAGE SLIDER */}
        <div className="mb-12">

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">

            <img
              src={images[currentImage]}
              className="w-full h-full object-cover transition-all duration-700"
            />

          </div>

        </div>

        {/* PICKUP SELECTOR */}
        <h2 className="text-3xl font-bold mb-6">
          Select Pickup Location
        </h2>

        <div className="flex gap-4 mb-10 flex-wrap">

          <button
            onClick={() => setPickup("delhi")}
            className={`border px-6 py-4 rounded-xl transition
            ${pickup === "delhi" ? "bg-orange-500 text-white" : ""}`}
          >
            Delhi → Delhi
          </button>

          <button
            onClick={() => setPickup("haldwani")}
            className={`border px-6 py-4 rounded-xl transition
            ${pickup === "haldwani" ? "bg-orange-500 text-white" : ""}`}
          >
            Haldwani → Haldwani
          </button>

          <button
            onClick={() => setPickup("pithoragarh")}
            className={`border px-6 py-4 rounded-xl transition
            ${pickup === "pithoragarh" ? "bg-orange-500 text-white" : ""}`}
          >
            Pithoragarh → Pithoragarh
          </button>

        </div>

        {/* ITINERARY */}
        <h2 className="text-3xl font-bold mb-6">
          Itinerary (6 Days Sample)
        </h2>

        <ul className="space-y-4 text-gray-700 mb-16">

          {itineraries[pickup].map((day, index) => (
            <li key={index}>{day}</li>
          ))}

        </ul>

      </section>

      {/* CONTACT / INQUIRY SECTION */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

            <p className="text-gray-600 mb-6">
              For Adi Kailash, Om Parvat & Panchachuli expeditions,
              contact us directly for batch dates, permit guidance
              and customized travel plans.
            </p>

            <p className="mb-3"><strong>Phone:</strong> +91 XXXXX XXXXX</p>
            <p className="mb-3"><strong>Email:</strong> info@sacredhimalayan.com</p>
            <p className="mb-6"><strong>Location:</strong> Uttarakhand, India</p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

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
                placeholder={`Inquiry for Adi Kailash Expedition (${pickup} pickup)`}
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