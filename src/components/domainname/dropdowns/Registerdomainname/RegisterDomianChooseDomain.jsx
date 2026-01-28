import React from "react";
import { FiArrowRight, FiArrowUp } from "react-icons/fi";

const RegisterDomianChooseDomain = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            How do I choose my domain name?
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Step 1 */}
          <div>
            <span className="text-6xl font-bold border-2 border-gray-800 text-gray-900 rounded-full inline-flex items-center justify-center w-20 h-20 mb-4">
              1
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Choose a name</h3>
            <p className="text-gray-700 leading-relaxed">
              The first thing to do is to pick a name. The name should be short, easy to remember and without any special characters (dashes or accents).
              <br /><br />
              If you are a company, you can use the name of your company or a term that designates your main activity.
              <br /><br />
              If you are an individual starting a new blog, you can use your last name and/or a keyword that refers to the main focus or topic of your blog.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <span className="text-6xl font-bold border-2 border-gray-800 text-gray-900 rounded-full inline-flex items-center justify-center w-20 h-20 mb-4">
              2
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Choose an extension</h3>
            <p className="text-gray-700 leading-relaxed">
              Once you have chosen a name, you must then{" "}
              <a
                href="https://www.genious.net/en/domain-names/domain-extensions"
                className="font-semibold underline inline-flex items-center gap-1"
              >
                pick an extension <FiArrowRight />
              </a>
              .
              <br /><br />
              There are three types of extensions: generic extensions (gTLD), national extensions (ccTLD) and new generic extensions (newgTLD).
              <br />
              In general, it is best to choose a generic extension (such as .com or .net) if your website is aimed at an international audience. If your website is targeted to Internet users in a specific country, it is better to choose national extensions (like .ma).
              <br /><br />
              If the name you chose is already registered on the generic and national extensions, you can look into the many new extensions that Genious has to offer.
              <br />
              These new extensions cover different activities and topics (such as .restaurant, .site etc.), so all you need to do is pick one that relates to your website's content.
            </p>
          </div>

        </div>

        {/* Final note */}
        <div className="mt-8 border-t border-gray-300 pt-4">
          <p className="text-gray-700 text-base md:text-lg">
            Now that you know which domain name to pick, all you have to do is make sure it is{" "}
            <a
              href="#simpledomainsearchform"
              className="font-semibold underline inline-flex items-center gap-1"
            >
              available and then register it <FiArrowUp />
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};




export default RegisterDomianChooseDomain