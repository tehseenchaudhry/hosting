import React from "react";

const ToProtectAgainstWhat = () => {
  return (
    <section className="px-6 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="border rounded-2xl p-8 md:p-14 relative">

          {/* Image + Dots */}
          <div className="relative w-fit mx-auto md:mx-0 ">
            <img
              src="https://www.genious.net/themes/genious_theme/img/ndd/twice-champ.webp"
              alt="Protection de marque"
              className="relative z-10 w-full rounded-xl  h-auto "
            />

            {/* Decorative Dots */}
            <div className="hidden md:block absolute -left-10 -top-6 w-24 h-24 bg-blue-200 rounded-full opacity-50" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mt-8 md:mt-10 mb-4">
            To protect against what?
          </h2>

          <p className="text-gray-600 max-w-3xl">
            Scamming practices such as Phishing and Cybersquatting that can harm
            both your brand and your customers.
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 mt-10">

            {/* Cybersquatting */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Cybersquatting
              </h3>

              <p className="text-gray-600 leading-relaxed">
                A practice that consists in buying or registering a domain name
                that is similar to a registered trademark in order to benefit
                from the brand’s notoriety or take unfair advantage of it.
                <br /><br />
                It can occur in many different guises, the most common form is
                registering domain names using the non-registered domain
                extensions.
              </p>
            </div>

            {/* Phishing */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Phishing
              </h3>

              <p className="text-gray-600 leading-relaxed">
                A practice of creating and registering domain names identical or
                similar to a company’s name or trademark in order to trick people
                and gather their personal data which may cause identity theft or
                financial loss.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};




export default ToProtectAgainstWhat