import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why should I use a professional email address?",
    a: "A professional email address strengthens your brand credibility, builds trust with customers, and ensures better security compared to free email services.",
  },
  {
    q: "Can I access my emails from anywhere?",
    a: "Yes, all our mail solutions allow secure access from anywhere via webmail, desktop clients, and mobile devices.",
  },
  {
    q: "What is the difference between Genious Mail, Google Workspace and Microsoft 365?",
    a: "Genious Mail offers a secure and affordable email solution, while Google Workspace and Microsoft 365 provide advanced collaboration tools like Drive, Docs, Outlook, Teams and more.",
  },
  {
    q: "Is my mailbox protected against spam and viruses?",
    a: "Yes, our Anti-Spam solution protects your mailbox from spam, malware, phishing attempts and unwanted emails.",
  },
];

const MailSolutionsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#f8f9ff] py-24">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* SECTION TITLE */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#020c2b] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our mail solutions.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left px-8 py-6"
                >
                  <span className="font-semibold text-[#020c2b] text-lg">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-[#020c2b] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-7">
                    {item.a}
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

export default MailSolutionsFAQ;
