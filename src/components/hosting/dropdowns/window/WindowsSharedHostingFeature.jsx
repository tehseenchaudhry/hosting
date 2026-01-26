import featureImage from "../../../../assets/slider-shared-windows.webp";

const WindowsSharedHostingFeature = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#020c2b] to-[#06194f] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              A cost-effective solution <br />
              for all your websites <br />
              designed in ASP, SQL Server
            </h2>

            <p className="text-gray-300 text-lg leading-7 max-w-xl">
              Windows shared hosting is ideal for blogs, showcase websites and
              all other websites with low levels of traffic. It supports
              Windows programming languages and technologies: ASP, SQL Server,
              .NET and more.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative flex justify-center"
            data-aos="fade-left"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

              <img
                src={featureImage}
                alt="Windows shared hosting"
                className="w-full max-w-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* GLOW OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b4dff]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WindowsSharedHostingFeature;
