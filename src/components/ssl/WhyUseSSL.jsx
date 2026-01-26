import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import sslPerson from "../../assets/why-ssl.webp";

export default function WhyUseSSL() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE (AOS on parent only) */}
        <div data-aos="fade-right" className="relative flex justify-center lg:justify-start">
          <div className="absolute -inset-6 bg-blue-100 rounded-3xl blur-3xl opacity-40"></div>

          <img
            src={sslPerson}
            alt="Why use SSL"
            className="
              relative w-full max-w-sm rounded-2xl shadow-xl
              transform scale-100
              transition-transform duration-500 ease-out
              hover:scale-105
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          <span className="inline-block mb-3 text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Security & Trust
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#061a3a] leading-tight">
            Why should I use an <br className="hidden sm:block" /> SSL certificate?
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl">
            SSL certificates ensure that all data exchanged between your website
            and your visitors remains private, encrypted, and protected from
            interception.
          </p>

          {/* FEATURES */}
          <div className="mt-12 grid sm:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div
                className="
                  bg-white p-6 rounded-xl border border-gray-100 shadow-sm
                  transform translate-y-0
                  transition-transform transition-shadow duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-xl
                "
              >
                <div className="text-2xl mb-4">🔐</div>
                <h4 className="font-semibold text-[#061a3a] mb-2">
                  Data encryption
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Encrypts sensitive information such as passwords, payment data,
                  and personal details.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div
                className="
                  bg-white p-6 rounded-xl border border-gray-100 shadow-sm
                  transform translate-y-0
                  transition-transform transition-shadow duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-xl
                "
              >
                <div className="text-2xl mb-4">📈</div>
                <h4 className="font-semibold text-[#061a3a] mb-2">
                  SEO advantage
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Secure websites are favored by search engines, improving your
                  rankings and online visibility.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div data-aos="fade-up" data-aos-delay="300">
              <div
                className="
                  bg-white p-6 rounded-xl border border-gray-100 shadow-sm
                  transform translate-y-0
                  transition-transform transition-shadow duration-300 ease-out
                  hover:-translate-y-2 hover:shadow-xl
                "
              >
                <div className="text-2xl mb-4">🏷️</div>
                <h4 className="font-semibold text-[#061a3a] mb-2">
                  Brand credibility
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Builds customer trust by displaying HTTPS and the secure padlock.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
