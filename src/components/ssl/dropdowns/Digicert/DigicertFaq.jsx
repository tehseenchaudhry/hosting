import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DigicertFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between DV, OV and EV SSL certificates?",
      answer:
        "Domain Validation (DV) verifies domain ownership only. Organisation Validation (OV) validates business identity. Extended Validation (EV) provides the highest trust level with strict verification.",
    },
    {
      question: "How do I install my DigiCert SSL certificate?",
      answer:
        "After issuance, you can install your certificate on your server (Apache, Nginx, IIS, cPanel, etc.). DigiCert provides detailed installation guides for all platforms.",
    },
    {
      question: "Do I need an SSL certificate for each domain?",
      answer:
        "Yes, unless you use a Multi-Domain (SAN) or Wildcard SSL certificate which allows you to secure multiple domains or subdomains.",
    },
    {
      question: "Is it possible to install an SSL certificate on multiple servers?",
      answer:
        "Yes. DigiCert SSL certificates can be installed on multiple servers as long as they protect the same domain.",
    },
    {
      question: "How long is an SSL certificate valid?",
      answer:
        "SSL certificates are valid for a maximum of 1 year due to industry security standards.",
    },
    {
      question: "How can I generate my CSR (Certificate Signing Request)?",
      answer:
        "A CSR is generated from your server control panel or hosting environment. DigiCert provides step-by-step guides for all server types.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f8ff] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#061a3a] mb-10">
          For SSL certificates
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFaq(index)}
                className="
                  w-full flex justify-between items-center
                  px-6 py-5 text-left
                  font-medium text-[#061a3a]
                  hover:bg-gray-50
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
              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
