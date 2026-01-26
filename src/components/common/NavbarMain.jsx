import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import HostingDropDown from "./NavbarMain/HostingDropDown";
import MailSolutionsDropDown from "./NavbarMain/MailSolutionsDropDown";
import DomainNamesDropDown from "./NavbarMain/DomainNamesDropDown ";
import SSLDropDown from "./NavbarMain/SSLDropDown";
import ManagedServicesDropDown from "./NavbarMain/ManagedServicesDropDown";
import CompanyDropDown from "./NavbarMain/CompanyDropDown"; // ✅ ADD THIS

const NavbarMain = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const handleDomainClick = () => {
    navigate("/domain-names");
    setOpenMenu(null);
  };

  return (
    <header className="relative z-[1000]">
      <div className="bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-10 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Genious" className="h-9" />
          </Link>

          {/* NAV */}
          <nav className="flex gap-12 font-semibold text-[#020c2b]">

            <Link
              to="/hosting"
              onMouseEnter={() => setOpenMenu("hosting")}
            >
              Hosting
            </Link>

            <button
              onMouseEnter={() => setOpenMenu("domains")}
              onClick={handleDomainClick}
            >
              Domain names
            </button>

            <Link
              to="/mail-solutions"
              onMouseEnter={() => setOpenMenu("mail")}
            >
              Mail solutions
            </Link>

            <button onMouseEnter={() => setOpenMenu("ssl")}>
              SSL
            </button>

            <button onMouseEnter={() => setOpenMenu("managed")}>
              Managed Services
            </button>

            {/* ✅ Company dropdown trigger */}
            <button onMouseEnter={() => setOpenMenu("company")}>
              Company
            </button>

          </nav>
        </div>
      </div>

      {/* DROPDOWNS */}

      {openMenu === "hosting" && (
        <div onMouseLeave={() => setOpenMenu(null)} className="absolute w-full">
          <HostingDropDown />
        </div>
      )}

      {openMenu === "domains" && (
        <div onMouseLeave={() => setOpenMenu(null)} className="absolute w-full">
          <DomainNamesDropDown />
        </div>
      )}

      {openMenu === "mail" && (
        <div onMouseLeave={() => setOpenMenu(null)} className="absolute w-full">
          <MailSolutionsDropDown />
        </div>
      )}

      {openMenu === "ssl" && (
        <div onMouseLeave={() => setOpenMenu(null)} className="absolute w-full">
          <SSLDropDown />
        </div>
      )}

      {openMenu === "managed" && (
        <div onMouseLeave={() => setOpenMenu(null)} className="absolute w-full">
          <ManagedServicesDropDown />
        </div>
      )}

      {/* ✅ Company dropdown */}
      {openMenu === "company" && (
        <div onMouseLeave={() => setOpenMenu(null)} className="absolute w-full">
          <CompanyDropDown />
        </div>
      )}

    </header>
  );
};

export default NavbarMain;
