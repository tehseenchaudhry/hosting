const PLANS = [
  {
    name: "M",
    priceMonthly: "$41.50",
    priceYearly: "$415.00",
    features: [
      "Disk space: 50 GB",
      "E-Mail Accounts: 50",
      "Mailing Lists: 50",
      "Custom PTR",
      "Dedicated IP",
      "Hourly Emails: 250",
    ],
  },
  {
    name: "L",
    priceMonthly: "$83.00",
    priceYearly: "$830.00",
    features: [
      "Disk space: 100 GB",
      "E-Mail Accounts: 100",
      "Mailing Lists: 100",
      "Custom PTR",
      "Dedicated IP",
      "Hourly Emails: 500",
    ],
  },
  {
    name: "XL",
    badge: "Best Seller",
    priceMonthly: "$118.50",
    priceYearly: "$1186.00",
    features: [
      "Disk space: 200 GB",
      "E-Mail Accounts: 200",
      "Mailing Lists: Unlimited",
      "Custom PTR",
      "Dedicated IP",
      "Hourly Emails: 1000",
    ],
  },
  {
    name: "XXL",
    priceMonthly: "$216.50",
    priceYearly: "$2162.00",
    features: [
      "Disk space: 500 GB",
      "E-Mail Accounts: 500",
      "Mailing Lists: Unlimited",
      "Custom PTR",
      "Dedicated IP",
      "Hourly Emails: 2000",
    ],
  },
];

const GeniousMailPricing = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-16"
          data-aos="fade-up"
        >
          Benefit from a full selection
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {PLANS.map((plan, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.badge
                  ? "border-[#0b4dff]"
                  : "border-gray-200"
              }`}
            >
              {/* BADGE */}
              {plan.badge && (
                <span className="absolute -top-3 right-6 bg-[#0b4dff] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              {/* PLAN NAME */}
              <h3 className="text-xl font-bold text-[#020c2b] mb-6">
                {plan.name}
              </h3>

              {/* FEATURES */}
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                {plan.features.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#0b4dff] font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* PRICES */}
              <div className="space-y-3 mb-6">
                <div className="border rounded-lg px-4 py-3 text-sm font-semibold text-[#020c2b]">
                  {plan.priceMonthly} <span className="text-gray-500">/ month</span>
                </div>

                <div className="border rounded-lg px-4 py-3 text-sm font-semibold text-[#020c2b] flex items-center justify-between">
                  {plan.priceYearly} <span className="text-gray-500">/ year</span>
                  <span className="w-4 h-4 rounded-full border border-[#0b4dff]"></span>
                </div>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-[#0b4dff] hover:bg-[#0836cc] text-white py-3 rounded-lg font-semibold transition">
                Order
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GeniousMailPricing;
