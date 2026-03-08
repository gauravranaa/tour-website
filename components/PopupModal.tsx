"use client";

import { useState, useEffect } from "react";

export default function PopupModal() {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full flex overflow-hidden relative">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/images/kailash.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-8 w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            Plan Your Sacred Journey
          </h2>

          <p className="text-gray-600 mb-6">
            Get special expedition offers for Adi Kailash and Om Parvat.
          </p>

          <input
            type="text"
            placeholder="Enter your name"
            className="border w-full p-3 rounded-lg mb-4"
          />

          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="border w-full p-3 rounded-lg mb-4"
          />

          <textarea
            placeholder="Which expedition are you interested in?"
            className="border w-full p-3 rounded-lg mb-4"
          />

          <button className="bg-orange-500 text-white w-full py-3 rounded-lg hover:bg-orange-600">
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}