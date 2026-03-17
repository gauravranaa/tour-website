"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function PopupModal() {

  const [open, setOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

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
        setOpen(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send inquiry");
      });
  };

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
            src="/images/Om2.jpeg"
            className="h-full w-full object-cover"
            alt="Kailash"
          />
        </div>

        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-8 w-full md:w-1/2"
        >

          <h2 className="text-2xl font-bold mb-4">
            Plan Your Sacred Journey
          </h2>

          <p className="text-gray-600 mb-6">
            Get special expedition offers for Adi Kailash and Om Parvat.
          </p>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border w-full p-3 rounded-lg mb-4"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Mobile Number"
            className="border w-full p-3 rounded-lg mb-4"
            required
          />
           <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                required
              />

          <textarea
            name="message"
            placeholder="Which expedition are you interested in?"
            className="border w-full p-3 rounded-lg mb-4"
          />

          {/* time field for email template */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <button
            type="submit"
            className="bg-orange-500 text-white w-full py-3 rounded-lg hover:bg-orange-600"
          >
            Continue
          </button>

        </form>

      </div>
    </div>
  );
}