import React from "react";
import {
  FiRepeat,
  FiShield,
  FiSettings,
  FiFileText,
} from "react-icons/fi";

const services = [
  {
    icon: <FiRepeat />,
    title: "Redirections(*)",
    desc: "Quick set up and management of all your web and email redirections.",
  },
  {
    icon: <FiShield />,
    title: "ID Protection(*)",
    desc: "With the privacy option, your public Whois information (Last Name, First Name, address, etc.) linked to your domain name is masked.",
  },
  {
    icon: <FiSettings />,
    title: "DNS management",
    desc: "You can manage all your DNS records in your customer area and have full control over the management of your domain name.",
  },
  {
    icon: <FiFileText />,
    title: "Certificate of ownership",
    desc: "For .ma domain names, you can have a certificate of ownership that proves you are the owner of the domain name in question.",
  },
];

const DomainServices = () => {
  return (
    <section className="bg-[#eaf3ff] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
              Services available with your <br /> domain name
            </h2>

            <div className="grid grid-cols-2 gap-6 md:gap-10">
              {services.map((item, index) => (
                <div key={index}>
                  <div className="text-blue-400 text-3xl mb-3 md:mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-gray-500 mt-6 md:mt-10">
              (*)This option is not applicable to .ma domain names.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative w-full flex justify-center mt-10 md:mt-0">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/why-ndd-gs.webp"
              alt="Pourquoi est-il nécessaire d’avoir un nom de domaine"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl relative z-10 object-contain"
            />

            {/* Decorative Dots */}
            <div className="hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>

            {/* Decorative Shape */}
            <div className="hidden md:block absolute right-0 -bottom-10 w-24 h-24 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainServices;
