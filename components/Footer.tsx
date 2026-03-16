import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Kailash Nath Tourism
          </h3>
          <p className="text-gray-400">
            Sacred Himalayan pilgrimages to Adi Kailash, Om Parvat and
            Panchachuli Base Camp with experienced local guides.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>

          <div className="flex flex-col space-y-2">
            <Link href="/">Home</Link>
            <Link href="/tours">Tours</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>

          <p>📍 Uttarakhand, India</p>
          <p>
          <strong>Phone:</strong> +91 6395515336, +91 9389663855
        </p>
          <p>✉ kailashnathadikailashtourism@gmail.com</p>

          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/kailashnathtourism_12?igsh=M2liNXBiMmVyMHlt">Instagram</a>
            
          </div>
<div className="flex gap-4 mt-4">
          <a href="https://wa.me/916395515336">Whatsapp </a>
        </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} DevBhoomi Trails. All rights reserved.
      </div>
    </footer>
  );
}