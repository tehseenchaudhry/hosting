import { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";

const FAQS = [
  {
    q: "How much disk space and bandwidth is included in the Neat package?",
    a: "The Neat package includes generous SSD disk space and unmetered bandwidth, ideal for professional websites and growing traffic.",
  },
  {
    q: "What happens if I exceed the authorized resources?",
    a: "You will be notified in advance. You can upgrade your hosting plan instantly without downtime.",
  },
  {
    q: "How long does it take to activate my hosting?",
    a: "Your hosting space is activated immediately after payment. You can start using your services right away.",
  },
  {
    q: "Can I install Java applications on Linux shared hosting?",
    a: "Java applications require specific environments and are recommended on VPS or Dedicated Servers.",
  },
];

const LinuxSharedHostingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#020c2b] mb-24">
          For Linux shared hosting
        </h2>

        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT — COMPARISON TABLE */}
          <div>
            <h3 className="text-xl font-bold text-[#020c2b] mb-8">
              Which shared hosting to choose: Linux or Windows?
            </h3>

            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <table className="w-full text-sm">
                <thead className="bg-[#020c2b] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left"></th>
                    <th className="px-6 py-4 font-semibold">Linux</th>
                    <th className="px-6 py-4 font-semibold">Windows</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  {[
                    ["PHP & MySQL", true, true],
                    ["ASP.NET", false, true],
                    ["WordPress / Joomla", true, false],
                    ["Apache / LiteSpeed", true, false],
                    ["MSSQL", false, true],
                    ["cPanel", true, false],
                  ].map(([label, linux, windows], i) => (
                    <tr
                      key={i}
                      className="border-b last:border-none hover:bg-[#f2f5ff] transition"
                    >
                      <td className="px-6 py-4 font-medium">{label}</td>
                      <td className="px-6 py-4">
                        {linux ? <Check className="text-green-600 w-5 h-5" /> : "—"}
                      </td>
                      <td className="px-6 py-4">
                        {windows ? <Check className="text-green-600 w-5 h-5" /> : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT — FAQ ACCORDION */}
          <div className="space-y-6">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <h4 className="font-semibold text-[#020c2b] text-base md:text-lg">
                      {faq.q}
                    </h4>

                    <span className="ml-4">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#0a3cff]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#020c2b]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`px-6 transition-all duration-300 ease-in-out ${
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
      </div>
    </section>
  );
};

export default LinuxSharedHostingFAQ;
