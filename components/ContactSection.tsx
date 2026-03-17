"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {

  const form = useRef<HTMLFormElement>(null);

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
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send inquiry");
      });
  };

  return (
    <section className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Plan Your Sacred Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Get in Touch
            </h3>

            <p className="text-gray-700 mb-6">
              Contact us for Adi Kailash, Om Parvat and Panchachuli
              expedition dates, permit guidance and customized plans.
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

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-6">
              Send an Inquiry
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                required
              />

              <textarea
                name="message"
                placeholder="Which expedition are you interested in?"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
              ></textarea>

              {/* hidden time field for template */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}