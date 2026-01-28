import React from "react";
import { FiMessageCircle, FiPhone, FiArrowRight } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


const DomainNameContactUsBlock = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
        
        <p className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          Do you have more questions about this product ?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

          {/* Chat */}
          <div className="md:col-span-1 md:col-start-1 md:col-end-2">
            <div className="flex flex-col items-center">
              <IoChatbubbleEllipsesOutline className="text-6xl mb-4" />
              <p className="mb-2">You can talk to one of our agents :</p>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-blue-600"
              >
                Let's chat
                <FiArrowRight className="text-sm" />
              </a>
            </div>
          </div>

          {/* Vertical Separator (Desktop only) */}
          <div className="hidden md:flex justify-center">
            <div className="w-px h-24 bg-gray-300"></div>
          </div>

          {/* Phone */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center">
              <FiPhone className="text-5xl mb-4" />
              <p className="mb-2">You can give us a call :</p>
              <span className="text-xl font-semibold">
                +212 (05) 24 29 87 00
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};




export default DomainNameContactUsBlock