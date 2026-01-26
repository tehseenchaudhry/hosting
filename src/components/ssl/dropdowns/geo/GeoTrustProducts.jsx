import { ShieldCheck, Globe, Layers, BadgeCheck } from "lucide-react";

export default function GeoTrustProducts() {
  const products = [
    {
      title: "GeoTrust QuickSSL Premium Wildcard",
      price: "$368.00",
      features: [
        { icon: ShieldCheck, text: "Domain validation" },
        { icon: Globe, text: "Multi-domain" },
        { icon: Layers, text: "Wildcard" },
        { icon: BadgeCheck, text: "Warranty $500,000" },
      ],
    },
    {
      title: "GeoTrust True BusinessID Multi-Domain Wildcard",
      price: "$905.50",
      features: [
        { icon: ShieldCheck, text: "Organization validation" },
        { icon: Globe, text: "Multi-domain" },
        { icon: Layers, text: "Wildcard" },
        { icon: BadgeCheck, text: "Warranty $1,250,000" },
      ],
    },
    {
      title: "GeoTrust QuickSSL Premium Certificate",
      price: "$104.50",
      features: [
        { icon: ShieldCheck, text: "Domain validation" },
        { icon: Globe, text: "Single domain" },
        { icon: Layers, text: "No wildcard" },
        { icon: BadgeCheck, text: "Warranty $500,000" },
      ],
    },
    {
      title: "GeoTrust True BusinessID Certificate",
      price: "$128.50",
      features: [
        { icon: ShieldCheck, text: "Organization validation" },
        { icon: Globe, text: "Single domain" },
        { icon: Layers, text: "No wildcard" },
        { icon: BadgeCheck, text: "Warranty $1,250,000" },
      ],
    },
    {
      title: "GeoTrust True BusinessID Multi-Domain",
      price: "$365.50",
      features: [
        { icon: ShieldCheck, text: "Organization validation" },
        { icon: Globe, text: "Multi-domain" },
        { icon: Layers, text: "No wildcard" },
        { icon: BadgeCheck, text: "Warranty $1,250,000" },
      ],
    },
    {
      title: "GeoTrust True BusinessID with EV",
      price: "$302.50",
      features: [
        { icon: ShieldCheck, text: "Extended validation" },
        { icon: Globe, text: "Single domain" },
        { icon: Layers, text: "No wildcard" },
        { icon: BadgeCheck, text: "Warranty $1,500,000" },
      ],
    },
  ];

  return (
    <section className="bg-[#f4f8ff] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="
                bg-white rounded-2xl border border-gray-200
                p-6 flex flex-col
                hover:shadow-xl transition-all duration-300
              "
            >
              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>

              {/* PRICE */}
              <p className="text-2xl font-bold text-blue-600 mb-6">
                {product.price}
                <span className="text-sm font-normal text-gray-500">
                  {" "} / year
                </span>
              </p>

              {/* FEATURES */}
              <ul className="space-y-3 text-sm text-gray-700 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <feature.icon size={16} className="text-blue-500" />
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className="
                  mt-auto w-full py-2.5 rounded-lg
                  bg-blue-600 text-white font-semibold
                  hover:bg-blue-700 transition
                "
              >
                Order →
              </button>

              {/* MORE */}
              <a
                href="#"
                className="mt-4 text-sm text-blue-600 hover:underline text-center"
              >
                More details
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
