"use client";

export default function WhatsappButton() {

  const phoneNumber = "919999999999"; // replace with your number
  const message = "Hello, I want details about Adi Kailash Trip";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-2"
    >
      💬 Chat on WhatsApp
    </a>
  );
}