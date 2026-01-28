import React from "react";

const partners = [
  { src: "https://www.genious.net/themes/genious_theme/img/ndd/logos/icann.svg", alt: "icann" },
  { src: "https://www.genious.net/themes/genious_theme/img/ndd/logos/verisign.svg", alt: "verisign" },
  { src: "https://www.genious.net/themes/genious_theme/img/ndd/logos/africa.svg", alt: "africa" },
  { src: "https://www.genious.net/themes/genious_theme/img/ndd/logos/pir.svg", alt: "pir" },
  { src: "https://www.genious.net/themes/genious_theme/img/ndd/logos/afilias.svg", alt: "afilias" },
  { src: "https://www.genious.net/themes/genious_theme/img/ndd/logos/anrt.svg", alt: "anrt" },
];

const WhatIsADomainName = () => {
  return (
    <>
      {/* ===== Partners Section ===== */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-6">

            <p className="text-base md:text-lg font-medium text-center lg:text-left">
              Our Partners and Accreditations
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {partners.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== What is a Domain Name Section ===== */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image Column */}
            <div className="md:order-2">
              <div className="relative flex justify-center">
                <img
                  src="https://www.genious.net/themes/genious_theme/img/ndd/why-ndd.webp"
                  alt="Pourquoi est-il nécessaire d’avoir un nom de domaine"
                  className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain relative z-10 rounded-2xl"
                />

                {/* Decorative Dots */}
                <svg className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-32 h-32 opacity-80">
                  <use xlinkHref="/themes/genious_theme/img/sprite.svg#dots-blue" />
                </svg>
              </div>
            </div>

            {/* Text Column */}
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold">
                What is a domain name ?
              </h2>

              <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
                All websites are hosted on servers connected to the Internet and
                are accessible through a series of numbers called IP addresses.
              </p>

              <img
                src="https://www.genious.net/themes/genious_theme/img/ndd/sample-ndd-en.svg"
                alt="Qu’est ce qu’un nom de domaine"
                className="h-36 md:h-48 w-auto object-contain"
              />

              <p className="text-gray-600 mt-6 leading-relaxed">
                These IP addresses are difficult to remember, that's why domain
                names were invented to allow your visitors to easily remember
                your website.
                <br />
                <br />
                A domain name is composed of a sub-domain, a name and an
                extension also called TLD.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsADomainName;
