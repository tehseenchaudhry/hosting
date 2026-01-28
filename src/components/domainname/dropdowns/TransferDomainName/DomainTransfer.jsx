import React from "react";
import { FiSend, FiLayers, FiHeadphones } from "react-icons/fi";

const transferFeatures = [
  {
    icon: <FiSend className="text-5xl text-blue-400 mb-4" />,
    title: "Easy management",
    desc: "You can, thanks to an intuitive interface, configure both your DNS and Nameservers, change WHOIS information, lock/unlock your domain names and obtain your transfer codes (EPP).",
  },
  {
    icon: <FiLayers className="text-5xl text-blue-400 mb-4" />,
    title: "Centralize your domains",
    desc: "Make your life easier by centralising your domain names at a single provider. With more than 350 extensions at your disposal, it will become simpler for you to manage all of your domain names.",
  },
  {
    icon: <FiHeadphones className="text-5xl text-blue-400 mb-4" />,
    title: "A 24-hour support",
    desc: "Our support team assists you with any technical or administrative issues relating to your domain names.",
  },
];

const DomainTransfer = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-blue-50">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12 gap-8">
        <div className="md:w-1/2 relative">
          <img
            src="https://www.genious.net/themes/genious_theme/img/ndd/broker-slider.webp"
            alt="Pourquoi transférer votre nom de domaine chez Genious"
            className="w-full max-w-md rounded-xl relative z-10"
          />
          {/* Decorative dots */}
          <div className="hidden md:block absolute -left-8 top-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-7xl font-bold mb-6 pt-3">
            Why transfer your domain name to Genious?
          </h2>
          <p className="text-gray-700 mb-4">
            Genious is the leader in .ma registrations and the first registrar to be ICANN accredited in North Africa.
          </p>
          <p className="text-gray-700">
            Transfer your domain name to us and benefit from many advantages:
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {transferFeatures.map((feature, index) => (
          <div key={index} className="flex flex-col items-start">
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DomainTransfer;
