import React from "react";
import { FiArrowRight } from "react-icons/fi";

const offers = [
  {
    title: "Register your domain name",
    desc: "Check the availability of your domain name with the extensions of your choice and register it in a few clicks thanks to our search tool.",
    link: "",
    cta: "Register my domain name",
  },
  {
    title: "Transfer your domain name",
    desc: "Streamline the management of all your domain names by centralising them at Genious Communications and take advantage of numerous benefits.",
    link: "",
    cta: "Transfer my domain name",
  },
  {
    title: "Domain name reseller",
    desc: "With our Domain Name Reseller packages, you benefit from attractive discounts and a central management of all your domain names.",
    link: "",
    cta: "Become reseller",
  },
  {
    title: "Domain brokerage service",
    desc: "Genious can serve as an intermediate between you and the holder of a domain name already registered in order to negotiate its acquisition for you anonymously and at the best possible price.",
    link: "",
    cta: "Request a brokerage service",
  },
  {
    title: "Domain name recovery",
    desc: "Genious Communications will assist you through the process of recovering your lost or cyber squatted domain name.",
    link: "",
    cta: "Recover My Domain",
  },
  {
    title: "Domain name protection",
    desc: "Genious Communications assists companies in the management of their domain names portfolio and the protection of their brands and internet identity.",
    link: "",
    cta: "Protect my brand",
  },
  {
    title: "Extensions",
    desc: "Explore a number of different domain name extensions (.ma, .com, .net, .org ...) and select the ones that suit you best.",
    link: "",
    cta: "Choose my extension",
  },
];

const DomainOffers = () => {
  return (
    <section id="offers" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
          Our offers <br /> for domain names
        </h2>

        {/* Image */}
        <img
          src="https://www.genious.net/themes/genious_theme/img/ndd/twice-slider.webp"
          alt="Pourquoi est-il nécessaire d’avoir un nom de domaine"
          className="rounded-xl object-contain mb-10"
        />

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12">
          {offers.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-3">
                <a href={item.link} className="hover:underline">
                  {item.title}
                </a>
              </h3>

              {/* Separator (desktop only) */}
              <div className="hidden md:block h-[2px] w-10 bg-gray-300 my-4"></div>

              <p className="text-gray-600 mb-4">
                {item.desc}
              </p>

              <a
                href={item.link}
                className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-blue-600"
              >
                {item.cta}
                <FiArrowRight className="text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainOffers;
