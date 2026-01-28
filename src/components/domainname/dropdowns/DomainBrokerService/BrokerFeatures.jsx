import React from "react";
import {
  HiOutlineDotsHorizontal,
  HiOutlineChatAlt2,
  HiOutlineEyeOff,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
} from "react-icons/hi";

const BrokerFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="relative border border-gray-200 rounded-2xl p-8 md:p-12">

        {/* ===== Head Section ===== */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left */}
          <div className=" md:w-1/2 z-50">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/broker-slider.webp"
              alt="Broker service"
              className="w-full max-w-sm mx-auto rounded-xl  "
            />
            {/* <div className=" h-40 w-40 rounded-full bg-blue-200 text-5xl">
              <HiOutlineDotsHorizontal /> 
            </div> */}
          </div>

          {/* Right */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why use Genious Communications broker service?
            </h2>
            <p className="text-gray-600 text-lg">
              Thanks to our extensive experience in the web industry and our
              domain name business knowledge, Genious Communications can help
              you avoid traps and common mistakes related to the purchase of a
              domain name and manage the whole process on your behalf:
            </p>
          </div>
        </div>

        {/* ===== Features Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

          {/* Item */}
          <div className="flex gap-5">
            <HiOutlineDotsHorizontal className="text-5xl text-teal-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Making contact</h3>
              <p className="text-gray-600">
                An expert will be assigned to assess the value of the domain
                name, identify its actual owner, and initiate the discussion
                about the domain name buyout.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <HiOutlineChatAlt2 className="text-5xl text-teal-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Negotiations</h3>
              <p className="text-gray-600">
                Our experts use effective and tested methods to negotiate the
                buyout price within your budget and complete the sale in the
                shortest time possible.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <HiOutlineEyeOff className="text-5xl text-teal-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Discretion</h3>
              <p className="text-gray-600">
                We keep your identity private to avoid revealing your interest
                in the domain name and to not influence the purchase price
                during the negotiations.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <HiOutlineShieldCheck className="text-5xl text-teal-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure transaction</h3>
              <p className="text-gray-600">
                You only deal with Genious Communications throughout the entire
                negotiation and sales process up until the domain name is
                transferred to your account.
              </p>
            </div>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="mt-14">
          <a
            href=""
            className="inline-flex items-center gap-3 bg-blue-500  px-6 py-5 rounded-xl font-medium hover:bg-[#020c2b] text-white transition-colors duration-300"
          >
            Request a brokerage service
            <HiOutlineArrowRight />
          </a>
        </div>

      </div>
    </div>
  );
};

export default BrokerFeatures;
