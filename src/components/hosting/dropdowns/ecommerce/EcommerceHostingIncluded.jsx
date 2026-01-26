import {
  ShieldCheck,
  Zap,
  ShoppingCart,
  Lock,
  Cloud,
  Database,
  RefreshCcw,
  LifeBuoy,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Zap />,
    title: "High performance",
    desc: "Optimized infrastructure ensures fast loading times and smooth checkout experiences.",
  },
  {
    icon: <ShieldCheck />,
    title: "Advanced security",
    desc: "Anti-DDoS protection, firewall and continuous monitoring to secure transactions.",
  },
  {
    icon: <ShoppingCart />,
    title: "E-commerce optimized",
    desc: "Perfect compatibility with WooCommerce, Magento, PrestaShop and more.",
  },
  {
    icon: <Lock />,
    title: "Free SSL certificate",
    desc: "Secure customer data and payments with HTTPS encryption included.",
  },
  {
    icon: <Cloud />,
    title: "Scalable resources",
    desc: "Scale storage and performance instantly as your store grows.",
  },
  {
    icon: <Database />,
    title: "SSD storage",
    desc: "High-speed SSD disks ensure rapid data access and reliability.",
  },
  {
    icon: <RefreshCcw />,
    title: "Automated backups",
    desc: "Daily backups protect your store data from accidental loss.",
  },
  {
    icon: <LifeBuoy />,
    title: "24/7 expert support",
    desc: "Our specialists assist you anytime to keep your store online.",
  },
];

const EcommerceHostingIncluded = () => {
  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* SECTION HEADER */}
        <div className="max-w-2xl mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-4">
            Included with your e-commerce hosting
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            Everything you need to launch, secure and scale your online store
            with confidence.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">

          {FEATURES.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 90}
              className="group bg-white rounded-2xl p-8 shadow-sm
              hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6
                bg-[#eef3ff] text-[#0b4dff]
                group-hover:bg-[#0b4dff] group-hover:text-white
                transition-all duration-300"
              >
                {item.icon}
              </div>

              <h4 className="font-bold text-[#020c2b] mb-3 group-hover:text-[#0b4dff] transition">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm leading-6">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EcommerceHostingIncluded;
