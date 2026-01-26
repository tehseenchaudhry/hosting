import React from "react";
import { FaAngleRight } from "react-icons/fa6"; 

const WebHostingMorocco = () => {
  return (
    <div className="px-6 md:px-12 py-12 bg-[#0d1f47] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 lg:mb-0">Web Hosting in Morocco</h2>
          
          {/* Morocco SVG Placeholder */}
          <div className="opacity-50 w-36 h-12">
            {/* Replace with actual React SVG or image */}
            <svg className="w-full h-full">
              <use xlinkHref="/themes/genious_theme/img/sprite.svg#kingdom-of-morocco"></use>
            </svg>
          </div>
        </div>

        <p className="border-b border-gay-300 mb-6 pb-3 text-xl">Go local, host your data in Morocco.</p>

        {/* Left Column */}
        <div className="lg:flex lg:gap-8 mb-8">
          <div className="lg:w-1/3 flex flex-col h-full mb-6 lg:mb-0 ">
            <p className="font-semibold text-lg mb-4">Data proximity and sovereignty</p>
            <a
              href=""
              className="inline-flex items-center justify-center gap-2  py-4 w-50  text-lg font-semibold  bg-white text-[#0d1f47] transition rounded-xl mt-5"
            >
              Host in Morocco <FaAngleRight className="mt-0.5" />
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <div className="lg:flex lg:gap-6">
              <div className="lg:w-1/2">
                <p className="mb-4">
                  Genious offers data hosting solutions in Morocco through a Tier III-certified datacenter, guaranteeing customised web hosting services designed to meet your needs.
                  <br />
                  <br />
                  In line with the Digital Morocco 2030 national strategy, we support your digital transformation with a 100% Moroccan cloud and local VPS solutions, fully compliant with international standards for privacy and performance.
                </p>
              </div>

              <div className="lg:w-1/2 pt-4 lg:pt-0">
                <p className="mb-4">
                  By choosing web hosting in Morocco, you comply with local digital sovereignty requirements, which mandate the hosting of sensitive data like government, universities, and other public institutions within the country, thereby strengthening national cybersecurity.
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className="flex justify-between items-center font-semibold hover:pl-2 transition"
                  >
                    Colocation <FaAngleRight />
                  </a>
                  <hr className="border-white" />

                  <a
                    href=""
                    className="flex justify-between items-center font-semibold hover:pl-2 transition"
                  >
                    Shared Hosting <FaAngleRight />
                  </a>
                  <hr className="border-white" />

                  <a
                    href=""
                    className="flex justify-between items-center font-semibold hover:pl-2 transition"
                  >
                    Dedicated <FaAngleRight />
                  </a>
                  <hr className="border-white" />

                  <a
                    href=""
                    className="flex justify-between items-center font-semibold hover:pl-2 transition"
                  >
                    Cloud <FaAngleRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};




export default WebHostingMorocco;
