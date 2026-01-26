import { Check } from "lucide-react";

const PLANS = [
  {
    title: "Business Starter",
    price: "$6.00",
    subtitle: "per user / month",
    features: [
      "Professional Gmail",
      "30 GB cloud storage per user",
      "Google Meet (100 participants)",
      "Standard support",
    ],
  },
  {
    title: "Business Standard",
    price: "$12.00",
    subtitle: "per user / month",
    popular: true,
    features: [
      "Professional Gmail",
      "2 TB cloud storage per user",
      "Google Meet (150 participants)",
      "Shared drives",
      "Standard support",
    ],
  },
  {
    title: "Business Plus",
    price: "$18.00",
    subtitle: "per user / month",
    features: [
      "Professional Gmail",
      "5 TB cloud storage per user",
      "Google Meet (500 participants)",
      "Advanced security & controls",
      "Enhanced support",
    ],
  },
];

const WorkspaceBundles = () => {
  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <div
          data-aos="fade-up"
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b]">
            Workspace Bundles
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-10">

          {PLANS.map((plan, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className={`relative bg-white rounded-2xl shadow-md border
                ${plan.popular ? "border-[#0b4dff]" : "border-gray-200"}
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <span className="absolute top-5 right-5 bg-[#0b4dff] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Most popular
                </span>
              )}

              <div className="p-10">
                <h3 className="text-xl font-bold text-[#020c2b] mb-2">
                  {plan.title}
                </h3>

                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-[#020c2b]">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    {plan.subtitle}
                  </span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <Check className="w-5 h-5 text-[#0b4dff] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#0b4dff] hover:bg-[#0836cc] text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]">
                  Order
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WorkspaceBundles;
