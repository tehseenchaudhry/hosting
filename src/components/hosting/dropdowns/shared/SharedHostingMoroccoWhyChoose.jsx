import whyImage from "../../../../assets/why-morocco.webp";

const SharedHostingMoroccoWhyChoose = () => {
  return (
    <section className="w-full bg-[#020c2b]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Why Choose Morocco <br /> for Hosting?
            </h2>

            <p className="text-gray-300 text-lg leading-7 mb-8 max-w-xl">
              Linux Shared Hosting in Morocco is designed for individuals and
              businesses who want to host their website locally and benefit
              from fast access, legal compliance, and reliable infrastructure.
            </p>

            <p className="text-gray-400 text-sm leading-6 max-w-xl">
              This solution is ideal if you want to improve your website’s
              response time for Moroccan users or if your data must be hosted
              within Moroccan territory for regulatory reasons.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:scale-[1.02]">
              <img
                src={whyImage}
                alt="Why choose Morocco hosting"
                className="w-full object-cover"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020c2b]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            {/* DECORATIVE DOTS */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0b4dff]/10 rounded-full blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SharedHostingMoroccoWhyChoose;
