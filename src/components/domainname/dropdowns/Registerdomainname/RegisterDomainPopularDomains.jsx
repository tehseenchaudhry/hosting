import React from "react";
import { FiArrowDown } from "react-icons/fi";

const domains = [
  { name: ".com", type: "GTLD", price: "$14.50", link: "/en/domain-names/domain-extensions/com" },
  { name: ".org", type: "GTLD", price: "$18.50", link: "/en/domain-names/domain-extensions/org" },
  { name: ".info", type: "GTLD", price: "$18.50", link: "/en/domain-names/domain-extensions/info" },
  { name: ".ma", type: "GTLD", price: "$16.00", link: "/en/domain-names/domain-extensions/ma" },
  { name: ".net", type: "GTLD", price: "$17.00", link: "/en/domain-names/domain-extensions/net" },
  { name: ".app", type: "GTLD", price: "$29.50", link: "/en/domain-names/domain-extensions/app" },
  { name: ".biz", type: "GTLD", price: "$19.00", link: "/en/domain-names/domain-extensions/biz" },
  { name: ".co", type: "GTLD", price: "$43.50", link: "/en/domain-names/domain-extensions/co" },
];

const RegisterDomainPopularDomains = () => {
  return (
    <section className="bg-[#020b3a] text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10">
          The most popular domains ?
        </h2>

        {/* Domain Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <a
              key={index}
              href={domain.link}
              className="bg-white/90 text-gray-900 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{domain.name}</h3>
              <p className="text-sm md:text-base mb-2">{domain.type}</p>
              <div className="border-t border-gray-300 w-full my-2"></div>
              <span className="text-lg md:text-xl font-semibold">{domain.price} per year</span>
            </a>
          ))}
        </div>

        {/* More Extensions Link */}
        <div className="text-center mt-8">
          <a
            href=""
            className="font-semibold underline inline-flex items-center gap-1 justify-center"
          >
            More extensions <FiArrowDown />
          </a>
        </div>

      </div>
    </section>
  );
};



export default RegisterDomainPopularDomains