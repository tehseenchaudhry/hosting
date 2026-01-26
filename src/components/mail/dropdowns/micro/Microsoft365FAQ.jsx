import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How do I link my domain name to Office 365?",
    a: "To link your domain to Office 365, log in and select “Admin” under “Applications”. Then access the admin center, manage DNS records and follow the guided steps to complete the configuration.",
  },
  {
    q: "Can I switch from one Office pack to another?",
    a: "Yes. You can upgrade or downgrade your Microsoft Office 365 pack at any time according to your business needs.",
  },
  {
    q: "Is Microsoft 365 secure for business use?",
    a: "Yes. Microsoft 365 includes advanced security features such as identity protection, threat detection, and secure cloud storage.",
  },
  {
    q: "Can I use Office 365 on multiple devices?",
    a: "Absolutely. Office 365 works across desktops, tablets, and smartphones, allowing your team to work from anywhere.",
  },
];

const Microsoft365FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-[#0b4dff] uppercase tracking-wider">
            Frequently asked questions
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mt-4">
            For Microsoft 365
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="divide-y divide-gray-200">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="py-6"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3 className="text-lg font-semibold text-[#020c2b] group-hover:text-[#0b4dff] transition">
                    {item.q}
                  </h3>

                  <span className="ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#0b4dff]" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 group-hover:text-[#0b4dff] transition" />
                    )}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-40 mt-4 opacity-100"
                      : "max-h-0 opacity-0"
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

export default Microsoft365FAQ;
