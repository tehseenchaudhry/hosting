import whyImage from "../../../../assets/twice-slider.webp";
import {
  ShoppingCart,
  ShieldCheck,
  Zap,
  Server,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Zap />,
    title: "Ultra-fast performance",
    desc: "Optimized servers ensure lightning-fast page load times and smooth checkout experiences.",
  },
  {
    icon: <ShieldCheck />,
    title: "Advanced security",
    desc: "Protect your store and customer data with SSL certificates, firewall and anti-DDoS protection.",
  },
  {
    icon: <ShoppingCart />,
    title: "Optimized for e-commerce",
    desc: "Perfect for WooCommerce, Magento, PrestaShop and other online store platforms.",
  },
  {
    icon: <Server />,
    title: "Scalable infrastructure",
    desc: "Easily scale your hosting resources as your store grows and traffic increases.",
  },
];

const EcommerceHostingWhyChoose = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT IMAGE */}
          <div data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={whyImage}
                alt="Why choose e-commerce hosting"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020c2b]/20 to-transparent"></div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-6 leading-tight">
              Why choose our <br /> e-commerce hosting?
            </h2>

            <p className="text-gray-600 text-lg leading-7 mb-14 max-w-xl">
              Selling online requires speed, reliability and security.
              Our e-commerce hosting solutions are specifically designed
              to maximize conversions, protect transactions and ensure
              uninterrupted availability.
            </p>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">

              {FEATURES.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 120}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center
                      bg-[#f6f9ff] text-[#0b4dff]
                      group-hover:bg-[#0b4dff] group-hover:text-white
                      transition-all duration-300"
                    >
                      {item.icon}
                    </div>

                    <h4 className="font-bold text-[#020c2b] group-hover:text-[#0b4dff] transition">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-gray-600 text-sm leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHostingWhyChoose;
