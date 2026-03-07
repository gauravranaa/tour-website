"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Inner Line Permit required for Adi Kailash?",
    answer:
      "Yes. Adi Kailash and Om Parvat are located near the Indo-Tibet border. Inner Line Permit is mandatory and we assist in the complete process.",
  },
  {
    question: "What documents are required?",
    answer:
      "Valid Government ID (Aadhaar / Passport), passport-size photos, and medical fitness certificate are required.",
  },
  {
    question: "What is the best time to visit?",
    answer:
      "May to October is considered best, depending on weather and government clearance.",
  },
  {
    question: "Is this journey suitable for senior citizens?",
    answer:
      "Yes, but medical fitness is required. Since it involves high altitude travel, we recommend proper health consultation before booking.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
              >
                {faq.question}
                <span>
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}