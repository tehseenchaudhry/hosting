import { ArrowRight } from "lucide-react";
import heroImg from "../../../../assets/slider-main-ndd.webp";

const Microsoft365Hero = () => {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={heroImg}
        alt="Microsoft 365"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#020c2b]/75" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 h-full flex items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="bg-black/40 backdrop-blur-md rounded-2xl p-10 max-w-xl shadow-2xl transition hover:scale-[1.01]"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Microsoft <br /> Office 365
          </h1>

          <p className="text-white/90 text-lg leading-7 mb-6">
            Office 365 is a Microsoft collaboration tool that provides essential
            applications for efficient company operations, offering new ways
            of working.
          </p>

          <p className="text-white/70 text-sm mb-8">
            ✓ Microsoft Partner
          </p>

          <button className="group inline-flex items-center gap-2 text-white font-semibold hover:text-[#0b4dff] transition">
            Discover offers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Microsoft365Hero;
