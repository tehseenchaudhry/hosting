import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is the difference between a DV, OV and EV?",
    answer:
      "DV (Domain Validation) verifies domain ownership only. OV (Organization Validation) verifies company identity. EV (Extended Validation) provides the highest level of trust.",
  },
  {
    id: 2,
    question: "What is the difference between a wildcard and a multi-domain?",
    answer:
      "A Wildcard SSL secures all subdomains. A Multi-domain SSL secures multiple different domains.",
  },
  {
    id: 3,
    question: "When does the warranty on SSL certificates start?",
    answer:
      "The warranty starts once the SSL certificate is issued and remains valid for its duration.",
  },
  {
    id: 4,
    question: "How do I install my certificate?",
    answer:
      "You can install your SSL certificate using cPanel, Plesk, or manual server installation.",
  },
  {
    id: 5,
    question: "Do I need an SSL certificate for each domain?",
    answer:
      "Yes, unless you use a wildcard or multi-domain certificate.",
  },
  {
    id: 6,
    question: "How long is an SSL certificate valid?",
    answer:
      "Most SSL certificates are valid for one year and must be renewed annually.",
  },
];

// SPLIT INTO TWO COLUMNS (KEY FIX)
const leftFaqs = faqs.slice(0, 3);
const rightFaqs = faqs.slice(3);

export default function SSLFaq() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderFaq = (faq) => {
    const isOpen = openId === faq.id;

    return (
      <div
        key={faq.id}
        className="border border-gray-200 rounded-xl transition-shadow duration-300 hover:shadow-md"
      >
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full flex justify-between items-center px-6 py-5 text-left"
        >
          <span className="font-semibold text-[#061a3a]">
            {faq.question}
          </span>

          <span className="text-blue-600 transition-transform duration-300">
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#061a3a]">
            FAQ for SSL Certificates
          </h2>
          <p className="mt-4 text-gray-600">
            Find answers to the most common SSL certificate questions.
          </p>
        </div>

        {/* TWO REAL COLUMNS */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {leftFaqs.map(renderFaq)}
          </div>

          <div className="space-y-6">
            {rightFaqs.map(renderFaq)}
          </div>
        </div>

      </div>
    </section>
  );
}
