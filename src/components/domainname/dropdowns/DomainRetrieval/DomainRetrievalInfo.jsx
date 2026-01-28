import React from "react";

const DomainRetrievalInfo = () => {
  return (
    <section className="px-6 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-5 items-center pb-12">

          {/* Image + Dots */}
          <div className="relative flex justify-center md:justify-start">
            <img
              src="https://www.genious.net/themes/genious_theme/img/solutions-mail/06.webp"
              alt="Genious recovers your domain name"
              className="relative z-10 w-[280px] md:w-[400px] rounded-xl ml-5"
            />

            {/* Decorative dots */}
            <div className="absolute -left-6 top-5 -translate-y-1/2 hidden md:block">
              <div className="w-24 h-24 bg-black/10 rounded-full" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Genious communications recovers your domain name!
            </h2>

            <p className="text-gray-700 leading-relaxed">
              As a major business asset, your brand is frequently the subject of
              criminal activity.
              <br /><br />
              In Morocco and elsewhere, domain names are attributed to those who
              first apply for registration. This leads to many cases of{" "}
              <a
                href="https://www.genious.net/en/domain-names/brand-protection"
                className="underline font-semibold"
              >
                Cybersquatting
              </a>{" "}
              or{" "}
              <a
                href="https://www.genious.net/en/domain-names/brand-protection"
                className="underline font-semibold"
              >
                Phishing
              </a>{" "}
              in which malevolent people use a brand as a domain name in an effort
              to deceive customers or to resell the domain name back to the
              original brand owners.
            </p>
          </div>
        </div>

        {/* Divider Section 1 */}
        <div className="grid md:grid-cols-12 gap-6 border-t border-gray-300 pt-8 mt-8">
          <h3 className="md:col-span-5 text-2xl font-semibold">
            How do you prevent abusive domain name registration and trademark
            usurpation?
          </h3>

          <p className="md:col-span-7 text-gray-700 leading-relaxed">
            Genious Communications has set up an expert team to recover domain
            names that have been subject to cybersquatting, whatever the
            extension under which they are registered, using a procedure known
            as the UDRP (Uniform Domain Name Dispute Resolution Policy).
          </p>
        </div>

        {/* Divider Section 2 */}
        <div className="grid md:grid-cols-12 gap-6 border-t border-gray-300 pt-8 mt-10">
          <h3 className="md:col-span-5 text-2xl font-semibold">
            What is the UDRP?
          </h3>

          <p className="md:col-span-6 text-gray-700 leading-relaxed">
            The UDRP is an international domain name dispute resolution procedure
            adopted by ICANN and managed by the World Intellectual Property
            Organization's (WIPO) Arbitration and Mediation Center. It allows
            trademark owners to take action against those who have cybersquatted
            their domain names in an effort to recover them quickly.
          </p>
        </div>

      </div>
    </section>
  );
};




export default DomainRetrievalInfo