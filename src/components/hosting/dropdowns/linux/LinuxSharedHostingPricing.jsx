const LinuxSharedHostingPricing = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#020c2b] mb-4">
            A hosting offer that suits your needs
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the Linux shared hosting plan that best fits your website and budget.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* CARD */}
          {[
            {
              name: "Foolish",
              price: "$40.00",
              tag: "Basic plan",
              features: [
                "1 Website",
                "10 GB SSD Storage",
                "Unlimited Bandwidth",
                "1 MySQL Database",
                "Free SSL Certificate",
                "Email Accounts",
              ],
            },
            {
              name: "Wise",
              price: "$71.60",
              tag: "Best value",
              highlight: true,
              features: [
                "10 Websites",
                "50 GB SSD Storage",
                "Unlimited Bandwidth",
                "10 MySQL Databases",
                "Free SSL Certificate",
                "Priority Support",
              ],
            },
            {
              name: "Neat",
              price: "$119.60",
              tag: "Advanced",
              features: [
                "Unlimited Websites",
                "100 GB SSD Storage",
                "Unlimited Bandwidth",
                "Unlimited Databases",
                "Free SSL Certificate",
                "Advanced Security",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${
                plan.highlight
                  ? "border-[#1e40ff] shadow-2xl scale-105"
                  : "border-gray-200 shadow-md"
              } p-10 flex flex-col`}
            >
              {/* PLAN HEADER */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#020c2b] mb-2">
                  {plan.name}
                </h3>
                <span className="inline-block text-xs bg-[#f2f5ff] text-[#1e40ff] px-3 py-1 rounded-full font-semibold">
                  {plan.tag}
                </span>
              </div>

              {/* PRICE */}
              <div className="mb-8">
                <p className="text-4xl font-bold text-[#020c2b]">
                  {plan.price}
                </p>
                <span className="text-gray-500 text-sm">
                  / year excl. VAT
                </span>
              </div>

              {/* CTA */}
              <button
                className={`mb-8 py-4 rounded-md font-semibold transition ${
                  plan.highlight
                    ? "bg-[#1e40ff] text-white hover:bg-[#1e40ff]/90"
                    : "bg-[#020c2b] text-white hover:bg-[#020c2b]/90"
                }`}
              >
                Choose plan
              </button>

              {/* FEATURES */}
              <ul className="space-y-4 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#1e40ff] font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOT NOTE */}
        <p className="text-center text-sm text-gray-500 mt-14">
          Prices shown are indicative and may vary depending on configuration.
        </p>
      </div>
    </section>
  );
};

export default LinuxSharedHostingPricing;
