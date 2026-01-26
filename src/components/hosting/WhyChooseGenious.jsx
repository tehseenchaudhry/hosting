import React from "react";
import { FaChevronRight } from "react-icons/fa";

const WhyChooseGenious = () => {
  const faqs = [
    {
      title: "For domain name registration ?",
      content: `Genious Communications, accredited by ANRT and the first ICANN registrar in North Africa, offers simplified domain management through an intuitive interface.

Easily manage your domains from locking and unlocking to obtaining transfer codes. Enjoy a wide selection of extensions and centralise your domain portfolio with a single provider, backed by a technical team always ready to assist you.`,
    },
    {
      title: "For hosting your website ?",
      content: `Genious Communications supports you at every stage of your digital transformation, whether you’re an individual, a small business, or a large organization. Rely on our high-performance, dependable services, with 100% Moroccan Cloud or VPS solutions hosted in our Tier III data center in Casablanca or opt for international presence with our Canadian datacenter.

We guarantee compliance with Moroccan laws (08-09 and 05-20) and the sovereignty of your data. With 99.99% uptime, our servers are equipped with ultra-fast SSD and NVMe drives, offering speeds of up to 7 GB/s, giving you a real edge over the competition.`,
    },
    {
      title: "For your professional email ?",
      content: `Genious Mail Solution offers businesses reliable, high-quality email.

Each client gets a dedicated IP address, eliminating common email delivery issues. Sync your Genious Webmail contacts and calendars across all your devices (PC/Mac, iOS/Android).`,
    },
    {
      title: "For securing your website ?",
      content: `Genious SSL, Morocco’s first certification sub-authority with over 20 years of web security experience, provides certificates with 2048-bit keys and 256-bit RSA or ECC encryption—compatible with 99.99% of browsers.

Our team supports you through every step of SSL validation, with competitive pricing starting at just 8 MAD/month for top-level security.`,
    },
    {
      title: "For server management ?",
      content: `This service relies on the expertise of our system administrators to ensure your servers and applications run smoothly.

Managed services include entrusting Genious with the management, optimisation, security, and administration of your servers or IT infrastructure.`,
    },
    {
      title: "For technical support ?",
      content: `Benefit from the expertise of our highly qualified team, with over 20 years of experience in web hosting.

Available 24/7 and present in Morocco’s major cities including Marrakech, Casablanca, and Rabat. Genious is always close to your needs. Whether you prefer to communicate in Arabic, French, or English, our support is available through multiple channels: tickets, live chat, or phone.`,
    },
  ];

  return (
    <div className="container mx-auto px-12 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why choose Genious?
      </h2>

      <div className="space-y-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index !== 0 ? "border-t border-gray-300 pt-6 md:pt-10 mt-6 md:mt-10" : ""
            }`}
          >
            <h3 className="md:w-5/12 text-2xl md:text-3xl font-semibold pr-0 md:pr-10 mb-4 md:mb-0">
              {faq.title}
            </h3>
            <p className="md:w-7/12 pl-0 md:pl-10 whitespace-pre-line">
              {faq.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseGenious;
