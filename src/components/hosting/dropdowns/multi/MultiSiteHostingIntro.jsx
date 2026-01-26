import previewImage from "../../../../assets/slider-shared-windows.webp";

const MultiSiteHostingIntro = () => {
  return (
    <section className="w-full bg-[#020c2b] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              A singular web hosting offer for you to host all your websites and
              run them with zero effort.
            </h2>

            <p className="text-white/80 text-lg leading-7 mb-8 max-w-xl">
              Multi-site hosting is the perfect option for web and communication
              agencies who want to host their customers with no intervention from
              our teams.
            </p>

            <p className="text-white/70 text-sm leading-6 max-w-xl">
              This solution is dedicated to individuals who host more than one
              website on the same account. All our offers apart from the “Bronze”
              offer include a dedicated IP address as well as customized
              nameservers.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <img
                src={previewImage}
                alt="Multi-site hosting preview"
                className="w-full max-w-[520px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MultiSiteHostingIntro;
