import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Which e-commerce platforms are supported?",
    a: "Our e-commerce hosting fully supports WooCommerce, Magento, PrestaShop, OpenCart and other popular online store platforms.",
  },
  {
    q: "Is my online store secure?",
    a: "Yes. All plans include a free SSL certificate, advanced firewall protection, anti-DDoS security and continuous monitoring.",
  },
  {
    q: "Can I scale resources as my store grows?",
    a: "Absolutely. You can upgrade CPU, RAM and storage instantly to handle traffic spikes and business growth without downtime.",
  },
  {
    q: "Are backups included?",
    a: "Yes. Automated daily backups are included to protect your products, orders and customer data at all times.",
  },
  {
    q: "Is hosting optimized for fast checkout?",
    a: "Our SSD-based infrastructure and optimized servers ensure fast page loading and smooth checkout experiences.",
  },
];

const EcommerceHostingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-28">

        {/* HEADER */}
        <div
          className="max-w-xl mx-auto text-center mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-4">
            E-commerce hosting FAQ
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            Everything you need to know before launching your online store.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="max-w-3xl mx-auto space-y-6">

          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className={`rounded-2xl border border-transparent 
                bg-[#f6f9ff] transition-all duration-300 
                hover:shadow-lg hover:border-[#dbe4ff]`}
              >
                {/* QUESTION ROW */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between 
                  gap-6 px-8 py-6 text-left"
                >
                  <h4 className="font-semibold text-[#020c2b] text-base md:text-lg leading-snug">
                    {faq.q}
                  </h4>

                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full 
                    flex items-center justify-center 
                    transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0b4dff] text-white"
                        : "bg-white text-[#020c2b]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default EcommerceHostingFAQ;
