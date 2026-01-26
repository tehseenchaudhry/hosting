import React from "react";
import {
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { SiBisecthosting } from "react-icons/si";
import { BsBoxSeam } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";




const services = [
  {
    title: "Web Hosting Morocco",
    description:
      "Host your sensitive data on a secure Moroccan cloud, compliant with CNDP laws, guaranteeing digital sovereignty, legal compliance and high availability through a local datacenter.",
    price: "209 Dhs ex.VAT",
    linkText: "Host in Morocco",
    link: "",
    icon: <SiBisecthosting  />,
  },
  {
    title: "Mail solution",
    description:
      "Since online messaging is the main communication channel today, we provide you with a complete suite of advanced email and online collaboration tools.",
    price: "21 Dhs ex.VAT",
    linkText: "See offers",
    link: "",
    icon: <FaEnvelope />,
  },
  {
    title: "Resellers",
    description:
      "Our reseller plans are designed for businesses and individuals who want to offer web hosting services while benefiting from all the resources and advantages of Genious Communications.",
    price: "299 Dhs ex.VAT",
    linkText: "Become a reseller",
    link: "",
    icon: <BsBoxSeam />,
  },
  {
    title: "Managed Services",
    description:
      "Our managed services include full management, security, and maintenance of your infrastructure so you can focus on your core business with peace of mind and efficiency.",
    price: "8 Dhs ex.VAT",
    linkText: "See offers",
    link: "",
    icon: <FaClockRotateLeft />,
  },
];

const AdditionalServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 pb-9">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-medium mb-12 mt-5">
        Additional services for individuals and professionals
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col"
          >
            {/* Icon */}
            <div className="text-[#1137ab] text-4xl mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">
              {service.description}
            </p>

            {/* Price */}
            <p className="text-sm text-gray-700 mt-auto mb-3">
              Starting at
              <span className="block text-xl font-bold">
                {service.price}
              </span>
              /mo
            </p>

            {/* Link */}
            <a
              href={service.link}
              className="inline-flex items-center gap-2 text-sm underline font-medium hover:text-blue-600 transition"
            >
              {service.linkText}
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalServices;
