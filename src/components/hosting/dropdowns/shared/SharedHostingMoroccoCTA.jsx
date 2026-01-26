import { MessageCircle, Phone } from "lucide-react";

const SharedHostingMoroccoCTA = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-[#0b4dff]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-[#020c2b]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-16 py-32">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-28">
          <h2
            className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold text-[#020c2b] leading-tight mb-6"
            data-aos="fade-up"
          >
            Need help choosing the right hosting solution?
          </h2>

          <p
            className="text-gray-600 text-base md:text-lg leading-7"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our experts are here to guide you. Whether you need advice,
            technical clarification, or a custom hosting solution, we’re
            ready to help.
          </p>
        </div>

        {/* CTA CARDS */}
        <div className="grid sm:grid-cols-2 gap-24 max-w-[960px] mx-auto">

          {/* CHAT */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="group relative bg-[#f6f9ff] rounded-[32px] px-14 py-18 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(11,77,255,0.18)]"
          >
            <div className="mx-auto mb-10 w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#0b4dff] transition-all duration-500">
              <MessageCircle className="w-8 h-8 text-[#0b4dff] group-hover:text-white transition" />
            </div>

            <h3 className="text-xl font-bold text-[#020c2b] mb-4">
              Chat with an expert
            </h3>

            <p className="text-gray-600 text-sm leading-6 mb-8">
              Get instant answers from our hosting specialists and find
              the solution that perfectly matches your needs.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-[#020c2b] group-hover:text-[#0b4dff] transition"
            >
              Start live chat
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
          </div>

          {/* CALL */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="group relative bg-[#f6f9ff] rounded-[32px] px-14 py-18 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(11,77,255,0.18)]"
          >
            <div className="mx-auto mb-10 w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#0b4dff] transition-all duration-500">
              <Phone className="w-8 h-8 text-[#0b4dff] group-hover:text-white transition" />
            </div>

            <h3 className="text-xl font-bold text-[#020c2b] mb-4">
              Speak to our team
            </h3>

            <p className="text-gray-600 text-sm leading-6 mb-8">
              Prefer to talk? Our advisors are available to discuss your
              hosting requirements and provide tailored guidance.
            </p>

            <a
              href="tel:+2120524298700"
              className="text-[15px] font-semibold text-[#020c2b] group-hover:text-[#0b4dff] transition"
            >
              +212 (05) 24 29 87 00
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SharedHostingMoroccoCTA;
