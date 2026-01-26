const PLANS = [
  {
    name: "Foolish",
    price: "$59.50",
    features: [
      "Disk Space: 50 GB",
      "Bandwidth: Unlimited",
      "E-Mail Accounts: 10",
      "FTP Accounts: 5",
      "Databases: 5",
      "Subdomains: 5",
    ],
  },
  {
    name: "Wise",
    price: "$118.50",
    popular: true,
    features: [
      "Disk Space: 100 GB",
      "Bandwidth: Unlimited",
      "E-Mail Accounts: 50",
      "FTP Accounts: 10",
      "Databases: 10",
      "Subdomains: 10",
    ],
  },
  {
    name: "Neat",
    price: "$237.50",
    features: [
      "Disk Space: 300 GB",
      "Bandwidth: Unlimited",
      "E-Mail Accounts: Unlimited",
      "FTP Accounts: Unlimited",
      "Databases: 15",
      "Subdomains: 15",
    ],
  },
];

const WindowsSharedHostingPricing = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-20">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-4">
            Choose the package that suits you best
          </h2>
        </div>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
                ${plan.popular ? "border-[#020c2b]" : "border-gray-200"}
              `}
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#020c2b] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Best value
                </span>
              )}

              {/* PLAN NAME */}
              <h3 className="text-xl font-bold text-[#020c2b] mb-3">
                {plan.name}
              </h3>

              {/* PRICE */}
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-[#020c2b]">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm"> / year</span>
              </div>

              {/* CTA */}
              <button className="w-full bg-[#0b4dff] text-white py-3 rounded-lg font-semibold hover:bg-[#093bd1] transition mb-6">
                Order →
              </button>

              {/* FEATURES */}
              <ul className="space-y-3 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0b4dff] font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* FOOTER LINK */}
              <div className="mt-6">
                <a
                  href="#"
                  className="text-sm font-semibold text-[#020c2b] hover:underline"
                >
                  Display more →
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WindowsSharedHostingPricing;
