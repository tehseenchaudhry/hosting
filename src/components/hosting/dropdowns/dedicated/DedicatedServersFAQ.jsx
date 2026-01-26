import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "What is a dedicated server?",
    a: "A dedicated server is a physical server entirely reserved for a single customer, providing maximum performance, security and control.",
  },
  {
    q: "Who should use dedicated servers?",
    a: "Dedicated servers are ideal for high-traffic websites, enterprise applications, e-commerce platforms and mission-critical systems.",
  },
  {
    q: "Can I customize my dedicated server?",
    a: "Yes. You can fully customize CPU, RAM, storage, operating system and additional services according to your needs.",
  },
  {
    q: "Is technical support included?",
    a: "Yes. Our expert technical support team is available 24/7 to assist with monitoring, maintenance and troubleshooting.",
  },
  {
    q: "Can I upgrade my server later?",
    a: "Absolutely. You can scale your resources or migrate to a more powerful server whenever your business grows.",
  },
];

const DedicatedServersFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* HEADER */}
        <div className="max-w-2xl mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-4">
            Dedicated servers – FAQ
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            Find answers to the most frequently asked questions about our
            dedicated server solutions.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="border border-gray-200 rounded-2xl overflow-hidden
                hover:shadow-lg transition-all duration-300"
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                >
                  <h4 className="font-semibold text-[#020c2b] text-base md:text-lg">
                    {faq.q}
                  </h4>

                  <span className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#0b4dff]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#020c2b]" />
                    )}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`px-8 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
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

export default DedicatedServersFAQ;
