import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SSLPricing() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#061a3a]">
            Choose the SSL certificate that fits your needs
          </h2>
          <p className="mt-5 text-gray-600">
            Secure your website with industry-standard SSL certificates designed
            for different types of projects and businesses.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div
              className="
                bg-white rounded-2xl border border-gray-200 p-8 h-full
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              <h3 className="text-xl font-semibold text-[#061a3a] mb-4">
                Simple SSL
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                Ideal for personal websites and small business sites that need
                basic encryption.
              </p>

              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>✔ Secures one domain</li>
                <li>✔ HTTPS & padlock</li>
                <li>✔ Fast installation</li>
              </ul>

              <button
                className="
                  w-full py-3 rounded-lg text-sm font-semibold
                  bg-[#0b5ed7] text-white
                  transition-colors duration-300
                  hover:bg-[#084298]
                "
              >
                View plans
              </button>
            </div>
          </div>

          {/* CARD 2 (HIGHLIGHTED) */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div
              className="
                bg-white rounded-2xl border-2 border-[#0b5ed7] p-8 h-full
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              <span className="inline-block mb-3 text-xs font-semibold text-blue-600 uppercase">
                Most popular
              </span>

              <h3 className="text-xl font-semibold text-[#061a3a] mb-4">
                Wildcard SSL
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                Secure your main domain and all its subdomains with one certificate.
              </p>

              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>✔ Unlimited subdomains</li>
                <li>✔ Strong encryption</li>
                <li>✔ Cost-effective</li>
              </ul>

              <button
                className="
                  w-full py-3 rounded-lg text-sm font-semibold
                  bg-[#0b5ed7] text-white
                  transition-colors duration-300
                  hover:bg-[#084298]
                "
              >
                View plans
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div
              className="
                bg-white rounded-2xl border border-gray-200 p-8 h-full
                transform translate-y-0
                transition-transform transition-shadow duration-300 ease-out
                hover:-translate-y-3 hover:shadow-2xl
              "
            >
              <h3 className="text-xl font-semibold text-[#061a3a] mb-4">
                Multi-Domain SSL
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                Perfect for businesses managing multiple websites and domains.
              </p>

              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>✔ Multiple domains</li>
                <li>✔ Centralized management</li>
                <li>✔ Enterprise-ready</li>
              </ul>

              <button
                className="
                  w-full py-3 rounded-lg text-sm font-semibold
                  bg-[#0b5ed7] text-white
                  transition-colors duration-300
                  hover:bg-[#084298]
                "
              >
                View plans
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
