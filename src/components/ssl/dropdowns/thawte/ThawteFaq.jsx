import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SSLFaq() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: "dv-ov-ev",
      question: "What is the difference between DV, OV and EV?",
      answer:
        "DV certificates verify domain ownership only. OV certificates validate business identity. EV certificates provide the highest trust with extensive company verification.",
    },
    {
      id: "wildcard-multi",
      question: "What is the difference between a Wildcard and a Multi-domain?",
      answer:
        "Wildcard secures one domain and all subdomains. Multi-domain secures multiple different domains under one certificate.",
    },
    {
      id: "warranty",
      question: "What does the SSL certificate guarantee cover?",
      answer:
        "The warranty protects users in case of certificate mis-issuance by the Certificate Authority.",
    },
    {
      id: "install",
      question: "How do I install my certificate?",
      answer:
        "You can install the certificate using your hosting panel or server configuration. Instructions depend on server type.",
    },
    {
      id: "domains",
      question: "Do I need an SSL certificate for each domain?",
      answer:
        "Yes, unless you use a wildcard or multi-domain certificate.",
    },
    {
      id: "validity",
      question: "How long is an SSL certificate valid?",
      answer:
        "SSL certificates are valid for one year and must be renewed annually.",
    },
  ];

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#eef5ff] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-[#061a3a] mb-12">
          Frequently Asked Questions
          <span className="block text-lg font-normal">
            For SSL certificates
          </span>
        </h2>

        {/* ⚠️ IMPORTANT:
            ONE map()
            NO slicing
            NO duplicate rendering
        */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-[#061a3a]"
                >
                  {faq.question}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated body */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 px-6 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
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
