import { Check, X } from "lucide-react";

const PLANS = [
  "Business Basic",
  "Apps For Business",
  "Business Standard",
  "Business Premium",
];

const FEATURES = [
  {
    name: "Office software included",
    values: [false, true, true, true],
  },
  {
    name: "Office on tablets and phones",
    values: [true, true, true, true],
  },
  {
    name: "Office Online Versions",
    values: [true, true, true, true],
  },
  {
    name: "Storage and file sharing",
    values: [true, true, true, true],
  },
  {
    name: "Professional email including calendar",
    values: [true, false, true, true],
  },
  {
    name: "Online meetings",
    values: [true, false, true, true],
  },
  {
    name: "Corporate social networking",
    values: [false, false, true, true],
  },
  {
    name: "Professional digital narrative tools",
    values: [false, true, true, true],
  },
];

const Office365Comparison = () => {
  return (
    <section className="w-full bg-[#020c2b] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Which office 365 product <br /> is best for me?
          </h2>

          <p className="text-white/70 text-lg">
            Managing your business is simpler with Office 365.
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-white font-semibold py-4">
                  Microsoft 365
                </th>
                {PLANS.map((plan, index) => (
                  <th
                    key={index}
                    className="text-white font-semibold py-4 text-center"
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="border-t border-white/10">
              {FEATURES.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10"
                >
                  <td className="text-white/80 py-4">
                    {feature.name}
                  </td>

                  {feature.values.map((value, i) => (
                    <td key={i} className="text-center py-4">
                      {value ? (
                        <Check className="w-5 h-5 text-[#0b4dff] mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-white/30 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="bg-white text-[#020c2b] font-semibold px-10 py-4 rounded-xl hover:bg-gray-100 transition">
            Choose your offer
          </button>
        </div>

      </div>
    </section>
  );
};

export default Office365Comparison;
