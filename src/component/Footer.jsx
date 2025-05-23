import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f7fafd] text-gray-700 text-sm px-6 py-12 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">QuickStay</h3>
          <p className="mb-4">Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
          <div className="flex gap-4 text-lg text-gray-500">
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaLinkedinIn className="hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold uppercase text-xs tracking-wider mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold uppercase text-xs tracking-wider mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Options</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold uppercase text-xs tracking-wider mb-3">Stay Updated</h4>
          <p className="mb-4">Subscribe to our newsletter for travel inspiration and special offers.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="px-3 py-2 border border-gray-300 rounded-l-md outline-none flex-1" />
            <button type="submit" className="bg-black text-white px-4 rounded-r-md hover:bg-gray-800">→</button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t mt-10 pt-6 text-gray-400 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2025 QuickStay. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;