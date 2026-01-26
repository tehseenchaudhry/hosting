const WordpressHostingMigrationCTA = () => {
  return (
    <section className="w-full bg-[#020c2b]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-24">

        <div
          className="text-center"
          data-aos="zoom-in"
        >
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Have we even mentioned free migration?
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-7">
            Move your WordPress website to Genious with zero downtime.
            Our experts handle everything for you — fast, secure and free.
          </p>

          {/* CTA BUTTON */}
          <div data-aos="fade-up" data-aos-delay="150">
            <button
              className="inline-flex items-center gap-2 bg-[#0b4dff] hover:bg-[#083ad6] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Migrate my site
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WordpressHostingMigrationCTA;
