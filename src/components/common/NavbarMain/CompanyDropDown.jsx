import { useState } from "react";
import { Link } from "react-router-dom";

const companyItems = [
  {
    title: "Contact us",
    desc: "Our team is at your disposal to assist you with any queries you may have.",
    type: "INDIVIDUAL",
    path: "/company/contact",
  },
  {
    title: "Careers",
    desc: "Working at Genious Communications will allow you to develop a rewarding professional career in a vibrant environment.",
    type: "PROFESSIONAL",
    path: "/company/careers",
  },
  {
    title: "Our Clients",
    desc: "We work in close collaboration with our customers to develop solutions for internet web hosting and managed services.",
    type: "ENTERPRISE",
    path: "/company/clients",
  },
  {
    title: "Blog",
    desc: "Follow the latest news on our products and services.",
    type: "INDIVIDUAL",
    path: "/company/blog",
  },
  {
    title: "Network Infrastructure",
    desc: "Our datacenters boast a 99.9% network uptime rate.",
    type: "PROFESSIONAL",
    path: "/company/network-infrastructure",
  },
  {
    title: "Authorized partner",
    desc: "Notre programme Authorized Partner est conçu pour les entreprises souhaitant proposer des services d'hébergement internet.",
    type: "ENTERPRISE",
    path: "/company/authorized-partner",
  },
];

const filters = ["ALL", "INDIVIDUAL", "PROFESSIONAL", "ENTERPRISE"];

const CompanyDropDown = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredItems =
    activeFilter === "ALL"
      ? companyItems
      : companyItems.filter((item) => item.type === activeFilter);

  return (
    <div className="bg-white border-t shadow-xl animate-dropdown">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12">

        {/* LEFT FILTER */}
        <div className="col-span-2 bg-[#020c2b] text-white px-6 py-6 space-y-3">
          <h3 className="font-semibold mb-2 text-sm">Filter by</h3>

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`block w-full text-left text-sm transition
                ${
                  activeFilter === filter
                    ? "text-white font-semibold"
                    : "text-white/60 hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* CENTER CONTENT */}
        <div className="col-span-7 px-8 py-6 grid grid-cols-2 gap-5">

          {filteredItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:translate-y-[-1px]"
            >
              <h4 className="font-semibold text-base group-hover:text-blue-600">
                {item.title}
              </h4>

              <p className="text-xs text-gray-600 mt-2 leading-snug">
                {item.desc}
              </p>
            </Link>
          ))}

          {filteredItems.length === 0 && (
            <p className="text-gray-400 text-sm">No items found.</p>
          )}

        </div>

        {/* RIGHT BLOG */}
        <div className="col-span-3 px-8 py-6 border-l">
          <h5 className="text-[10px] text-gray-500 mb-1">BLOG ARTICLE</h5>

          <h2 className="text-lg font-bold leading-tight">
            Résolutions du Nouvel An pour votre site web
          </h2>

          <Link
            to="/blog/new-year-resolutions"
            className="inline-block mt-4 px-4 py-1.5 text-sm border rounded-full hover:bg-black hover:text-white transition"
          >
            Discover →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompanyDropDown;
