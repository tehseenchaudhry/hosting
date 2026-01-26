import promoImage from "../../../../assets/slider-multisite.png";

const MultiSiteHostingPromo = () => {
  return (
    <section className="w-full bg-[#020c2b]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            className="text-white max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight mb-8">
              A singular web hosting offer for you to host all your websites
              and run them with zero effort.
            </h2>

            <p className="text-white/80 text-lg leading-7 mb-6">
              Multi-site hosting is the perfect option for web and communication
              agencies wanting to host their customers with no intervention from
              our team.
            </p>

            <p className="text-white/70 text-sm leading-6">
              This solution is dedicated for individuals who host more than one
              website on the same account. All our offers, apart from the “Bronze”
              offer, include a dedicated IP address as well as customized
              nameservers.
            </p>
          </div>

          {/* RIGHT VISUAL */}
          <div
            data-aos="fade-left"
            className="relative flex justify-center"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={promoImage}
                alt="Multi-site hosting preview"
                className="w-full max-w-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020c2b]/40 to-transparent opacity-60"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MultiSiteHostingPromo;
