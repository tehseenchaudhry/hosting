import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import HostingDropDown from "./NavbarMain/HostingDropDown";

const NavbarMain = () => {
  const [showHosting, setShowHosting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="logo.png" alt="Genious" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-[#020c2b] font-semibold">
          
          {/* HOSTING */}
          <div
            className="relative"
            onMouseEnter={() => setShowHosting(true)}
            onMouseLeave={() => setShowHosting(false)}
          >
            <Link className="hover:border-b-2 pb-1" to="">
              Hosting
            </Link>

            {showHosting && (
              <div className="absolute top-8 right-[-660px] w-screen">
                <HostingDropDown />
              </div>
            )}
          </div>

          <Link className="hover:border-b-2" to="">Domain names</Link>
          <Link className="hover:border-b-2" to="">Mail solutions</Link>
          <Link className="hover:border-b-2" to="">SSL</Link>
          <Link className="hover:border-b-2" to="">Managed Services</Link>
          <Link className="hover:border-b-2" to="">Company</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#020c2b] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md absolute w-full">
          <nav className="flex flex-col gap-4 p-6 text-[#020c2b] font-semibold">
            <Link to="">Hosting</Link>
            <Link to="">Domain names</Link>
            <Link to="">Mail solutions</Link>
            <Link to="">SSL</Link>
            <Link to="">Managed Services</Link>
            <Link to="">Company</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavbarMain;
