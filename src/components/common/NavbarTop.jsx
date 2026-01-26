import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const NavbarTop = () => {
  return (
    <div className="bg-[#020c2b] text-white text-sm">
      <div
        className="
          max-w-7xl mx-auto px-4 md:px-6
          min-h-12
          flex flex-col md:flex-row
          md:items-center
          md:justify-between
          gap-2 md:gap-0
          py-2 md:py-0
        "
      >
        {/* Left */}
        <div className="flex items-center gap-4 md:gap-6 justify-center md:justify-start">
          <button className="underline font-bold px-3 py-1 rounded hover:scale-x-105 transition flex items-center gap-1">
            Knowledge base <FaAngleRight className="mt-1" />
          </button>

          <span className="opacity-90 text-xs sm:text-sm">
            +212 (05) 24 29 87 00
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 md:gap-6 justify-center md:justify-end">
          <button className="flex items-center gap-1 hover:opacity-80">
            🌐 English - USD
          </button>

          <button className="hover:opacity-80 flex items-center gap-1">
            Sign In <FaAngleRight className="mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
