import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Who is multi-site hosting designed for?",
    a: "Multi-site hosting is ideal for agencies, developers and professionals who manage multiple websites and want centralized control under one hosting package.",
  },
  {
    q: "Can I host unlimited websites?",
    a: "The number of websites depends on the selected plan. You can easily upgrade your plan at any time as your needs grow.",
  },
  {
    q: "Do all plans include a dedicated IP?",
    a: "All plans except the Bronze offer include a dedicated IP address to ensure better performance and security.",
  },
  {
    q: "Is it possible to customize nameservers?",
    a: "Yes, multi-site hosting includes customized nameservers to help strengthen your brand identity.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade your hosting plan at any time without service interruption.",
  },
];

const MultiSiteHostingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-[420px_1fr] gap-24 items-start">

          {/* LEFT CONTENT */}
          <div
            className="sticky top-32 self-start"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-6">
              For multi-site hosting
            </h2>

            <p className="text-gray-600 text-lg leading-7">
              Everything you need to know about our multi-site hosting solution
              and how it helps you manage multiple websites efficiently.
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-5" data-aos="fade-left">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-7 py-6 text-left"
                  >
                    <h4 className="font-semibold text-[#020c2b] text-base md:text-lg leading-snug pr-6">
                      {faq.q}
                    </h4>

                    <span className="flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#0b4dff]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#020c2b]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`px-7 overflow-hidden transition-all duration-300 ease-in-out ${
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
      </div>
    </section>
  );
};

export default MultiSiteHostingFAQ;
