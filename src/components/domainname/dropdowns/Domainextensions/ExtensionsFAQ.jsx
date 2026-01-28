import React from "react";
import { FiCheck } from "react-icons/fi";

const ExtensionsFAQ = () => {
  return (
    <section className="py-20 px-6 md:px-24 border-b border-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase text-sm text-gray-500 mb-1">
            frequently asked questions
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            For extensions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left FAQ */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Can I register multiple domain names with more than one extension for a single website?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, and in many cases it is recommended to do so to stop cyber
              criminals from using cybersquatting or phishing techniques that
              could damage your brand image.
              <br /><br />
              Genious has a{" "}
              <a
                href=""
                className="font-semibold underline"
              >
                service devoted to the protection of your brand
              </a>{" "}
              online.
            </p>
          </div>

          {/* Right FAQ */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Can I register a domain name using any extension I want?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Genious Communications allows you to choose among hundreds of
              extensions the one that is right for your website.
              <br /><br />
              However, it should be noted that the registration of a domain name
              using certain extensions can be subjected to some conditions.
              <br /><br />
              For example, the registration of a domain name under ".ac.ma",
              ".press.ma" ".gov.ma" requires a prior check by the ANRT, by filling
              in the following document:
              <br />
              <a
                href=""
                target="_blank"
                rel="nofollow"
                className="font-semibold underline break-all"
              >
                https://whois.ma/wp-content/themes/domaine/pdf/Examen_Pr%C3%A9alable.pdf
              </a>
            </p>

            {/* Checklist */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FiCheck className="mt-1 text-black" />
                <p>
                  <strong>".ac.ma"</strong>: Reserved for educational institutions
                  approved by the competent authorities.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiCheck className="mt-1 text-black" />
                <p>
                  <strong>".press.ma"</strong>: Reserved for press establishments
                  approved by the competent authorities.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FiCheck className="mt-1 text-black" />
                <p>
                  <strong>".gov.ma"</strong>: Reserved for government agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtensionsFAQ;
