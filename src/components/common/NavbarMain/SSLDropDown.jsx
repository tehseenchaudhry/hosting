import { useState } from "react";
import { Link } from "react-router-dom";

const sslProviders = [
  {
    name: "Genious",
    desc: "Genious SSL is the leading Moroccan Sub Certificate Authority with over 12 years of expertise in the Web and security.",
    type: "INDIVIDUAL",
    path: "/ssl/genious",
  },
  {
    name: "Sectigo",
    desc: "Sectigo is an American brand with more than 20 years of experience in the internet security industry. It is considered to be the largest certificate authority in the world.",
    type: "PROFESSIONAL",
    path: "/ssl/sectigo",
  },
  {
    name: "Digicert",
    desc: "Digicert is an American certification authority founded in 2003. The company is renowned for securing the platforms of the world's leading companies.",
    type: "ENTERPRISE",
    path: "/ssl/digicert",
  },
  {
    name: "GeoTrust",
    desc: "Geotrust is one of the largest certification authority in the world with a range of SSL certificates suitable for all types of use.",
    type: "PROFESSIONAL",
    path: "/ssl/geotrust",
  },
  {
    name: "Thawte",
    desc: "Thawte's certificates are known for the ongoing upgrading of their various features as a result of customer feedback.",
    type: "INDIVIDUAL",
    path: "/ssl/thawte",
  },
];

const filters = ["ALL", "INDIVIDUAL", "PROFESSIONAL", "ENTERPRISE"];

const SSLDropDown = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredSSL =
    activeFilter === "ALL"
      ? sslProviders
      : sslProviders.filter((item) => item.type === activeFilter);

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
          {filteredSSL.map((ssl, i) => (
            <Link
              key={i}
              to={ssl.path}
              className="group p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:translate-y-[-1px]"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center font-semibold text-blue-600 text-sm">
                  {ssl.name[0]}
                </div>

                <h4 className="font-semibold text-base group-hover:text-blue-600">
                  {ssl.name}
                </h4>
              </div>

              <p className="text-xs text-gray-600 mt-2 leading-snug">
                {ssl.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* RIGHT BLOG */}
        <div className="col-span-3 px-8 py-6 border-l">
          <h5 className="text-[10px] text-gray-500 mb-1">BLOG ARTICLE</h5>

          <h2 className="text-lg font-bold leading-tight">
            Les principales menaces de cybersécurité en 2023
          </h2>

          <Link
            to="/blog/cybersecurity"
            className="inline-block mt-4 px-4 py-1.5 text-sm border rounded-full hover:bg-black hover:text-white transition"
          >
            Discover →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SSLDropDown;
