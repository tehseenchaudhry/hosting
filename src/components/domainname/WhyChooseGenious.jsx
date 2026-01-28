import React from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuFileCheck } from "react-icons/lu";
import { TbCubePlus } from "react-icons/tb";
import { MdOutlineHeadsetMic } from "react-icons/md";



const benefits = [
  {
    icon: <FaClockRotateLeft className="w-12 h-12 pb-3"/>,
    text: "Immediate activation of your domain name",
  },
  {
    icon: <LuFileCheck className="w-12 h-12 pb-3"/>,
    text:"Simplified management of your domain name from your customer area",
  },
  {
    icon:<TbCubePlus className="w-12 h-12 pb-3"/>,
    text: "A wide choice of extensions at the best price",
  },
  {
    icon: <MdOutlineHeadsetMic className="w-12 h-12 pb-3"/>,
    text: "24/7 proactive support",
  },
];

const WhyChooseGenious = () => {
  return (
    <section className="bg-[#020b3a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image + Dots */}
          <div className="md:pr-12">
            <div className="relative">
              <img
                src="https://www.genious.net/themes/genious_theme/img/gs/why-gs.webp"
                alt="Pourquoi est-il nécessaire d’avoir un nom de domaine"
                className="w-[600px] h-[400px] object-contain relative z-10 rounded-xl"
              />

              <svg className="absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-32 opacity-80">
                <use xlinkHref="/themes/genious_theme/img/sprite.svg#dots-blue" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="md:pl-12 mt-4 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why choose Genious?
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Genious Communications is the first ICANN accredited registrar in
              North Africa.
              <br />
              <br />
              By registering your domain name with Genious, you benefit from :
            </p>
          </div>
        </div>

        {/* Benefits Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {benefits.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-blue-400 ">
                {item.icon} 
              </div>

              <p className="text-lg text-gray-200">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseGenious;
