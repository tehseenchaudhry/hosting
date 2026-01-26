import hostingOffersImage from "../../assets/twice-slider.webp";

const HostingOffers = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-end">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#020c2b]">
            Our web hosting offers
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-7 max-w-xl">
            Genious Communications offers a wide range of hosting solutions to
            meet all your needs: shared, cloud, dedicated and optimized hosting
            environments for professional websites.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative mb-24">
          <div className="absolute -top-12 left-10 w-[85%] h-[85%] bg-[#020c2b]/5 rounded-[40px] -z-10"></div>

          <div className="relative overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(2,12,43,0.25)]">
            <img
              src={hostingOffersImage}
              alt="Web hosting offers"
              className="w-full h-[260px] md:h-[380px] lg:h-[460px] object-cover scale-105 hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020c2b]/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-3 gap-14">

          {/* LEFT INFO CARD (UPGRADED) */}
          <div className="bg-[#f5f7fb] rounded-3xl p-8 lg:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-semibold text-[#020c2b]/70 uppercase tracking-wider">
                Hosting guide
              </span>

              <h3 className="text-2xl font-bold text-[#020c2b] mt-3 mb-4 leading-snug">
                Which web hosting should I use for my website?
              </h3>

              <p className="text-gray-600 text-sm leading-6 mb-6">
                Choosing the right hosting solution is essential to guarantee
                performance, security and scalability. Each project has unique
                requirements depending on traffic, technology and objectives.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#020c2b]"></span>
                  <p className="text-sm text-gray-700">
                    <strong>Shared hosting</strong> – Ideal for small websites and blogs
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#020c2b]"></span>
                  <p className="text-sm text-gray-700">
                    <strong>Cloud hosting</strong> – Scalable solution for growing businesses
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#020c2b]"></span>
                  <p className="text-sm text-gray-700">
                    <strong>Dedicated servers</strong> – Full control and maximum performance
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#020c2b] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#020c2b]/90 transition"
              >
                Hosting comparison →
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-[#020c2b] text-[#020c2b] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#020c2b] hover:text-white transition"
              >
                Contact an expert
              </a>
            </div>
          </div>

          {/* HOSTING CARDS */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-10">
            {[
              {
                title: "Windows Shared Hosting",
                desc: "Windows development environment for your websites and applications.",
              },
              {
                title: "Linux shared hosting",
                desc: "Affordable solution providing simplicity and efficiency.",
              },
              {
                title: "Shared hosting in Morocco",
                desc: "Host all your information locally in Morocco.",
              },
              {
                title: "Dedicated Hosting",
                desc: "Configurable dedicated servers to meet your requirements.",
              },
              {
                title: "Multi-site hosting",
                desc: "Host several websites within a single hosting platform.",
              },
              {
                title: "Cloud VPS hosting",
                desc: "Flexible and scalable VPS hosting with high availability.",
              },
              {
                title: "E-Commerce hosting",
                desc: "Premium hosting intended for E-Commerce websites.",
              },
              {
                title: "WordPress hosting",
                desc: "Optimized WordPress hosting for high traffic websites.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-xl transition"
              >
                <h4 className="text-lg font-semibold text-[#020c2b] mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-6 mb-4">
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[#020c2b] font-semibold text-sm hover:underline"
                >
                  Discover the pack →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingOffers;
