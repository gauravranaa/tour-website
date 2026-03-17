"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivateTrip() {

  const form = useRef<HTMLFormElement>(null);

  const [destination, setDestination] = useState("Adi Kailash & Om Parvat");
  const [sending, setSending] = useState(false);

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

  const sendEmail = (e: any) => {

    e.preventDefault();

    if (!form.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_b8h73c9",
        "template_74fncno",
        form.current,
        "as7tYQYFEQ408U4Q5"
      )
      .then(() => {
        alert("Inquiry Sent Successfully!");
        form.current?.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send inquiry");
        setSending(false);
      });
  };

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
            Panchachuli Base Camp with flexible travel dates.
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


      {/* DESTINATION SELECT */}
      <section className="py-20 bg-gray-100 px-8">

        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Destination
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {["Adi Kailash & Om Parvat", "Panchachuli Base Camp"].map((place) => (
            <button
              key={place}
              onClick={() => setDestination(place)}
              className={`p-6 rounded-xl border transition text-lg font-medium
              ${destination === place ? "bg-orange-500 text-white" : "bg-white"}`}
            >
              {place}
            </button>
          ))}

        </div>

      </section>


      {/* INQUIRY FORM */}
      <section id="inquiry" className="py-20 px-8">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div>

            <h2 className="text-3xl font-bold mb-6">
              Plan Your Private Journey
            </h2>

            <p className="text-gray-600 mb-6">
              For Adi Kailash, Om Parvat & Panchachuli expeditions,
              contact us for customized travel planning.
            </p>

            <div className="space-y-4 text-gray-700">

              <p><strong>Phone:</strong> +91 6395515336</p>
              <p><strong>Email:</strong> kailashnathadikailashtourism@gmail.com</p>
              <p><strong>Location:</strong> Uttarakhand, India</p>

            </div>

          </div>


          {/* FORM */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-md">

            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
                required
              />


            
            

              <textarea
                name="message"
                placeholder={`Private Trip Inquiry for ${destination}`}
                className="w-full border p-3 rounded-lg h-32"
              />

              {/* DESTINATION */}
              <input
                type="hidden"
                name="destination"
                value={destination}
              />

              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
              >
                {sending ? "Sending..." : "Request Private Trip Plan"}
              </button>

            </form>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}