import React from "react";

const steps = [
  {
    number: "1",
    desc: (
      <>
        Enter the domain name to be transferred on{" "}
        <a href="#simpledomainsearchform" className="font-semibold underline">
          the top search bar of this page
        </a>.
      </>
    ),
  },
  {
    number: "2",
    desc: "Enter the EPP code when requested.",
  },
  {
    number: "3",
    desc: "Click on the link that you will get by email to confirm the transfer.",
  },
  {
    number: "4",
    desc: "It usually takes 5 to 7 days for the transfer to be completed.",
  },
];

const HowdoITransferMyDomainName = () => {
  return (
    <section className="bg-[#020c2b] text-white py-16 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-5xl font-semibold">
              How do I transfer my domain name to Genious?
            </h3>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed">
              Once you have completed the above procedures, and obtained your
              transfer code (EPP) from your current provider, you can start the
              transfer of your domain name:
            </p>
          </div>
        </div>

        {/* Steps with Image */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/steps-transfer.webp"
              alt="Ce qu’il vous reste à faire"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Steps */}
          <div className="md:w-1/2 grid grid-cols-2 gap-x-6 gap-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-5xl md:text-6xl font-bold border-4 border-white w-16 h-16 flex items-center justify-center rounded-full">
                  {step.number}
                </span>
                <p className="mt-3 text-white text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



export default HowdoITransferMyDomainName