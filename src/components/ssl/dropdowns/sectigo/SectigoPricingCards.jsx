import { ShieldCheck, Globe, Lock } from "lucide-react";

export default function SectigoPricingCards() {
  const plans = [
    {
      title: "Sectigo PositiveSSL",
      price: "$11.50",
      type: "Domain Validation",
      features: ["1 Domain", "Fast issuance", "99.9% Browser support"],
    },
    {
      title: "Sectigo PositiveSSL Multi-Domain",
      price: "$37.50",
      type: "Domain Validation",
      features: ["Multiple domains", "Fast issuance", "SAN support"],
    },
    {
      title: "Sectigo PositiveSSL Wildcard",
      price: "$121.50",
      type: "Domain Validation",
      features: ["Unlimited subdomains", "Fast issuance", "Wildcard SSL"],
    },
    {
      title: "Sectigo PositiveSSL EV",
      price: "$149.50",
      type: "Extended Validation",
      features: ["Company verification", "High trust", "Green address bar"],
    },
    {
      title: "Sectigo PositiveSSL EV Multi-Domain",
      price: "$980.00",
      type: "Extended Validation",
      features: ["Multiple domains", "Maximum trust", "EV status"],
    },
    {
      title: "Sectigo SSL EV Multi-Domain",
      price: "$477.50",
      type: "Extended Validation",
      features: ["Enterprise grade", "SAN support", "High security"],
    },
  ];

  return (
    <section className="bg-[#f5f8fd] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl p-7
                border border-gray-200
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
              "
            >
              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#061a3a]">
                {plan.title}
              </h3>

              {/* PRICE */}
              <div className="mt-4">
                <span className="text-3xl font-bold text-[#061a3a]">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm"> / year</span>
              </div>

              {/* TYPE */}
              <p className="mt-3 text-sm text-blue-700 font-medium">
                {plan.type}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className="
                  mt-8 w-full py-3 rounded-xl
                  bg-blue-600 text-white font-semibold
                  transition-all duration-300
                  hover:bg-blue-700
                "
              >
                Order
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
