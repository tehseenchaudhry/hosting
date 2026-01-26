import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WordpressHostingHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-28 pb-24">

        <div className="text-center max-w-4xl mx-auto">

          {/* BADGE */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-[#f6f9ff] text-[#0b4dff] font-medium text-sm mb-6"
            data-aos="fade-down"
          >
            <Zap className="w-4 h-4" />
            Optimized WordPress Hosting
          </div>

          {/* TITLE */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
            text-[#020c2b] leading-tight mb-6"
            data-aos="fade-up"
          >
            WordPress Hosting
          </h1>

          {/* SUBTITLE */}
          <p
            className="text-lg md:text-xl text-gray-600 leading-8 
            max-w-3xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Optimized WordPress hosting for speed, security and performance.
            Enjoy blazing-fast load times, enhanced protection and a
            hassle-free WordPress experience.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="flex flex-wrap justify-center gap-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link
              to="#plans"
              className="group inline-flex items-center gap-3 
              bg-[#0b4dff] text-white px-8 py-4 rounded-xl 
              font-semibold shadow-lg transition-all duration-300
              hover:bg-[#020c2b]"
            >
              View plans
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 
              border border-[#020c2b]/20 px-8 py-4 rounded-xl 
              font-semibold text-[#020c2b] transition-all duration-300
              hover:bg-[#020c2b] hover:text-white"
            >
              <ShieldCheck className="w-5 h-5" />
              Get expert advice
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WordpressHostingHero;
