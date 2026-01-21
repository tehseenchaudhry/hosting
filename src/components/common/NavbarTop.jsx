import React from "react";
import { FaAngleRight } from "react-icons/fa6";



const NavbarTop = () => {
  return (
    <div className="bg-[#020c2b] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <button className="underline font-bold px-3 py-1 rounded hover:scale-x-105 transition flex justify-center items-center gap-1">
            Knowledge base <span><FaAngleRight   className=" mt-1"/></span> 

          </button>

          <span className="opacity-90">+212 (05) 24 29 87 00</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 hover:opacity-80">
            🌐 English - USD
          </button>

          <button className="hover:opacity-80 flex justify-center gap-1 ">
            Sign In <span><FaAngleRight   className=" mt-1"/></span> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
