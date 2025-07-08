import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-[#091221] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/overlayimage.webp"
          alt="Background overlay"
          className="w-full h-full object-cover opacity-20 blur-md mix-blend-screen pointer-events-none"
        />
      </div>

      {/* Contenido del footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo + descripción */}
        <div className="space-y-4">
          <img
            src="/rwamainlogo2.svg"
            alt="RWA Logo"
            className="w-28 h-auto"
          />
          <p className="text-white/80">
            Discover, collaborate, and grow through trusted partnerships waiting for you.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-blue-400 transition" />
            <FaTwitter className="hover:text-blue-400 transition" />
            <FaInstagram className="hover:text-pink-400 transition" />
            <FaPinterestP className="hover:text-red-400 transition" />
          </div>
        </div>

        {/* Help */}
        <div className="space-y-2">
          <h3 className="text-blue-400 font-semibold">Help</h3>
          <p className="hover:text-gray-300 cursor-pointer">Support Center</p>
          <p className="hover:text-gray-300 cursor-pointer">Payment Gateway</p>
          <p className="hover:text-gray-300 cursor-pointer">FAQ</p>
        </div>

        {/* RWA Inc */}
        <div className="space-y-2">
          <h3 className="text-blue-400 font-semibold">RWA Inc</h3>
          <p className="hover:text-gray-300 cursor-pointer">About us</p>
          <p className="hover:text-gray-300 cursor-pointer">SRWA</p>
          <p className="hover:text-gray-300 cursor-pointer">Media Kit</p>
          <p className="hover:text-gray-300 cursor-pointer">Team</p>
        </div>

        {/* Partners */}
        <div className="space-y-2">
          <h3 className="text-blue-400 font-semibold">Partners</h3>
          <p className="hover:text-gray-300 cursor-pointer">Be a provider, apply now</p>
          <p className="hover:text-gray-300 cursor-pointer">List of Partners</p>
          <p className="hover:text-gray-300 cursor-pointer">Find a Partner</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="relative z-10 border-t border-white/10 mx-6">
        <p className="text-center py-6 text-xs text-gray-400">
          © 2025 <span className="text-blue-400">RWA Inc.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
