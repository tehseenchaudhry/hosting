import React from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const commitments = [
  "Reviewing your trademark, your pre-existing rights and also the rights of the holder of the disputed domain name.",
  "Providing expert advice and guidance.",
  "Providing a detailed cost estimate.",
  "Initiating the UDRP procedure.",
  "Ensuring the follow-up of the case.",
];

const DomainRetrievalCommitment = () => {
  return (
    <section className="bg-[#0b1c2d] text-white px-6 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h3 className="text-3xl md:text-5xl font-semibold mb-12">
          In order to recover the cyber-squatted domain name, Genious
          Communications is committed to
        </h3>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/genious-engage.webp"
              alt="Genious commitment"
              className="w-[280px] md:w-[320px]"
            />
          </div>

          {/* Checklist + Button */}
          <div>
            <ul className="space-y-5 mb-10">
              {commitments.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <FaCheck className="text-white text-lg mt-1" />
                  <p className="leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <a
              href=""
              className="inline-flex items-center gap-3 border border-white px-8 py-4 font-semibold transition-colors duration-300 hover:bg-white hover:text-[#0b1c2d] rounded-xl"
            >
              Recover My Domain
              <FaArrowRight className="text-sm" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};



export default DomainRetrievalCommitment