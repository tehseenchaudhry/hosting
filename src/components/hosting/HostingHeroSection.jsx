import heroImage from "../../assets/slider-infogerance-main.webp";

const HostingHero = () => {
  return (
    <section className="relative w-full bg-[#020c2b] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hosting"
          className="w-full h-full object-cover"
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c2b] via-[#020c2b]/20 to-[#020c2b]/20"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <div className="max-w-2xl">

          {/* TITLE */}
          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
            Hosting
          </h1>

          {/* TEXT BOX */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg mb-8">
            <p className="text-gray-200 text-base md:text-lg leading-7">
              Web hosting consists in putting a website online by using a server
              linked to the Internet. There are many types of web hosting:
              shared hosting, cloud hosting and dedicated server hosting.
            </p>
          </div>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#020c2b] transition">
            Discover our offers →
          </button>

        </div>
      </div>
    </section>
  );
};

export default HostingHero;
