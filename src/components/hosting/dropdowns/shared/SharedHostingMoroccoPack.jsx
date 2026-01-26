import {
  CheckCircle,
  Database,
  Mail,
  ShieldCheck,
  Send,
  Folder,
  Server,
} from "lucide-react";

const SharedHostingMoroccoPack = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT — PACK CARD */}
          <div
            className="bg-white rounded-3xl shadow-xl border p-8"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-extrabold text-[#020c2b] mb-6">
              Moroccan
            </h3>

            <ul className="space-y-4 text-sm text-gray-700 mb-8">
              {[
                "Disk Space: 25 GB",
                "Bandwidth: 250 GB",
                "E-Mail Accounts: 10",
                "FTP Accounts: 5",
                "Databases: 5",
                "Subdomains: 5",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0b4dff]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* PRICING */}
            <div className="space-y-3 mb-8">
              {[
                { price: "$296.50", label: "per year" },
                { price: "$563.50", label: "every 2 years" },
                { price: "$800.50", label: "every 3 years", active: true },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between border rounded-xl px-5 py-4 cursor-pointer transition ${
                    plan.active
                      ? "border-[#0b4dff] bg-[#f6f9ff]"
                      : "hover:border-gray-400"
                  }`}
                >
                  <div>
                    <p className="font-semibold text-[#020c2b]">
                      {plan.price}
                    </p>
                    <span className="text-xs text-gray-500">
                      {plan.label}
                    </span>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border ${
                      plan.active
                        ? "bg-[#0b4dff] border-[#0b4dff]"
                        : "border-gray-400"
                    }`}
                  />
                </div>
              ))}
            </div>

            <button className="w-full bg-[#0b4dff] hover:bg-[#0938cc] text-white py-4 rounded-xl font-semibold transition">
              Order →
            </button>
          </div>

          {/* RIGHT — ABOUT THIS PACK */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-extrabold text-[#020c2b] mb-10">
              About this pack
            </h3>

            <div className="space-y-8 mb-12">
              {[
                {
                  q: "Where is my data hosted?",
                  a: "Your data is hosted in Morocco, within our infrastructure in Casablanca and Nouaceur.",
                },
                {
                  q: "Can I point multiple domains?",
                  a: "One main domain is allowed, but you can use multiple subdomains.",
                },
                {
                  q: "When will I receive my access?",
                  a: "Once payment is confirmed, your access details are sent immediately by email.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-[#0b4dff] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#020c2b] mb-1">
                      {item.q}
                    </h4>
                    <p className="text-gray-600 text-sm leading-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* INCLUDED FEATURES */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {[
                { icon: <Folder />, label: "FTP Access" },
                { icon: <ShieldCheck />, label: "Anti-spam" },
                { icon: <Mail />, label: "E-Mail Addresses" },
                { icon: <Send />, label: "Auto-responder" },
                { icon: <Database />, label: "Databases" },
                { icon: <Server />, label: "Mail support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm font-medium text-[#020c2b]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f6f9ff] flex items-center justify-center text-[#0b4dff]">
                    {item.icon}
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SharedHostingMoroccoPack;
