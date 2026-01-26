import { MapPin } from "lucide-react";

const SharedHostingMoroccoHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-20 pb-28">

        {/* BREADCRUMB */}
        <div
          className="flex items-center gap-2 text-sm text-gray-500 mb-10"
          data-aos="fade-down"
        >
          <span>Home</span>
          <span>/</span>
          <span>Hosting</span>
          <span>/</span>
          <span className="text-[#020c2b] font-medium">
            Shared Hosting in Morocco
          </span>
        </div>

        {/* HERO CONTENT */}
        <div className="text-center max-w-4xl mx-auto">

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#020c2b] leading-tight mb-6"
            data-aos="fade-up"
          >
            Shared Hosting in Morocco
          </h1>

          <p
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Web hosting for customers looking to host their data locally
            in a <span className="font-semibold text-[#020c2b]">100% Moroccan infrastructure</span>.
          </p>

          {/* LOCATION BADGE */}
          <div
            className="inline-flex items-center gap-3 bg-[#f6f9ff] text-[#020c2b] px-6 py-3 rounded-full font-medium shadow-sm"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <MapPin className="w-5 h-5 text-[#0b4dff]" />
            Data hosted in Morocco
          </div>

        </div>
      </div>
    </section>
  );
};

export default SharedHostingMoroccoHero;
