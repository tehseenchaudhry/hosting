import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SSLFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between DV, OV and EV?",
      answer:
        "Domain Validation (DV) certificates are the fastest to issue and provide basic encryption. Organization Validation (OV) certificates verify company details and provide higher trust. Extended Validation (EV) certificates offer the highest level of trust and display the company name in browsers.",
    },
    {
      question: "What is the difference between a Wildcard and a Multi-domain?",
      answer:
        "Wildcard certificates secure a domain and all its subdomains. Multi-domain certificates allow you to secure multiple different domains with a single certificate.",
    },
    {
      question: "What does the SSL certificate guarantee cover?",
      answer:
        "The warranty protects users if a certificate was incorrectly issued by the Certificate Authority, covering financial losses caused by that failure.",
    },
    {
      question: "How do I install my certificate?",
      answer:
        "After purchase, you can install the certificate through your hosting control panel or web server. Installation guides are available for most platforms.",
    },
    {
      question: "Do I need an SSL certificate for each domain?",
      answer:
        "Yes, unless you use a Wildcard or Multi-domain SSL certificate which can cover multiple domains or subdomains.",
    },
    {
      question: "Is it possible to install SSL certificates on multiple servers?",
      answer:
        "Yes, depending on the certificate type, SSL certificates can be installed on multiple servers using the same private key.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f8ff] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#061a3a] mb-14">
          For SSL certificates
        </h2>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full flex justify-between items-center
                  text-left px-6 py-5
                  font-semibold text-[#061a3a]
                "
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
