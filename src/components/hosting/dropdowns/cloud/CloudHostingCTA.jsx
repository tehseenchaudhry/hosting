import { ArrowRight } from "lucide-react";

const CloudHostingCTA = () => {
  return (
    <section className="relative bg-[#020c2b] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b4dff]/20 via-transparent to-transparent pointer-events-none"></div>

        {/* CONTENT */}
        <div
          className="relative flex flex-col lg:flex-row items-center justify-between gap-16"
          data-aos="fade-up"
        >
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Do you have more questions <br className="hidden sm:block" />
              about Cloud Hosting?
            </h2>

            <p className="text-gray-300 text-lg leading-7">
              Our experts are here to help you choose the right cloud
              infrastructure tailored to your performance and scalability
              needs.
            </p>
          </div>

          {/* CTA BUTTON */}
          <div>
            <a
              href="/contact"
              className="group inline-flex items-center gap-4 bg-[#0b4dff] hover:bg-white text-white hover:text-[#020c2b] font-semibold px-10 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Contact our experts
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CloudHostingCTA;
