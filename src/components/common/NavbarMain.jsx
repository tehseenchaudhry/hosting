import React, { useState } from "react";
import { Link } from "react-router-dom";
import HostingDropDown from "./NavbarMain/HostingDropDown";
// import HostingDropDown from "../hosting/HostingDropDown";

const NavbarMain = () => {
  const [showHosting, setShowHosting] = useState(false);

  return (
    <div className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Genious" className="h-9" />
          </Link>

        {/* Menu */}
        <nav className="flex items-center gap-10 text-[#020c2b] font-semibold">
          
          {/* HOSTING (Hover Trigger) */}
          <div
            className="relative"
            onMouseEnter={() => setShowHosting(true)}
            onMouseLeave={() => setShowHosting(false)}
          >
            <Link className="hover:border-b-2 pb-1" to="">
              Hosting
            </Link>

            {/* Dropdown */}
            {showHosting && (
              <div className="absolute top-8   right-[-660px] w-screen">
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
      </div>
    </div>
  );
};

export default NavbarMain;
