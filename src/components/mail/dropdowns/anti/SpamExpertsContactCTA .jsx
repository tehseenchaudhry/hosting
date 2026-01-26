import { MessageCircle, Phone } from "lucide-react";

const SpamExpertsContactCTA = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-24">

        {/* TITLE */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b]">
            Do you have more questions about this product ?
          </h2>
        </div>

        {/* ACTIONS */}
        <div className="grid md:grid-cols-2 gap-14 max-w-3xl mx-auto">

          {/* CHAT */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center mb-5">
              <MessageCircle className="w-6 h-6 text-[#020c2b]" />
            </div>

            <p className="text-gray-700 mb-2">
              You can talk to one of our agents :
            </p>

            <button className="text-[#0b4dff] font-semibold hover:underline transition">
              Let’s chat
            </button>
          </div>

          {/* CALL */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center mb-5">
              <Phone className="w-6 h-6 text-[#020c2b]" />
            </div>

            <p className="text-gray-700 mb-2">
              You can give us a call :
            </p>

            <p className="font-semibold text-[#020c2b]">
              +212 (05) 24 29 87 00
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpamExpertsContactCTA;
