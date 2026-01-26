import { MessageCircle, Phone } from "lucide-react";

const MailSolutionsCTA = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-24">

        {/* TITLE */}
        <h2
          className="text-center text-2xl md:text-3xl font-extrabold text-[#020c2b] mb-16"
          data-aos="fade-up"
        >
          Do you have more questions about this product ?
        </h2>

        {/* CTA OPTIONS */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">

          {/* CHAT */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 rounded-full border border-[#020c2b]/20 flex items-center justify-center mb-6 group-hover:border-[#0b4dff] transition">
              <MessageCircle className="w-6 h-6 text-[#020c2b] group-hover:text-[#0b4dff] transition" />
            </div>

            <p className="text-[#020c2b] text-sm mb-2">
              You can talk to one of our agents :
            </p>

            <button className="text-[#0b4dff] font-semibold hover:underline transition">
              Let’s chat
            </button>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px h-24 bg-gray-200" />

          {/* CALL */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 rounded-full border border-[#020c2b]/20 flex items-center justify-center mb-6 group-hover:border-[#0b4dff] transition">
              <Phone className="w-6 h-6 text-[#020c2b] group-hover:text-[#0b4dff] transition" />
            </div>

            <p className="text-[#020c2b] text-sm mb-2">
              You can give us a call :
            </p>

            <a
              href="tel:+2120524298700"
              className="text-[#020c2b] font-semibold hover:text-[#0b4dff] transition"
            >
              +212 (05) 24 29 87 00
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MailSolutionsCTA;
