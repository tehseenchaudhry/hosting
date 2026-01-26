import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SSLFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between a DV, OV and EV certificate?",
      answer:
        "DV certificates only verify domain ownership. OV certificates verify business identity. EV certificates offer the highest trust level with extensive company verification.",
    },
    {
      question: "How do I install my certificate?",
      answer:
        "Once issued, you can install your SSL certificate via your hosting control panel or server configuration using the provided certificate files.",
    },
    {
      question: "Do I need an SSL certificate for each domain?",
      answer:
        "Yes, unless you use a Multi-Domain or Wildcard SSL certificate which can secure multiple domains or subdomains.",
    },
    {
      question: "Is it possible to install an SSL certificate on multiple servers?",
      answer:
        "Yes, most SSL certificates allow installation on multiple servers as long as the same private key is used.",
    },
    {
      question: "How long is an SSL certificate valid?",
      answer:
        "SSL certificates are typically valid for 1 year. Renewal is required before expiration to maintain security.",
    },
    {
      question: "How do I generate my CSR?",
      answer:
        "You can generate a CSR (Certificate Signing Request) from your hosting control panel or directly via your server.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f8fd] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#061a3a] mb-16">
          For SSL Certificates
        </h2>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white rounded-xl
                  border border-gray-200
                  transition-all duration-300
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full flex items-center justify-between
                    px-6 py-5 text-left
                  "
                >
                  <span className="font-semibold text-[#061a3a]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      transition-transform duration-300
                      ${isOpen ? "rotate-180 text-blue-600" : "text-gray-500"}
                    `}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
