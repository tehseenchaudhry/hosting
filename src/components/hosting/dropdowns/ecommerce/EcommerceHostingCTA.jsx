import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceHostingCTA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#020c2b] via-[#06144d] to-[#020c2b]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div
          className="relative overflow-hidden rounded-3xl bg-[#0b4dff] 
          px-10 py-20 lg:px-20 lg:py-24 text-white shadow-2xl"
          data-aos="zoom-in"
        >
          {/* BACKGROUND DECOR */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          {/* CONTENT */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Ready to launch your <br className="hidden sm:block" />
                online store?
              </h2>

              <p className="text-white/90 text-lg leading-7 max-w-xl mb-10">
                Power your e-commerce business with high-performance hosting,
                advanced security and scalable resources designed to convert
                visitors into customers.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link
                  to="/hosting/ecommerce/plans"
                  className="group inline-flex items-center gap-3 
                  bg-white text-[#020c2b] px-7 py-4 rounded-xl 
                  font-semibold shadow-lg transition-all duration-300
                  hover:bg-[#020c2b] hover:text-white"
                >
                  <ShoppingCart className="w-5 h-5" />
                  View plans
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 
                  border border-white/40 px-7 py-4 rounded-xl 
                  font-semibold text-white transition-all duration-300
                  hover:bg-white hover:text-[#020c2b]"
                >
                  Talk to an expert
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="flex justify-center lg:justify-end"
              data-aos="fade-left"
            >
              <div
                className="bg-white/10 backdrop-blur-lg 
                border border-white/20 rounded-2xl 
                px-8 py-10 max-w-sm w-full"
              >
                <h4 className="font-bold text-xl mb-6">
                  Why choose our e-commerce hosting?
                </h4>

                <ul className="space-y-4 text-sm text-white/90">
                  <li>✔ Optimized for WooCommerce & Magento</li>
                  <li>✔ Free SSL & daily backups</li>
                  <li>✔ High availability & SSD storage</li>
                  <li>✔ Scalable resources on demand</li>
                  <li>✔ 24/7 expert technical support</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHostingCTA;
