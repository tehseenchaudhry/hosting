import { ArrowRight } from "lucide-react";
import ctaImage from "../../../../assets/slider-infogerance-main.webp"; // adjust path if needed

const DedicatedServersCTA = () => {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Dedicated servers CTA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c2b]/95 via-[#020c2b]/90 to-[#020c2b]/60" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <div
          className="max-w-2xl"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
            Need a powerful <br className="hidden sm:block" />
            dedicated server?
          </h2>

          <p className="text-gray-200 text-lg leading-7 mb-10">
            Our experts help you design a dedicated server infrastructure
            perfectly adapted to your business needs, performance requirements
            and security constraints.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#020c2b]
              px-8 py-4 rounded-xl font-semibold
              hover:bg-gray-100 transition-all duration-300 group"
            >
              Contact sales
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/hosting/dedicated"
              className="inline-flex items-center gap-3 border border-white/40
              text-white px-8 py-4 rounded-xl font-semibold
              hover:bg-white hover:text-[#020c2b]
              transition-all duration-300"
            >
              Discover offers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedServersCTA;
