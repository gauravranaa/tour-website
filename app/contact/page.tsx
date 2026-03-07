import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[url('/images/kailash.jpg')] bg-cover bg-center h-[50vh] flex items-center justify-center text-white">
        <div className="bg-black/60 p-10 rounded-2xl text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg">
            Plan Your Sacred Himalayan Journey
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side - Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-700 mb-6">
              For Adi Kailash, Om Parvat & Panchachuli expeditions,
              contact us directly for batch dates, permit guidance
              and customized plans.
            </p>

            <div className="space-y-4 text-gray-800">
              <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
              <p><strong>Email:</strong> info@sacredhimalayan.com</p>
              <p><strong>Location:</strong> Uttarakhand, India</p>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
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