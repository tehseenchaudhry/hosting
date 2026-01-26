import economicalImage from "../../../../assets/why-linux.webp";

const LinuxSharedHostingEconomical = () => {
  return (
    <section className="w-full bg-[#ffd84d]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#020c2b] mb-6 leading-tight">
              An economical hosting solution to make your first steps on the Internet easier
            </h2>

            <p className="text-[#020c2b]/80 text-lg leading-7 mb-6 max-w-xl">
              Linux shared hosting is the ideal solution to launch your first
              website with complete peace of mind. It combines affordability,
              reliability and performance for individuals and small businesses.
            </p>

            <p className="text-[#020c2b]/80 text-base leading-7 mb-8 max-w-xl">
              With optimized servers, intuitive management tools and enhanced
              security, you can focus on growing your online presence while we
              take care of the technical side.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#020c2b] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#020c2b]/90 transition">
              Discover our Linux offers →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Decorative shape */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-white/30 rounded-2xl -z-10"></div>

            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={economicalImage}
                alt="Economical Linux hosting"
                className="w-full h-[320px] md:h-[420px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LinuxSharedHostingEconomical;
