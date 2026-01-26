import { Check } from "lucide-react";

const PLANS = [
  {
    title: "Advanced Pack",
    price: "$59.50",
    yearly: "$593.00",
    features: [
      "Disk Space: 25 GB",
      "Monthly Page Views: 150 000",
      "Bandwidth: 750 GB",
      "E-Mail Accounts: 50",
      "Databases: 5",
      "Subdomains: 5",
    ],
  },
  {
    title: "Professional Pack",
    price: "$118.50",
    yearly: "$1186.00",
    popular: true,
    features: [
      "Disk Space: 50 GB",
      "Monthly Page Views: 400 000",
      "Bandwidth: 1500 GB",
      "E-Mail Accounts: 100",
      "Databases: 10",
      "Subdomains: 10",
    ],
  },
  {
    title: "Enterprise Pack",
    price: "$178.00",
    yearly: "$1778.50",
    features: [
      "Disk Space: 100 GB",
      "Monthly Page Views: 1 000 000",
      "Bandwidth: 3000 GB",
      "E-Mail Accounts: Unlimited",
      "Databases: Unlimited",
      "Subdomains: Unlimited",
    ],
  },
];

const WordpressHostingPlans = () => {
  return (
    <section id="plans" className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {PLANS.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`relative rounded-3xl border bg-white p-10 
              transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl
              ${plan.popular ? "border-[#0b4dff] shadow-xl" : "border-gray-200"}`}
            >

              {/* POPULAR BADGE */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 
                bg-[#0b4dff] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#020c2b] mb-6">
                {plan.title}
              </h3>

              {/* FEATURES */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#0b4dff]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* PRICES */}
              <div className="space-y-4 mb-8">
                <div className="border rounded-xl px-4 py-3 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Monthly</span>
                  <span className="font-semibold text-[#020c2b]">{plan.price}</span>
                </div>

                <div className="border rounded-xl px-4 py-3 flex justify-between items-center bg-[#f6f9ff]">
                  <span className="text-sm text-gray-500">Yearly</span>
                  <span className="font-semibold text-[#020c2b]">{plan.yearly}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                ${plan.popular
                  ? "bg-[#0b4dff] text-white hover:bg-[#020c2b]"
                  : "bg-[#0b4dff] text-white hover:bg-[#020c2b]"}`}
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

export default WordpressHostingPlans;
