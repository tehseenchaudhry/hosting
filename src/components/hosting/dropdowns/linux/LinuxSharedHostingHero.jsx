import heroImage from "../../../../assets/slider-infogerance-main.webp";

const LinuxSharedHostingHero = () => {
  return (
    <section className="relative w-full bg-[#020c2b] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Linux Shared Hosting"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay exactly like site */}
        <div className="absolute inset-0 bg-[#020c2b]/80" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT CONTENT */}
          <div className="text-white max-w-xl">

            <span className="block text-sm uppercase tracking-widest text-white/60 mb-4">
              Hosting
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Linux Shared Hosting
            </h1>

            <p className="text-lg text-gray-300 leading-7 mb-10">
              Affordable Linux web hosting to start and succeed online.
              A reliable solution designed for performance, security
              and simplicity.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#020c2b] px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition">
                Discover our offers
              </button>

              <button className="border border-white/40 text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#020c2b] transition">
                Compare plans
              </button>
            </div>
          </div>

          {/* RIGHT – INFO BLOCK (NOT A CARD, LIKE ORIGINAL) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-xl shadow-xl p-10 max-w-md ml-auto">

              <h3 className="text-2xl font-bold text-[#020c2b] mb-6">
                An economical hosting solution
              </h3>

              <p className="text-gray-600 leading-6 mb-8">
                Linux shared hosting is ideal for personal websites,
                blogs and small businesses. It offers excellent value
                while ensuring stability and performance.
              </p>

              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#020c2b] font-bold">•</span>
                  Optimized Linux infrastructure
                </li>
                <li className="flex gap-3">
                  <span className="text-[#020c2b] font-bold">•</span>
                  PHP, MySQL & CMS compatibility
                </li>
                <li className="flex gap-3">
                  <span className="text-[#020c2b] font-bold">•</span>
                  Secure & high-performance servers
                </li>
                <li className="flex gap-3">
                  <span className="text-[#020c2b] font-bold">•</span>
                  Easy management with control panel
                </li>
              </ul>

              <button className="mt-10 w-full bg-[#020c2b] text-white py-3 rounded-md font-semibold hover:bg-[#020c2b]/90 transition">
                Get started
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LinuxSharedHostingHero;
