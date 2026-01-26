import ctaImage from "../../../../assets/twice-slider.webp";

const LinuxSharedHostingCTA = () => {
  return (
    <section className="w-full bg-[#f8f9fc] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-[#0a3cff]">
              LINUX SHARED HOSTING
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#020c2b] leading-tight mb-8">
              An economical and <br /> high-performance <br /> hosting solution
            </h2>

            <p className="text-gray-600 text-lg leading-7 max-w-xl mb-12">
              Linux shared hosting is the ideal solution for hosting websites,
              blogs, and professional applications while benefiting from a
              stable, secure, and high-availability infrastructure.
            </p>

            {/* CTA BUTTON */}
            <button
              className="inline-flex items-center gap-3 
              bg-[#0a3cff] text-white px-8 py-4 rounded-xl 
              font-semibold transition-all duration-300
              hover:bg-[#002edc] hover:gap-4"
            >
              Contact our experts
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end">

            {/* DECORATIVE SHAPE */}
            <div className="absolute -top-12 -right-12 w-[420px] h-[420px] 
              bg-[#0a3cff]/10 rounded-full blur-3xl" />

            <div
              className="relative rounded-[32px] overflow-hidden 
              shadow-[0_40px_80px_rgba(2,12,43,0.18)]
              transition-transform duration-700 hover:-translate-y-2"
            >
              <img
                src={ctaImage}
                alt="Linux shared hosting"
                className="w-full max-w-[520px] h-[420px] object-cover 
                transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LinuxSharedHostingCTA;
