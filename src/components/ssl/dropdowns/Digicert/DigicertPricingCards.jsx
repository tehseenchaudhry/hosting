import { useState } from "react";
import {
  ShieldCheck,
  Globe,
  Layers,
  Lock,
  BadgeCheck,
} from "lucide-react";

export default function DigicertPricingCards() {
  const products = [
    {
      name: "DigiCert Standard SSL",
      prices: ["$418.00", "$788.00", "$1146.00"],
      features: [
        { icon: ShieldCheck, text: "Validation: Organisation" },
        { icon: Globe, text: "Multi-domain: No" },
        { icon: Layers, text: "Wildcard: No" },
        { icon: BadgeCheck, text: "Warranty: $1,000,000" },
      ],
    },
    {
      name: "DigiCert Extended Validation SSL",
      prices: ["$639.00", "$1218.00", "$1791.00"],
      features: [
        { icon: ShieldCheck, text: "Validation: Extended" },
        { icon: Globe, text: "Multi-domain: No" },
        { icon: Layers, text: "Wildcard: No" },
        { icon: BadgeCheck, text: "Warranty: $1,000,000" },
      ],
    },
    {
      name: "DigiCert Multi-Domain SSL",
      prices: ["$979.00", "$1856.50", "$2734.00"],
      features: [
        { icon: ShieldCheck, text: "Validation: Organisation" },
        { icon: Globe, text: "Multi-domain: Yes" },
        { icon: Layers, text: "Wildcard: No" },
        { icon: BadgeCheck, text: "Warranty: $1,000,000" },
      ],
    },
    {
      name: "DigiCert EV Multi-Domain SSL",
      prices: ["$1140.00", "$2161.00", "$3181.50"],
      features: [
        { icon: ShieldCheck, text: "Validation: Extended" },
        { icon: Globe, text: "Multi-domain: Yes" },
        { icon: Layers, text: "Wildcard: No" },
        { icon: BadgeCheck, text: "Warranty: $1,000,000" },
      ],
    },
    {
      name: "DigiCert Wildcard SSL",
      prices: ["$1361.00", "$2584.50", "$3814.00"],
      features: [
        { icon: ShieldCheck, text: "Validation: Organisation" },
        { icon: Globe, text: "Multi-domain: No" },
        { icon: Layers, text: "Wildcard: Yes" },
        { icon: BadgeCheck, text: "Warranty: $1,000,000" },
      ],
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <PricingCard key={index} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function PricingCard({ product }) {
  const [selected, setSelected] = useState(2); // 3 years selected by default

  return (
    <div
      className="
        bg-white border border-gray-200
        rounded-2xl p-7
        shadow-sm
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-lg
      "
    >
      {/* TITLE */}
      <h3 className="font-semibold text-[#061a3a] text-lg">
        {product.name}
      </h3>

      {/* FEATURES */}
      <ul className="mt-5 space-y-3 text-sm text-gray-600">
        {product.features.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <item.icon size={16} className="text-blue-600" />
            {item.text}
          </li>
        ))}
      </ul>

      {/* PRICES */}
      <div className="mt-6 space-y-2">
        {product.prices.map((price, i) => (
          <label
            key={i}
            className="
              flex items-center justify-between
              border rounded-lg px-4 py-3
              cursor-pointer text-sm
              transition
              hover:border-blue-500
            "
          >
            <span>
              {price} <span className="text-gray-400">/ year</span>
            </span>

            <input
              type="radio"
              name={product.name}
              checked={selected === i}
              onChange={() => setSelected(i)}
              className="accent-blue-600"
            />
          </label>
        ))}
      </div>

      {/* BUTTON */}
      <button
        className="
          mt-6 w-full py-3 rounded-xl
          bg-blue-600 text-white font-semibold
          transition hover:bg-blue-700
        "
      >
        Order
      </button>

      {/* MORE */}
      <button className="mt-4 text-sm text-blue-600 hover:underline">
        More detail →
      </button>
    </div>
  );
}
