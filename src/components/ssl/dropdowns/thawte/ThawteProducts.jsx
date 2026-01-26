import {
  ShieldCheck,
  Layers,
  Asterisk,
  BadgeCheck,
} from "lucide-react";

export default function ThawteProducts() {
  const products = [
    {
      title: "Thawte SSL123 Wildcard",
      price: "$368.00",
      validation: "Domain",
      multi: "No",
      wildcard: "Yes",
      warranty: "$500,000",
    },
    {
      title: "Thawte SSL Web Server Multi-Domain Wildcard",
      price: "$889.50",
      validation: "Organization",
      multi: "Yes",
      wildcard: "Yes",
      warranty: "$1,250,000",
    },
    {
      title: "Thawte SSL123 Certificates",
      price: "$52.50",
      validation: "Domain",
      multi: "No",
      wildcard: "No",
      warranty: "$500,000",
    },
    {
      title: "Thawte SSL Web Server Certificates",
      price: "$91.50",
      validation: "Organization",
      multi: "No",
      wildcard: "No",
      warranty: "$1,250,000",
    },
    {
      title: "Thawte SSL Webserver EV",
      price: "$240.50",
      validation: "Extended",
      multi: "No",
      wildcard: "No",
      warranty: "$1,500,000",
    },
    {
      title: "Thawte Wildcard SSL Certificate",
      price: "$482.50",
      validation: "Organization",
      multi: "No",
      wildcard: "Yes",
      warranty: "$1,250,000",
    },
  ];

  return (
    <section id="certificates" className="bg-[#f4f8ff] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl border border-gray-200
                p-6 flex flex-col
                hover:shadow-lg transition
              "
            >
              {/* TITLE */}
              <h3 className="font-semibold text-[#061a3a] mb-3">
                {item.title}
              </h3>

              {/* PRICE */}
              <div className="text-2xl font-bold text-[#061a3a] mb-4">
                {item.price}
                <span className="text-sm font-normal text-gray-500">
                  {" "}per year
                </span>
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 text-sm text-gray-700 mb-6">
                <li className="flex gap-3 items-center">
                  <ShieldCheck size={16} className="text-blue-600" />
                  Validation: {item.validation}
                </li>
                <li className="flex gap-3 items-center">
                  <Layers size={16} className="text-blue-600" />
                  Multi-domain: {item.multi}
                </li>
                <li className="flex gap-3 items-center">
                  <Asterisk size={16} className="text-blue-600" />
                  Wildcard: {item.wildcard}
                </li>
                <li className="flex gap-3 items-center">
                  <BadgeCheck size={16} className="text-blue-600" />
                  Warranty: {item.warranty}
                </li>
              </ul>

              {/* CTA */}
              <button
                className="
                  bg-[#1a73e8] text-white py-2 rounded-md
                  hover:bg-[#1558b0] transition
                "
              >
                Order
              </button>

              {/* MORE */}
              <a
                href="#"
                className="text-sm text-blue-600 mt-4 hover:underline"
              >
                More details →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
