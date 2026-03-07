export default function ContactSection() {
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

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Send an Inquiry
            </h3>

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
      </div>
    </section>
  );
}