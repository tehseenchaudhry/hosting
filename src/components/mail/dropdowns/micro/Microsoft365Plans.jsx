import {
  Mail,
  Cloud,
  ShieldCheck,
  Users,
  Laptop,
} from "lucide-react";

const plans = [
  {
    title: "Business Basic",
    price: "$80.50",
    features: [
      "Business email",
      "1 TB cloud storage",
      "Web & mobile apps",
      "Video conferencing",
    ],
  },
  {
    title: "Apps For Business",
    price: "$134.00",
    features: [
      "Office apps (Desktop)",
      "Cloud file storage",
      "Advanced collaboration",
      "Automatic updates",
    ],
  },
  {
    title: "Business Standard",
    price: "$201.00",
    features: [
      "Premium Office apps",
      "Advanced security",
      "Team collaboration tools",
      "Cloud & desktop access",
    ],
  },
  {
    title: "Business Premium",
    price: "$321.50",
    features: [
      "Advanced threat protection",
      "Device management",
      "Enterprise-grade security",
      "Full Microsoft ecosystem",
    ],
  },
];

const Microsoft365Plans = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* SECTION TITLE */}
        <div
          className="max-w-3xl mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-4">
            Plans built to help you achieve more with Office applications
          </h2>
        </div>

        {/* PLANS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
            >
              <h3 className="text-lg font-bold text-[#020c2b] mb-3">
                Microsoft 365
              </h3>

              <h4 className="text-xl font-extrabold mb-6">
                {plan.title}
              </h4>

              <p className="text-3xl font-extrabold text-[#0b4dff] mb-8">
                {plan.price}
                <span className="text-sm text-gray-500 font-medium">
                  {" "}per year
                </span>
              </p>

              {/* FEATURES */}
              <ul className="space-y-4 text-sm text-gray-700 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0b4dff] mt-[2px]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button className="mt-auto bg-[#0b4dff] hover:bg-[#0836cc] text-white py-3 rounded-xl font-semibold transition">
                Commander
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Microsoft365Plans;
