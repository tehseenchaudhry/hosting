import { Phone, MessageCircle } from "lucide-react";

export default function SSLBottomCTA() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-[#061a3a]">
          Do you have more questions about this product?
        </h2>

        {/* OPTIONS */}
        <div className="mt-14 grid sm:grid-cols-2 gap-10">

          <div className="flex flex-col items-center">
            <div
              className="
                w-16 h-16 flex items-center justify-center
                rounded-full bg-blue-50
                text-blue-600
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
                mt-4 text-blue-600 font-semibold
                hover:underline
              "
            >
              Knowledgebase
            </a>
          </div>

          {/* PHONE */}
          <div className="flex flex-col items-center">
            <div
              className="
                w-16 h-16 flex items-center justify-center
                rounded-full bg-blue-50
                text-blue-600
              "
            >
              <Phone size={28} />
            </div>

            <p className="mt-6 text-gray-600 max-w-xs">
              You can reach our support team by phone for immediate assistance.
            </p>

            <a
              href="tel:+212052498700"
              className="
                mt-4 text-[#061a3a] font-semibold
              "
            >
              +212 (0)5 24 29 87 00
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
