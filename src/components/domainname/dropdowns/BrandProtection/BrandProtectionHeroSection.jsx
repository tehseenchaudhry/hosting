import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const BrandProtectionHeroSection = () => {
  return (
    <>
    <div className="hidden lg:block bg-[#020c2b]">
      <ul className="flex items-center p-3  gap-3 text-sm text-white">
        {/* Home */}
        <li className="flex items-center gap-1 underline">
          <FiHome className="text-sm" />
          <Link to='/hosting'className="hover:text-black">
            Home
          </Link>
        </li>

        <li className="text-gray-400">/</li>

        {/* Domain Names */}
        <li className="underline">
          <Link to="/domain-names"
            className="hover:text-black"
          >
            Domain names
          </Link>
        </li>

        <li className="text-gray-400">/</li>

        {/* Current */}
        <li className="font-semibold text-gray-400">
          Brand Protection
        </li>
      </ul>
   

 <section className="  text-white px-6 lg:px-24 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div className="md:pr-12">
            <h1 className="text-4xl md:text-5xl font-semibold">
              Brand protection
            </h1>

            <p className="text-2xl md:text-3xl mt-6 font-light">
              Genious Communications can help you secure and protect your brand online.
            </p>

            <p className="text-gray-300 mt-6 leading-relaxed">
              After a thorough analysis, a team of experts recommends the domain
              names to be registered in order to maximize your protection against
              fraudulent practices that can harm your brand image.
            </p>

            <a
              href=""
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white rounded-full    text-[#0b1c2d] transition-colors duration-300 hover:bg-blue-500 hover:text-white"
            >
              Protect my brand
              <FiArrowRight />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative md:pl-12">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/slider-brand-protection.webp"
              alt="Protection de marque"
              className="relative z-10 w-full max-w-md mx-auto rounded-xl"
            />

            {/* Decorative Dots */}
            <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full" />
          </div>

        </div>
      </div>
    </section>
     </div>
    </>
  );
};



export default BrandProtectionHeroSection