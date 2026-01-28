import React from "react";

const packs = [
  {
    name: "BRONZE Refill",
    discount: 5,
    price: "$296.50",
    items: [
      { ext: ".ma", public: "$16.00 per year", reseller: "$15.5 per year" },
      { ext: ".net", public: "$17.00 per year", reseller: "$16.5 per year" },
      { ext: ".com", public: "$14.50 per year", reseller: "$14 per year" },
    ],
    link: "",
  },
  {
    name: "SILVER Refill",
    discount: 10,
    price: "$593.00",
    items: [
      { ext: ".ma", public: "$16.00 per year", reseller: "$14.5 per year" },
      { ext: ".net", public: "$17.00 per year", reseller: "$15.5 per year" },
      { ext: ".com", public: "$14.50 per year", reseller: "$13.5 per year" },
    ],
    link: "",
  },
  {
    name: "GOLD Refill",
    discount: 15,
    price: "$1186.00",
    items: [
      { ext: ".ma", public: "$16.00 per year", reseller: "$14 per year" },
      { ext: ".net", public: "$17.00 per year", reseller: "$14.5 per year" },
      { ext: ".com", public: "$14.50 per year", reseller: "$12.5 per year" },
    ],
    link: "",
  },
];

const ResellerPacks = () => {
  return (
    <section className="py-20 px-10" id="packs">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Become a reseller and get advantageous discounts
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {packs.map((pack, index) => (
          <div key={index} className="bg-white border rounded-xl shadow px-2 py-8 flex flex-col">
            <h3 className="text-2xl font-semibold">{pack.name}</h3>
            <span className="bg-blue-200 ml-50 w-30 mt-2 mb-4 px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded-full">
              {pack.discount}% reduction
            </span>

            <p className="text-4xl font-bold mb-4">{pack.price}</p>

            <table className="w-full mb-4 text-left border-t border-gray-300">
              <thead>
                <tr>
                  <th className="py-1 font-medium">Extension</th>
                  <th className="py-1 font-medium">Public price</th>
                  <th className="py-1 font-medium">
                    Price reseller <span className="text-yellow-500">-{pack.discount}%</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pack.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="py-1 font-semibold">{item.ext}</td>
                    <td className="py-1">{item.public}</td>
                    <td className="py-1">{item.reseller}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <a
              href={pack.link}
              target="_blank"
              rel="noreferrer"
              className=" w-36  mx-auto bg-blue-500  hover:bg-black text-white transition-colors rounded px-4 py-2 font-medium flex justify-center"
            >
              Commander
              
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResellerPacks;
