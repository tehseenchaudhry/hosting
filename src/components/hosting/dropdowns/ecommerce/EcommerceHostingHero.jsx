import heroImage from "../../../../assets/slider-infogerance-main.webp";

const EcommerceHostingHero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0b1c39] via-[#020c2b] to-[#020c2b] overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#0b4dff]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#ff6b6b]/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <span className="inline-block mb-5 px-5 py-2 rounded-full bg-[#0b4dff]/10 text-[#0b4dff] font-semibold text-sm">
              E-commerce Hosting
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              High-performance hosting <br />
              built for <span className="text-[#0b4dff]">online stores</span>
            </h1>

            <p className="text-gray-300 text-lg leading-7 max-w-xl mb-10">
              Launch, manage and scale your online store with lightning-fast,
              secure and reliable e-commerce hosting optimized for WooCommerce,
              Magento, Shopify integrations and more.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <a
                href="#plans"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#0b4dff] text-white font-semibold transition-all duration-300 hover:bg-[#0938c9] hover:shadow-[0_20px_40px_rgba(11,77,255,0.4)]"
              >
                View Plans
                <span className="ml-2 transform transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Learn More
              </a>
            </div>

            {/* TRUST BADGES */}
            <div className="flex items-center gap-6 mt-12">
              {["99.9% Uptime", "Free SSL", "24/7 Support"].map((item, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  className="text-sm text-gray-300 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0b4dff]"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative"
            data-aos="fade-left"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={heroImage}
                alt="E-commerce hosting hero"
                className="w-full object-cover transform transition duration-700 group-hover:scale-105"
              />

              {/* OVERLAY CARD */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl p-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#020c2b]">
                      Optimized for Sales
                    </h4>
                    <p className="text-sm text-gray-600">
                      Faster checkout & better conversions
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0b4dff]/10 flex items-center justify-center text-[#0b4dff] font-bold">
                    ⚡
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcommerceHostingHero;
