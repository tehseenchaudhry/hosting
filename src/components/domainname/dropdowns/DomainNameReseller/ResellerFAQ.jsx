import React from "react";

const ResellerFAQ = () => {
  return (
    <section id="faq" className="bg-blue-50 px-3 lg:px-26 py-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase mb-1 text-sm font-medium text-gray-700">frequently asked questions</p>
          <h2 className="text-4xl md:text-5xl font-bold">For domain name reseller</h2>
        </div>

        {/* FAQ Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-600">
            <thead >
              <tr>
                <th className="p-3 text-left"></th>
                <th className="p-3 font-bold text-left">Bronze Refill</th>
                <th className="p-3 font-bold text-left">Silver Refill</th>
                <th className="p-3 font-bold text-left">Gold Refill</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-gray-600">
                <th className="p-3 font-semibold text-left">If you reach a total volume of</th>
                <td className="p-3 font-semibold">50 domains and +</td>
                <td className="p-3 font-semibold">100 domains</td>
                <td className="p-3 font-semibold">200 domains</td>
              </tr>
              <tr className="border-t border-gray-600">
                <th className="p-3 font-semibold text-left">You get a discount of</th>
                <td className="p-3 font-semibold">5%</td>
                <td className="p-3 font-semibold">10%</td>
                <td className="p-3 font-semibold">15%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ResellerFAQ;
