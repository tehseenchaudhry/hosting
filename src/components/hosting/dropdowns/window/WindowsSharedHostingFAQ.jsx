import { useState } from "react";
import { Plus, Minus, CheckCircle } from "lucide-react";

const FAQS = [
  {
    q: "Which Windows shared hosting plan should I choose?",
    a: "Windows shared hosting is ideal if your website or application relies on Microsoft technologies such as ASP.NET, ASP.NET Core or MSSQL databases.",
  },
  {
    q: "How long does it take to activate Windows hosting?",
    a: "Your Windows shared hosting space is activated instantly after payment, allowing immediate access to your services.",
  },
  {
    q: "Can I upgrade my Windows hosting plan later?",
    a: "Yes, you can upgrade your hosting plan at any time directly from your client area without service interruption.",
  },
  {
    q: "Is Windows shared hosting secure?",
    a: "Yes. All plans include advanced security, firewall protection, anti-malware tools, SSL certificates and regular backups.",
  },
];

const WindowsSharedHostingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#020c2b] mb-6">
            Windows shared hosting FAQ
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our Windows shared hosting solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT — WINDOWS VS LINUX */}
          <div>
            <h3 className="text-xl font-bold text-[#020c2b] mb-8">
              Windows vs Linux shared hosting
            </h3>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#020c2b] text-white">
                  <tr>
                    <th className="px-8 py-5 text-left"></th>
                    <th className="px-8 py-5">Windows</th>
                    <th className="px-8 py-5">Linux</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  {[
                    ["ASP.NET / ASP.NET Core", true, false],
                    ["MSSQL database", true, false],
                    ["PHP & MySQL", true, true],
                    ["WordPress / Joomla", false, true],
                    ["IIS Web Server", true, false],
                    ["cPanel", false, true],
                  ].map(([label, windows, linux], i) => (
                    <tr
                      key={i}
                      className="border-b last:border-none hover:bg-[#f2f5ff] transition"
                    >
                      <td className="px-8 py-5 font-medium">{label}</td>
                      <td className="px-8 py-5">
                        {windows ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="px-8 py-5">
                        {linux ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          "—"
                        )}
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
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#0b4dff] shadow-lg"
                      : "bg-white border-gray-200 hover:border-[#0b4dff]/40"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between px-8 py-6 text-left"
                  >
                    <h4 className="font-semibold text-[#020c2b] text-base md:text-lg">
                      {faq.q}
                    </h4>

                    <span className="ml-4">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#0b4dff]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#020c2b]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-40 px-8 pb-6 opacity-100"
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

export default WindowsSharedHostingFAQ;
