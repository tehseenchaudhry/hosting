import React from "react";
import { FiRepeat, FiShield, FiSettings, FiFileText } from "react-icons/fi";

const services = [
  {
    icon: <FiRepeat className="text-blue-400 text-4xl mb-4" />,
    title: "Redirections(*)",
    desc: "Quick set up and management of all your web and email redirections.",
  },
  {
    icon: <FiShield className="text-blue-400 text-4xl mb-4" />,
    title: "ID Protection(*)",
    desc: "With the privacy option, your public Whois information (Last Name, First Name, address, etc.) linked to your domain name is masked.",
  },
  {
    icon: <FiSettings className="text-blue-400 text-4xl mb-4" />,
    title: "DNS management",
    desc: "You can manage all your DNS records in your customer area and have full control over the management of your domain name.",
  },
  {
    icon: <FiFileText className="text-blue-400 text-4xl mb-4" />,
    title: "Certificate of ownership",
    desc: "For .ma domain names, you can have a certificate of ownership that proves you are the owner of the domain name in question.",
  },
];

const RegisterDomainServicesSection = () => {
  return (
    <section className="bg-[#eaf3ff] py-16 px-6 md:px-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Right Image */}
        <div className="w-full md:w-5/12 order-first md:order-last">
          <div className="relative">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/include.webp"
              alt="Pourquoi est-il nécessaire d’avoir un nom de domaine"
              className="w-full h-auto rounded-xl object-contain"
            />
            {/* Dots Decoration */}
            <div className="hidden md:block absolute -left-10 top-10 w-20 h-20 bg-blue-200 rounded-full opacity-40"></div>
            <div className="hidden md:block absolute right-0 bottom-0 w-28 h-28 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Left Services */}
        <div className="w-full md:w-7/12 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Services available with your <br /> domain name
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((item, index) => (
              <div key={index} className="flex flex-col">
                {item.icon}
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-8">
            (*)This option is not applicable to .ma domain names.
          </p>
        </div>
      </div>
    </section>
  );
};




export default RegisterDomainServicesSection