const MyCompanyPricingCTA = () => {
  return (
    <section className="w-full bg-[#020c2b] py-24">
      <div
        className="max-w-[1200px] mx-auto px-6 text-center"
        data-aos="zoom-in"
      >
        {/* PRICE */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            $89<span className="text-xl font-medium text-white/70">.00 / year</span>
          </h2>
        </div>

        {/* CTA BUTTON */}
        <button
          className="inline-flex items-center justify-center
          bg-white text-[#020c2b]
          px-10 py-4 rounded-xl font-semibold
          transition-all duration-300
          hover:bg-[#0b4dff] hover:text-white hover:scale-105"
        >
          Commander maintenant
        </button>
      </div>
    </section>
  );
};

export default MyCompanyPricingCTA;
