import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    title: "Domain Names",
    image: "https://www.genious.net/themes/genious_theme/img/home/ndd-pack.webp",
    description: (
      <>
        Start your project with a unique domain name.
        <br />
        Register now and choose from multiple extensions to boost your visibility!
      </>
    ),
    features: ["ICANN Accredited", "ANRT Accredited", "Multiple extensions"],
    price: "12 Dhs ex.VAT",
    buttonText: "Register now",
    link: "https://www.genious.net/en/domain-names",
  },
  {
    title: "Web Hosting",
    image: "https://www.genious.net/themes/genious_theme/img/home/hosting-pack.webp",
    description: (
      <>
        Launch your website with ultra-fast and reliable web hosting!
        <br />
        Our team will help you choose the ideal plan with ease.
      </>
    ),
    features: ["SSD and NVMe drives", "99.99% uptime", "24/7 support"],
    price: "34 Dhs ex.VAT",
    buttonText: "Host my website",
    link: "https://www.genious.net/en/hosting",
  },
  {
    title: "SSL Certificates",
    image: "https://www.genious.net/themes/genious_theme/img/home/ssl-pack.webp",
    description:
      "Ensure the security and confidentiality of all your online transactions and sensitive data.",
    features: ["Multiple levels", "Quick installation", "Support"],
    price: "8 Dhs ex.VAT",
    buttonText: "Secure my website",
    link: "https://www.genious.net/en/ssl-certificates",
  },
];

const DiscoverOurWebHosting = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 py-16">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-7xl font-bold mb-12">
        Discover our web hosting and domain name solutions
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-contain mb-4"
            />

            <h3 className="text-3xl font-bold mb-3">
              {card.title}
            </h3>

            <p className="text-gray-800 mb-4 text-lg">
              {card.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-4">
              {card.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-white bg-blue-500 rounded-full border border-blue-500" />
                  <span className="font-medium text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Price */}
            <p className="mt-auto mb-4 text-gray-700">
              Starting at
              <div className="flex gap-2  text-2xl font-bold">
                {card.price}
               <span className="text-xl font-semibold">
              /mo
               </span>
              </div>
            </p>

            {/* Button */}
            <a
              href={card.link}
              className="flex items-center justify-center gap-2 border border-transparent bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-black hover:text-white transition"
            >
              {card.buttonText}
              <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};



export default DiscoverOurWebHosting