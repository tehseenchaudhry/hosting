import { useState } from "react";
import { Link } from "react-router-dom";

const FILTERS = ["ALL", "INDIVIDUAL", "PROFESSIONAL", "ENTERPRISE"];

const HOSTING_ITEMS = [
  {
    title: "Linux Shared Hosting",
    desc: "Affordable Linux web hosting to start and succeed online",
    path: "/hosting/linux-shared",
    category: "INDIVIDUAL",
  },
  {
    title: "Windows Shared Hosting",
    desc: "Budget hosting for sites and applications based on Microsoft technologies like ASP.NET or .NET",
    path: "/hosting/windows-shared",
    category: "PROFESSIONAL",
  },
  {
    title: "Shared Hosting in Morocco",
    desc: "Web hosting for customers looking to host their data locally",
    path: "/hosting/morocco-shared",
    category: "INDIVIDUAL",
  },
  {
    title: "Cloud Hosting",
    desc: "Tailored and scalable cloud hosting solution",
    path: "/hosting/cloud",
    category: "PROFESSIONAL",
  },
  {
    title: "Dedicated Servers",
    desc: "Guaranteed resources, security and full control",
    path: "/hosting/dedicated",
    category: "ENTERPRISE",
  },
  {
    title: "E-commerce Hosting",
    desc: "High performance hosting for online stores",
    path: "/hosting/ecommerce",
    category: "PROFESSIONAL",
  },
  {
    title: "WordPress Hosting",
    desc: "Optimized WordPress hosting for speed and security",
    path: "/hosting/wordpress",
    category: "INDIVIDUAL",
  },
  {
    title: "Multi-Site Hosting",
    desc: "Host multiple websites under one package",
    path: "/hosting/multi-site",
    category: "PROFESSIONAL",
  },
  {
    title: "MonEntreprise Plan",
    desc: "All-in-one solution for businesses",
    path: "/hosting/monentreprise",
    category: "ENTERPRISE",
  },
];

const HostingDropDown = ({ closeMenu }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredItems =
    activeFilter === "ALL"
      ? HOSTING_ITEMS
      : HOSTING_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="w-full bg-white shadow-2xl">
      <div className="max-w-[1440px] mx-auto flex">

        {/* LEFT FILTER */}
        <aside className="w-[260px] bg-[#020c2b] text-white px-8 py-12">
          <p className="text-lg mb-10 font-semibold">Filter by</p>

          <ul className="space-y-6 text-sm font-semibold">
            {FILTERS.map((filter) => (
              <li
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer transition ${
                  activeFilter === filter
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {filter}
              </li>
            ))}
          </ul>
        </aside>

        {/* CENTER INFO */}
        <div className="w-[420px] bg-[#f2f5ff] px-10 py-12">
          <h2 className="text-2xl font-bold mb-4 text-[#020c2b]">
            Hosting in Morocco →
          </h2>

          <p className="text-sm text-gray-600 mb-6 leading-6">
            Discover our hosting and colocation offers hosted in a certified
            Tier III data center.
          </p>

          <img
            src="/mainNavbar-hosting-img.jpg"
            alt="Hosting"
            className="rounded-xl mb-8"
          />

          <div className="space-y-4 font-semibold text-[#020c2b]">
            <Link onClick={closeMenu} to="/hosting/morocco-shared" className="block hover:underline">
              Shared Hosting →
            </Link>
            <Link onClick={closeMenu} to="/hosting/cloud" className="block hover:underline">
              Cloud Hosting →
            </Link>
            <Link onClick={closeMenu} to="/hosting/dedicated" className="block hover:underline">
              Dedicated Servers →
            </Link>
          </div>
        </div>

        {/* RIGHT GRID (ALIGNED) */}
        <div className="flex-1 px-14 py-12 grid grid-cols-3 gap-x-20 gap-y-12">
          {filteredItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={closeMenu}
              className="group relative pl-4"
            >
              {/* LEFT ALIGN BAR */}
              <span className="absolute left-0 top-1 h-10 w-[2px] bg-[#020c2b]/10 group-hover:bg-[#020c2b] transition"></span>

              {/* TITLE (FIXED HEIGHT) */}
              <h3 className="font-bold text-[#020c2b] mb-2 min-h-[48px] leading-snug group-hover:underline">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-6 max-w-[260px]">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingDropDown;
