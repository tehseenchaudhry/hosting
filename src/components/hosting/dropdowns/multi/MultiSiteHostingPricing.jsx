import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Silver",
    priceMonthly: "$35.50",
    priceYearly: "$356.00",
    features: [
      "Number of Accounts: 50",
      "Disk Space: 100 GB",
      "Bandwidth: 1 TB",
      "Custom Nameservers",
      "Dedicated IP",
    ],
    popular: false,
  },
  {
    name: "Gold",
    priceMonthly: "$71.50",
    priceYearly: "$711.50",
    features: [
      "Number of Accounts: 100",
      "Disk Space: 200 GB",
      "Bandwidth: 2 TB",
      "Custom Nameservers",
      "Dedicated IP",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    priceMonthly: "$133.00",
    priceYearly: "$1328.00",
    features: [
      "Number of Accounts: 200",
      "Disk Space: 300 GB",
      "Bandwidth: 3 TB",
      "Custom Nameservers",
      "Dedicated IP",
    ],
    popular: false,
  },
];

const MultiSiteHostingPricing = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-24">

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {PLANS.map((plan, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`relative rounded-3xl border bg-white p-8 transition-all duration-300
              hover:shadow-2xl hover:-translate-y-1
              ${plan.popular ? "border-[#0b4dff]" : "border-gray-200"}`}
            >

              {/* POPULAR BADGE */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0b4dff] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#020c2b] mb-6">
                {plan.name}
              </h3>

              {/* FEATURES */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-[#0b4dff] mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* PRICES */}
              <div className="space-y-3 mb-8">
                <div className="border rounded-xl px-4 py-3 text-sm font-medium text-[#020c2b]">
                  {plan.priceMonthly} <span className="text-gray-500">/ month</span>
                </div>

                <div className="border rounded-xl px-4 py-3 text-sm font-medium text-[#020c2b] flex items-center justify-between">
                  {plan.priceYearly} <span className="text-gray-500">/ year</span>
                  <span className="w-3 h-3 rounded-full border border-[#0b4dff] bg-[#0b4dff]" />
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all
                ${plan.popular
                    ? "bg-[#0b4dff] text-white hover:bg-[#0836cc]"
                    : "bg-[#0b4dff] text-white hover:bg-[#0836cc]"
                }`}
              >
                Order →
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiSiteHostingPricing;
