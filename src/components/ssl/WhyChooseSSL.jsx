import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseSSL() {
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
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div
          className="max-w-3xl mx-auto text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#061a3a]">
            Why choose our SSL certificates?
          </h2>
          <p className="mt-5 text-gray-600">
            Our SSL solutions combine strong security, reliability, and ease of
            use to protect your website and your customers.
          </p>
        </div>

        {/* ICON GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ITEM 1 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div
              className="
                p-8 rounded-xl border border-gray-100 bg-white
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="font-semibold text-[#061a3a] mb-3">
                Fast activation
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your SSL certificate is issued and activated quickly with
                minimal configuration required.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div
              className="
                p-8 rounded-xl border border-gray-100 bg-white
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-semibold text-[#061a3a] mb-3">
                Strong encryption
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Industry-standard encryption protects sensitive data exchanged
                on your website.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div
              className="
                p-8 rounded-xl border border-gray-100 bg-white
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="text-3xl mb-4">🌍</div>
              <h4 className="font-semibold text-[#061a3a] mb-3">
                Global trust
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trusted by all major browsers and devices worldwide without
                compatibility issues.
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div
              className="
                p-8 rounded-xl border border-gray-100 bg-white
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="text-3xl mb-4">🔄</div>
              <h4 className="font-semibold text-[#061a3a] mb-3">
                Easy renewal
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Renew and manage your SSL certificates easily from your control
                panel.
              </p>
            </div>
          </div>

          {/* ITEM 5 */}
          <div data-aos="fade-up" data-aos-delay="500">
            <div
              className="
                p-8 rounded-xl border border-gray-100 bg-white
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="text-3xl mb-4">📞</div>
              <h4 className="font-semibold text-[#061a3a] mb-3">
                Expert support
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our technical team is available to assist you with setup and
                troubleshooting.
              </p>
            </div>
          </div>

          {/* ITEM 6 */}
          <div data-aos="fade-up" data-aos-delay="600">
            <div
              className="
                p-8 rounded-xl border border-gray-100 bg-white
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-2 hover:shadow-lg
              "
            >
              <div className="text-3xl mb-4">💼</div>
              <h4 className="font-semibold text-[#061a3a] mb-3">
                Business ready
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ideal for professional websites, e-commerce stores, and
                enterprise projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
