import mailImage from "../../../../assets/slider-solution-mail.webp";

const GeniousMailSolutionHero = () => {
  return (
    <section className="w-full bg-[#020c2b]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" data-aos-duration="900">

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              Improve your credibility <br />
              with a professional <br />
              email address
            </h1>

            <p className="text-white/80 text-lg leading-7 max-w-xl mb-10">
              Genious Mail Solution is the perfect tool for managing your
              business emails.
            </p>

            <div className="space-y-4 text-white/70 text-sm leading-6 max-w-xl">
              <p>
                Genious Mail Solution is for companies looking for stable
                and qualified professional emails.
              </p>

              <p>
                Our offer comes with a dedicated IP address for each
                customer, without any routing issues encountered in
                traditional solutions.
              </p>

              <p>
                The service also includes synchronization of all your
                contacts and calendars from Genious Webmail to all devices
                (PC/Mac and iOS/Android mobiles).
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md w-full">
              <img
                src={mailImage}
                alt="Genious mail solution"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GeniousMailSolutionHero;
