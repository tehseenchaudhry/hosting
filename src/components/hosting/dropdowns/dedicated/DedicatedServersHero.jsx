const DedicatedServersHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-28 pb-24">

        {/* Breadcrumb */}
        <div
          className="text-sm text-gray-400 mb-14"
          data-aos="fade-down"
        >
          Home &nbsp;›&nbsp; Hosting &nbsp;›&nbsp; Dedicated Servers
        </div>

        {/* Hero Content */}
        <div
          className="max-w-4xl"
          data-aos="fade-up"
        >
          <h1 className="text-[42px] md:text-[56px] font-extrabold text-[#020c2b] leading-[1.15] mb-7">
            Dedicated Servers
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-8 max-w-3xl">
            Guaranteed resources, enhanced security and full control to
            personalize your server and accommodate your own project
            requirements.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DedicatedServersHero;
