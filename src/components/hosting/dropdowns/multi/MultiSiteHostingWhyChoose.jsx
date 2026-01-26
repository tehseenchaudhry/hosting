import whyImage from "../../../../assets/why-multisite.webp";

const FEATURES = [
  {
    title: "Centralized management",
    text: "Manage all your websites from a single interface and simplify your daily operations.",
  },
  {
    title: "Dedicated resources",
    text: "Benefit from guaranteed resources for stable performance across all hosted websites.",
  },
  {
    title: "Custom nameservers",
    text: "Reinforce your brand image with personalized nameservers included in the package.",
  },
  {
    title: "Scalable solution",
    text: "Easily upgrade your hosting plan as your number of websites and traffic grows.",
  },
];

const MultiSiteHostingWhyChoose = () => {
  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT IMAGE */}
          <div data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={whyImage}
                alt="Why choose multi-site hosting"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020c2b]/10 to-transparent" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-8 leading-tight">
              Why choose Genious’ <br /> multi-site hosting package?
            </h2>

            <p className="text-gray-600 text-lg leading-7 mb-14 max-w-xl">
              Our multi-site hosting solution is designed for agencies,
              developers and professionals who manage multiple websites and
              need a reliable, scalable and centralized hosting environment.
            </p>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">
              {FEATURES.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group"
                >
                  <h4 className="font-bold text-[#020c2b] mb-2 group-hover:text-[#0b4dff] transition">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiSiteHostingWhyChoose;
