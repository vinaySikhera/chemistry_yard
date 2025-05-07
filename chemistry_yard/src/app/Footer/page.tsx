// components/Footer.jsx
"use client";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube, FaPaperPlane, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f3d] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Socials */}
        <div>
          <h1 className="text-3xl font-bold mb-6">LOGO</h1>
          <div className="flex space-x-4">
            <a href="#" aria-label="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" aria-label="Dribbble" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaDribbble size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help center</a></li>
            <li><a href="#" className="hover:underline">Terms of service</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>
          <form className="relative mt-2">
            <div className="flex items-center bg-white/10 rounded-md p-2">
              <FaEnvelope className="text-gray-300 ml-2 mr-3" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent placeholder-gray-300 text-white outline-none text-sm"
              />
              <button type="submit" className="text-white hover:text-gray-300 transition mr-2">
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
