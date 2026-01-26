import { Check } from "lucide-react";

const PLANS = [
  {
    title: "Intel Xeon E3-1230v6",
    subtitle: "Quad Core 3.5 GHz",
    price: "$2306.00",
    features: [
      "Processor: Intel Xeon E3-1230v6",
      "CPU Speed: 3.5 GHz",
      "CPU Cores: 4",
      "CPU Cache: 8 MB",
      "Memory: 16 GB",
      "Disk: 1 TB",
      "Uplink: 100 Mb/s",
    ],
    popular: false,
  },
  {
    title: "Intel Xeon E5-1620v4",
    subtitle: "Quad Core 3.5 GHz",
    price: "$2882.00",
    features: [
      "Processor: Intel Xeon E5-1620v4",
      "CPU Speed: 3.5 GHz",
      "CPU Cores: 4",
      "CPU Cache: 10 MB",
      "Memory: 32 GB",
      "Disk: 2 TB",
      "Uplink: 100 Mb/s",
    ],
    popular: true,
  },
  {
    title: "Intel Xeon E5-2620v4",
    subtitle: "Octa Core 2.1 GHz",
    price: "$4507.50",
    features: [
      "Processor: Intel Xeon E5-2620v4",
      "CPU Speed: 2.1 GHz",
      "CPU Cores: 8",
      "CPU Cache: 20 MB",
      "Memory: 32 GB",
      "Disk: 2 TB",
      "Uplink: 100 Mb/s",
    ],
    popular: false,
  },
];

const DedicatedServersPlans = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* Toggle Headings */}
        <div
          className="flex flex-col md:flex-row gap-6 mb-20"
          data-aos="fade-up"
        >
          <div className="px-8 py-5 rounded-xl border-2 border-[#0b4dff] text-[#020c2b] font-semibold shadow-sm">
            Dedicated servers for professionals
          </div>
          <div className="px-8 py-5 rounded-xl border border-gray-200 text-gray-400">
            Dedicated servers for individuals
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-14">

          {PLANS.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`group relative rounded-3xl border bg-white p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl
                ${plan.popular ? "border-[#0b4dff]" : "border-gray-200"}
              `}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0b4dff] text-white text-xs px-4 py-1 rounded-full shadow">
                  Best value
                </span>
              )}

              <h3 className="text-lg font-bold text-[#020c2b] mb-1">
                {plan.title}
              </h3>
              <p className="text-sm text-gray-500 mb-8">
                {plan.subtitle}
              </p>

              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-gray-600"
                  >
                    <Check className="w-4 h-4 text-[#0b4dff] mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t pt-8">
                <div className="text-2xl font-extrabold text-[#020c2b] mb-5">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-500">
                    {" "}per year
                  </span>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                    ${
                      plan.popular
                        ? "bg-[#0b4dff] text-white hover:bg-[#093bd9]"
                        : "bg-[#f6f9ff] text-[#020c2b] hover:bg-[#0b4dff] hover:text-white"
                    }
                  `}
                >
                  Order →
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Info Note */}
        <div
          className="mt-20 bg-[#fff3cd] border border-[#ffe69c] rounded-2xl px-8 py-6 flex gap-4 items-start"
          data-aos="fade-up"
        >
          <span className="text-lg">ℹ️</span>
          <p className="text-sm text-gray-700 leading-6">
            Our servers are located in our Data Center in Montreal, Canada.
            Dedicated servers hosted locally in Morocco are also available on request.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DedicatedServersPlans;
