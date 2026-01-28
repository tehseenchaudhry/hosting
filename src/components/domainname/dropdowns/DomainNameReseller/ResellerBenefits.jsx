import React from "react";
import {
  FiTrendingUp,
  FiGrid,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiTrendingUp size={40} />,
    title: "Attractive prices",
    text: "You get a progressive discount up to 15% based on the volume you purchase.",
  },
  {
    icon: <FiGrid size={40} />,
    title: "Complete management of your domain names",
    text: "You can control and manage all your domain names from an easy-to-use interface.",
  },
  {
    icon: <FiFileText size={40} />,
    title: "API HTTP",
    text: "Our HTTP API allows you to interact with your domain names and carry out registration, renewal and transfer operations straight out of your own platform.",
  },
  {
    icon: <FiSettings size={40} />,
    title: "WHMCS Module",
    text: "We provide you a module allowing you to quickly integrate our API on your WHMCS control platform.",
  },
];

const ResellerBenefits = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto border rounded-3xl p-8 md:p-14 relative">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/features-reseller-ndd.webp"
              alt="Domain reseller benefits"
              className="w-[450px] rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Domain Name Reseller benefits
            </h2>
            <p className="text-lg text-gray-600">
              With Genious Communications, being a domain name reseller will provide you:
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="text-teal-500 shrink-0">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResellerBenefits;
