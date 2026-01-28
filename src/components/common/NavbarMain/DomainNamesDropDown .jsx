import { useState } from "react";
import { Link } from "react-router-dom";

const DOMAIN_SERVICES = [
  {
    title: "Register domain name",
    desc: "Check the availability of one or more domain names and register them instantly.",
    category: "INDIVIDUAL",
    path: "/domain-names/register",
  }, 
  {
    title: "Transfer Domain Name",
    desc: "Transfer your domain to Genious and let our support manage the technical side.",
    category: "PROFESSIONAL",
    path: "/domain-names/transfer",
  },
  {
    title: "Domain extensions",
    desc: "Find the perfect domain name from over 500 available extensions.",
    category: "ALL",
    path: "/domain-names/extensions",
  },
  {
    title: "Brand Protection",
    desc: "Preserve your brand integrity and prevent cybersquatting.",
    category: "ENTERPRISE",
    path: "/domain-names/brand-protection",
  },
  {
    title: "Domain Retrieval",
    desc: "Recover your domain name if it was stolen or reserved by a third party.",
    category: "ENTERPRISE",
    path: "/domain-names/retrieval",
  },
  {
    title: "Domain Broker Service",
    desc: "Get the perfect domain name even if it’s already registered.",
    category: "PROFESSIONAL",
    path: "/domain-names/broker",
  },
  {
    title: "Domain Name Reseller",
    desc: "Become a domain reseller with automation tools and white-label options.",
    category: "ENTERPRISE",
    path: "/domain-names/reseller",
  },
];

const FILTERS = ["ALL", "INDIVIDUAL", "PROFESSIONAL", "ENTERPRISE"];

const DomainNamesDropDown = ({ closeMenu }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredServices =
    activeFilter === "ALL"
      ? DOMAIN_SERVICES
      : DOMAIN_SERVICES.filter(
          (item) => item.category === activeFilter || item.category === "ALL"
        );

  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-[260px_1fr_320px]">

        {/* FILTERS */}
        <div className="bg-[#020c2b] text-white px-8 py-10">
          <h4 className="font-semibold mb-6">Filter by</h4>

          <ul className="space-y-4 text-sm">
            {FILTERS.map((filter) => (
              <li
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer transition ${
                  activeFilter === filter
                    ? "font-semibold text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {filter}
                {filter === "ALL" && " →"}
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="px-14 py-12 grid grid-cols-3 gap-x-16 gap-y-10">
          {filteredServices.map((item, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{item.desc}</p>

              <Link
                to={item.path}
                onClick={closeMenu}
                className="text-sm font-semibold text-[#0b4dff] hover:underline"
              >
                Discover →
              </Link>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* ICANN */}
        <div className="px-10 py-12 border-l flex flex-col ">
          <img src="https://www.genious.net/themes/genious_theme/img/ndd/logos/icann.svg
" alt="ICANN" className="w-20 mb-6" />
=======
        <div className="px-10 py-12 border-l flex flex-col justify-center">
          <img src="/icann.png" alt="ICANN" className="w-20 mb-6" />
>>>>>>> 02bee7891ebf0f1313fadae70e9f68a1704271ac
          <h4 className="text-2xl font-bold mb-4">Accredited Registrar</h4>
          <p className="text-sm text-gray-600">
            Register or transfer your domain through an ICANN accredited registrar.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DomainNamesDropDown;
