import React from "react";
import { FiMousePointer, FiBox, FiHeadphones } from "react-icons/fi";

const advantages = [
  {
    icon: <FiMousePointer className="text-blue-400 text-5xl mb-4" />,
    title: "Easy management of your domain name",
    desc: "Fully manage your domain names from an intuitive interface and perform frequent operations by yourself at any time (Lock/Unlock, Transfer Code Retrieval and more).",
  },
  {
    icon: <FiBox className="text-blue-400 text-5xl mb-4" />,
    title: "Diversified choice of extensions",
    desc: "Choose from hundreds of extensions and centralize your domain names with a single provider.",
  },
  {
    icon: <FiHeadphones className="text-blue-400 text-5xl mb-4" />,
    title: "Support",
    desc: "Our support team is always at your service and helps you with all your requests related to your domain names and their management.",
  },
];

const WhyRegisterDomain = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://www.genious.net/themes/genious_theme/img/solutions-mail/why-microsoft.webp"
            alt="Pourquoi enregistrer votre nom de domaine chez Genious Communications"
            className="w-full h-[70vh] rounded-xl object-contain"
          />
          {/* Dots Decoration */}
          <div className="hidden md:block absolute -left-5 top-10 w-20 h-20 bg-blue-200 rounded-full opacity-40"></div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why register your domain name at Genious Communications?
          </h2>
          <p className="text-gray-600">
            Genious Communications is accredited by the ANRT (National Telecommunications Regulatory Agency) and is the first ICANN (Internet Corporation for Assigned Names and Numbers) accredited organization in North Africa!
            <br /><br />
            By choosing Genious Communications, you benefit from the following advantages:
          </p>
        </div>
      </div>

      {/* Advantages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            {item.icon}
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyRegisterDomain;
