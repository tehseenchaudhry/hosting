import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "System Administration",
    desc: "Genious Communications provides, through a specialized team, the administration and management of your systems and IT resources by installing and monitoring your servers.",
    type: "ENTERPRISE",
    path: "/managed-services/system-administration",
  },
  {
    title: "Backup",
    desc: "Genious Communications can backup your data in an automatic and secure way by using our backup solutions.",
    type: "PROFESSIONAL",
    path: "/managed-services/backup",
  },
  {
    title: "Migration",
    desc: "Migrate your websites, applications, databases and servers with Genious Communications safely and effortlessly.",
    type: "PROFESSIONAL",
    path: "/managed-services/migration",
  },
  {
    title: "Wordpress Maintenance",
    desc: "Genious Communications keeps your WordPress powered website running smoothly through proper optimization and ongoing maintenance.",
    type: "INDIVIDUAL",
    path: "/managed-services/wordpress-maintenance",
  },
  {
    title: "SLA",
    desc: "Our SLA covers four key aspects that guarantee the availability of your platform.",
    type: "ENTERPRISE",
    path: "/managed-services/sla",
  },
];

const filters = ["ALL", "INDIVIDUAL", "PROFESSIONAL", "ENTERPRISE"];

const ManagedServicesDropDown = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredServices =
    activeFilter === "ALL"
      ? services
      : services.filter((item) => item.type === activeFilter);

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

        {/* CENTER SERVICES */}
        <div className="col-span-7 px-8 py-6 grid grid-cols-2 gap-5">

          {filteredServices.map((item, i) => (
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

          {filteredServices.length === 0 && (
            <p className="text-gray-400 text-sm">No services found.</p>
          )}

        </div>

        {/* RIGHT BLOG */}
        <div className="col-span-3 px-8 py-6 border-l">
          <h5 className="text-[10px] text-gray-500 mb-1">BLOG ARTICLE</h5>

          <h2 className="text-lg font-bold leading-tight">
            5 tendances social media à suivre en 2022
          </h2>

          <Link
            to="/blog/social-media-trends"
            className="inline-block mt-4 px-4 py-1.5 text-sm border rounded-full hover:bg-black hover:text-white transition"
          >
            Discover →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ManagedServicesDropDown;
