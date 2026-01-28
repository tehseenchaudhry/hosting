import React from "react";
import { FiArrowRight } from "react-icons/fi";

const PreventionDefense = () => {
  return (
    <section className="bg-[#020c2b]  text-white px-6 lg:px-24 py-20 mt-24">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Prevention remains the best defense
            </h2>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">

              {/* Primary Button */}
              <a
                href=""
                className="inline-flex items-center gap-2  bg-white px-8 py-4 text-sm font-semibold rounded transition-colors duration-300 hover:bg-gray-400  text-[#0b1b33]"
              >
                Protect my brand
                <FiArrowRight size={16} />
              </a>

              {/* Secondary Link */}
              <a
                href=""
                className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 hover:opacity-80"
              >
                Recover my domain name
                <FiArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-lg leading-relaxed text-gray-200">
              Genious Communications, with over 20 years of experience in the Web
              industry, and following a detailed analysis, offers you a list of
              domains to register in order to reduce the risks linked to these
              threats as much as possible.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PreventionDefense;
