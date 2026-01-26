import { ArrowRight } from "lucide-react";

const MultiSiteHostingCTA = () => {
  return (
    <section className="w-full bg-[#020c2b] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-28 text-center">

        {/* HEADING */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
          data-aos="fade-up"
        >
          Ready to host all your websites with one solution?
        </h2>

        {/* SUBTEXT */}
        <p
          className="text-white/80 text-lg leading-7 max-w-3xl mx-auto mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Choose Genious multi-site hosting and manage all your websites from a
          single, powerful and scalable hosting platform.
        </p>

        {/* CTA BUTTONS */}
        <div
          className="flex flex-wrap justify-center gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="group inline-flex items-center gap-2 bg-[#0b4dff] hover:bg-[#0836cc] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View plans
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white hover:text-[#020c2b] transition-all duration-300">
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default MultiSiteHostingCTA;
