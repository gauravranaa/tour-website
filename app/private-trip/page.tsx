"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivateTrip() {

  const [destination, setDestination] = useState("Adi Kailash & Om Parvat");

  const images = [
    "/images/Adikailash4.png",
    "/images/Om2.png",
    "/images/Darma2.png"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      <Navbar />

      {/* HERO */}
      <section
  className="bg-cover bg-center min-h-screen flex items-center justify-center text-white transition-all duration-700"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[currentImage]})`
  }}
>

  <div className="bg-black/60 p-10 rounded-xl text-center max-w-2xl">

    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Private Himalayan Expeditions
    </h1>

    <p className="mb-6 text-lg">
      Design your own spiritual journey to Adi Kailash & Om Parvat or
      Panchachuli Base Camp with flexible travel dates and personalized planning.
    </p>

    <div className="flex gap-4 justify-center">

      <a
        href="#inquiry"
        className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition"
      >
        Plan My Private Trip
      </a>

      <a
        href="https://wa.me/916395515336"
        className="bg-green-600 px-6 py-3 rounded-full hover:bg-green-700 transition"
      >
        WhatsApp Us
      </a>

    </div>

  </div>

</section>

      {/* WHY PRIVATE TRIP */}
      <section className="py-20 max-w-6xl mx-auto px-8">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose a Private Expedition
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Flexible Travel Dates</h3>
            <p>Travel when it suits your group schedule.</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Dedicated Guide</h3>
            <p>Local expert guiding your Himalayan journey.</p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Private Vehicle</h3>
            <p>Comfortable transportation for your group.</p>
          </div>

        </div>

      </section>


      {/* DESTINATIONS */}
      <section className="py-20 bg-gray-100 px-8">

        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Destination
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {["Adi Kailash & Om Parvat", "Panchachuli Base Camp"].map((place) => (
            <button
              key={place}
              onClick={() => setDestination(place)}
              className={`p-6 rounded-xl border transition text-center text-lg font-medium
              ${destination === place ? "bg-orange-500 text-white" : "bg-white"}`}
            >
              {place}
            </button>
          ))}

        </div>

      </section>


      {/* SAMPLE ITINERARY */}
      <section className="py-20 bg-gray-100 px-8">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Sample Private {destination} Itinerary
          </h2>

          <ul className="space-y-4 text-gray-700">

            <li>Day 1: Arrival & briefing</li>
            <li>Day 2: Journey towards Dharchula</li>
            <li>Day 3: Travel to Gunji</li>

            <li>
              Day 4: {destination === "Adi Kailash & Om Parvat"
                ? "Adi Kailash Darshan & Om Parvat Visit"
                : "Panchachuli Base Camp Trek"}
            </li>

            <li>
              Day 5: {destination === "Adi Kailash & Om Parvat"
                ? "Explore Parvati Sarovar & nearby spiritual locations"
                : "Explore Darma Valley landscapes"}
            </li>

            <li>Day 6: Return journey</li>

          </ul>

          <p className="mt-6 text-gray-600 text-center">
            *All itineraries can be customized for your group.*
          </p>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="py-20 max-w-6xl mx-auto px-8">

        <h2 className="text-3xl font-bold text-center mb-12">
          How Private Trips Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="font-semibold">1. Send Inquiry</h3>
            <p>Tell us your travel dates and group size.</p>
          </div>

          <div>
            <h3 className="font-semibold">2. Custom Plan</h3>
            <p>We design a personalized itinerary.</p>
          </div>

          <div>
            <h3 className="font-semibold">3. Confirm Booking</h3>
            <p>Secure your journey with advance payment.</p>
          </div>

          <div>
            <h3 className="font-semibold">4. Begin Journey</h3>
            <p>Experience the sacred Himalayas.</p>
          </div>

        </div>

      </section>


      {/* INQUIRY FORM */}
      <section id="inquiry" className="py-20 px-8">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>

            <h2 className="text-3xl font-bold mb-6">
              Plan Your Private Journey
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

          </div>


          <div className="bg-gray-100 p-8 rounded-xl shadow-md">

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="number"
                placeholder="Group Size"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="date"
                className="w-full border p-3 rounded-lg"
              />

              <select className="w-full border p-3 rounded-lg">
                <option>Delhi Pickup</option>
                <option>Haldwani Pickup</option>
                <option>Pithoragarh Pickup</option>
              </select>

              <textarea
                placeholder={`Private Trip Inquiry for ${destination}`}
                className="w-full border p-3 rounded-lg h-32"
              />

              <button
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
              >
                Request Private Trip Plan
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="py-16 bg-orange-500 text-white text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready for Your Sacred Journey?
        </h2>

        <p className="mb-6">
          Plan your private Himalayan expedition today.
        </p>

        <a
          href="https://wa.me/916395515336"
          className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold"
        >
          Chat on WhatsApp
        </a>

      </section>

      <Footer />

    </div>
  );
}