import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#020c2b] to-[#010824] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

        <div>
          <p className="text-lg mb-3">Any questions ?</p>
          <h2 className="text-3xl font-bold mb-12">
            +212 (05) 24 29 87 00
          </h2>

          <p className="text-lg mb-3">Need support ?</p>
          <a
            href="mailto:tickets@genious.net"
            className="text-2xl font-bold underline"
          >
            tickets@genious.net
          </a>
        </div>

        {/* Links */}
        <div className="space-y-4 text-lg font-medium">
          <p>Domain names</p>
          <p>Mail solutions</p>
          <p>SSL</p>
          <p>Hosting</p>
          <p>Managed Services</p>
          <p>Company</p>
          <p className="flex items-center gap-2">
            Blog <span className="text-blue-400"><LuSquareArrowOutUpRight />
</span>
          </p>
        </div>

        {/* Payments & Social */}
        <div className="space-y-10">
          <div>
            <p className="text-lg mb-4">Secure Payment</p>
            <div className="flex items-center gap-6 text-2xl font-bold">
              <span>PayPal</span>
              <span>VISA</span>
              <span>mastercard</span>
            </div>
          </div>

          <div>
            <p className="text-lg mb-4">Follow Us</p>
            <div className="flex gap-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaLinkedinIn />} />
              <SocialIcon icon={<FaInstagram />} />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium underline">
          <a href="#" className="border-r pr-4 border-gray-500">Legal Policies</a>
          <a href="#" className="border-r pr-4 border-gray-500">Anti-Abuse Policy</a>
          <a href="#" className="border-r pr-4 border-gray-500">Privacy Policy</a>
          <a href="#" className="border-r pr-4 border-gray-500">Glossary</a>
          <a href="#">Client Area</a>
        </div>

        <p className="text-sm opacity-80">
          Genious Communications © 2003 – 2026 – All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#020c2b] transition">
    {icon}
  </div>
);

export default Footer;
