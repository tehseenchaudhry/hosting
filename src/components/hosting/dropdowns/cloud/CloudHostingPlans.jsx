import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Cloud",
    cpu: "2 vCPU",
    ram: "4 GB RAM",
    storage: "80 GB SSD",
    bandwidth: "2 TB",
    price: "$29.50",
    highlight: false,
  },
  {
    name: "Business Cloud",
    cpu: "4 vCPU",
    ram: "8 GB RAM",
    storage: "160 GB SSD",
    bandwidth: "4 TB",
    price: "$59.00",
    highlight: true,
  },
  {
    name: "Advanced Cloud",
    cpu: "8 vCPU",
    ram: "16 GB RAM",
    storage: "320 GB SSD",
    bandwidth: "8 TB",
    price: "$118.00",
    highlight: false,
  },
  {
    name: "Enterprise Cloud",
    cpu: "16 vCPU",
    ram: "32 GB RAM",
    storage: "640 GB SSD",
    bandwidth: "16 TB",
    price: "$219.00",
    highlight: false,
  },
];

const CloudHostingPlans = () => {
  return (
    <section id="plans" className="bg-[#f6f9fc] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* SECTION TITLE */}
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <h2
            className="text-3xl lg:text-4xl font-extrabold text-[#020c2b] mb-4"
            data-aos="fade-up"
          >
            Cloud hosting plans
          </h2>
          <p
            className="text-gray-600 text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Flexible and scalable cloud infrastructure built for performance,
            security and reliability.
          </p>
        </div>

        {/* PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative rounded-2xl bg-white border transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              ${
                plan.highlight
                  ? "border-[#0b4dff] shadow-lg scale-[1.03]"
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0b4dff] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Best value
                </span>
              )}

              <div className="p-8 text-center">
                <h3 className="text-lg font-bold text-[#020c2b] mb-6">
                  {plan.name}
                </h3>

                <ul className="space-y-3 text-sm text-gray-600 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0b4dff]" />
                    {plan.cpu}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0b4dff]" />
                    {plan.ram}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0b4dff]" />
                    {plan.storage}
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0b4dff]" />
                    {plan.bandwidth} bandwidth
                  </li>
                </ul>

                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-[#020c2b]">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm"> / month</span>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                  ${
                    plan.highlight
                      ? "bg-[#0b4dff] text-white hover:bg-[#093adf]"
                      : "bg-[#020c2b] text-white hover:bg-[#0b4dff]"
                  }`}
                >
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CloudHostingPlans;
