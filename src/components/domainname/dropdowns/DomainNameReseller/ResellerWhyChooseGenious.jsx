import React from "react";

const benefits = [
  {
    text: (
      <>
        You have the choice from a wide variety of{" "}
        <a
          href=""
          className="underline font-semibold"
        >
          domain name extensions
        </a>
        .
      </>
    ),
  },
  {
    text: "You have an efficient support team to assist you with any request 7 days a week;",
  },
  {
    text: "You have several payment methods.",
  },
];

const ResellerWhyChooseGenious = () => {
  return (
    <section className="lg:px-26 py-20 px-3">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-5/12 mb-6 md:mb-0 md:order-first relative">
            <div className="dots-container relative">
              <img
                src="https://www.genious.net/themes/genious_theme/img/ndd/why-reseller-genious.webp"
                alt="Avantages du pack Revendeur de Noms de domaine"
                className="w-[80vh] h-[90vh] z-10 rounded-xl"
                height={300}
                width={300}
              />

           
            </div>
          </div>

          {/* Content */}
          <div className="md:w-7/12 md:pl-10">
            <h2 className="text-3xl md:text-4xl font-bold">Why choose Genious Communications ?</h2>
            <p className="mt-3 mb-6 text-lg md:text-xl">
              Not only you entrust your domain names to an organisation with many years of experience in domain names management that is accredited by ICANN and ANRT, but:
            </p>

            <div className="grid md:grid-cols-2 gap-y-4 gap-x-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-4 flex-shrink-0" fill="currentColor">
                    <use xlinkHref="/themes/genious_theme/img/sprite.svg#check-black" />
                  </svg>
                  <p className="text-base md:text-lg">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default ResellerWhyChooseGenious