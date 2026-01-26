import { Phone, MessageCircle } from "lucide-react";

export default function DigicertBottomCTA() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#061a3a]">
          Do you have more questions about this product?
        </h2>

        {/* SUPPORT OPTIONS */}
        <div className="mt-16 grid sm:grid-cols-2 gap-12">

          {/* KNOWLEDGE BASE */}
          <div className="flex flex-col items-center">
            <div
              className="
                w-16 h-16 rounded-full
                flex items-center justify-center
                bg-blue-50 text-blue-600
              "
            >
              <MessageCircle size={28} />
            </div>

            <p className="mt-6 text-gray-600 max-w-xs">
              You can find answers to most questions in our knowledge base.
            </p>

            <a
              href="#"
              className="
                mt-4 font-semibold text-blue-600
                hover:underline
              "
            >
              Knowledgebase
            </a>
          </div>

          {/* PHONE SUPPORT */}
          <div className="flex flex-col items-center">
            <div
              className="
                w-16 h-16 rounded-full
                flex items-center justify-center
                bg-blue-50 text-blue-600
              "
            >
              <Phone size={28} />
            </div>

            <p className="mt-6 text-gray-600 max-w-xs">
              You can reach our support team by phone for immediate assistance.
            </p>

            <a
              href="tel:+2120524298700"
              className="mt-4 font-semibold text-[#061a3a]"
            >
              +212 (0)5 24 29 87 00
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
