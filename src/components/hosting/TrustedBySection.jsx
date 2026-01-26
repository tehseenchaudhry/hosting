import React from "react";
import { FaAngleRight } from "react-icons/fa6"; 

const TrustedBySection = () => {
  return (
    <div className="container mx-auto px-6  border-b py-20">
      <div className="text-center">
        <p className="text-4xl font-bold mb-8 mt-0">Trusted by</p>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-4">
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/2m.webp"
            alt="2m"
            className="w-28 h-14 object-contain"
          />
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/medi1.webp"
            alt="medi1"
            className="w-28 h-14 object-contain"
          />
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/lematin.webp"
            alt="lematin"
            className="w-28 h-14 object-contain"
          />
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/hespress.webp"
            alt="hespress"
            className="w-28 h-14 object-contain"
          />
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/danone.webp"
            alt="danone"
            className="w-28 h-14 object-contain"
          />
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/tria.webp"
            alt="tria"
            className="w-28 h-14 object-contain"
          />
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/ocp.webp"
            alt="ocp"
            className="w-28 h-14 object-contain"
          />
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/renault.webp"
            alt="renault"
            className="w-28 h-14 object-contain"
          />
          <img
            src="https://www.genious.net/themes/genious_theme/img/home/logos/axa.webp"
            alt="axa"
            className="w-28 h-14 object-contain "
          />
        </div>

        <a
          href=""
          className="mt-6 inline-flex items-center gap-2 font-bold border-b-2"
        >
          Our clients
          <FaAngleRight />
        </a>
      </div>
    </div>
  );
};

export default TrustedBySection;
