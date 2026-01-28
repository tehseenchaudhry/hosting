import React from "react";
import { FiRepeat, FiShield, FiMail, FiFileText } from "react-icons/fi";

const transferPoints = [
  {
    icon: <FiRepeat className="text-4xl text-blue-500 mb-4" />,
    title: "Unlock your domain name",
    desc: "You need to make sure the domain name is unlocked at your previous provider.",
  },
  {
    icon: <FiShield className="text-4xl text-blue-500 mb-4" />,
    title: "EPP code",
    desc: "Get your transfer code (also called EPP code) from your existing provider.",
  },
  {
    icon: <FiMail className="text-4xl text-blue-500 mb-4" />,
    title: "Contact Address",
    desc: "Make sure that the current domain name owner's email address is a valid one, as an email message will be emailed to that address to confirm the transfer.",
  },
  {
    icon: <FiFileText className="text-4xl text-blue-500 mb-4" />,
    title: "Transfer terms and conditions",
    desc: (
      <>
        <p>A generic domain name (gTLD) cannot be transferred if:</p>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
          <li className="text-xl font-bold pt-5">The domain was registered or transferred within the last 60 days.</li>
          <li className="text-xl font-bold pt-5">The registrant (holder) contact information was modified within the last 60 days.</li>
        </ul>
      </>
    ),
  },
];

const TransferInfoDomain = () => {
  return (
    <section className="py-16 px-6 md:px-24 ">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-3xl md:text-4xl font-semibold mb-10 text-center md:text-left">
          What you need to know before transferring a domain name.
        </h4>

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left Content */}
          <div className="md:w-7/12">
            <p className="text-gray-700 mb-8">
              Before you transfer your domain name to Genious Communications, you need to check a few points:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {transferPoints.map((point, index) => (
                <div key={index}>
                  <div>{point.icon}</div>
                  <h5 className="text-xl font-semibold mb-2">{point.title}</h5>
                  <div className="text-gray-600 text-sm">{point.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-5/12 relative">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/how-transfer.webp"
              alt="Les points à vérifier avant de transférer un nom de domaine"
              className="w-full rounded-xl relative z-10"
            />

            {/* Decorative dots */}
            <div className="hidden md:block absolute -left-8 top-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>

            {/* Decorative half-circle */}
            <div className="hidden md:block absolute -right-16 -bottom-10 w-32 h-32 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default TransferInfoDomain