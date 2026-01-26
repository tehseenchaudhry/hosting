const MultiSiteHostingHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 pt-24 pb-28 text-center">

        {/* TITLE */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#020c2b] mb-6"
          data-aos="fade-up"
        >
          Multi-site hosting
        </h1>

        {/* SUBTITLE */}
        <p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14 leading-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Choose a single hosting plan for all your websites
        </p>

        {/* CTA BUTTONS */}
        <div
          className="flex flex-wrap justify-center gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="bg-[#0b4dff] hover:bg-[#083ad6] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
            View plans
          </button>

          <button className="border border-[#020c2b] text-[#020c2b] font-semibold px-10 py-4 rounded-xl hover:bg-[#020c2b] hover:text-white transition-all duration-300">
            Contact sales
          </button>
        </div>

      </div>
    </section>
  );
};

export default MultiSiteHostingHero;
