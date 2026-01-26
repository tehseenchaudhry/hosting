import {
  FiShield,
  FiHeadphones,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";

const WhyChooseHosting = () => {
  return (
    <section className="bg-[#020c2b] w-full">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28 grid lg:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Why choose <br /> Genious to host your websites?
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-7 max-w-xl">
            Your satisfaction being our motivation, we provide high quality web
            hosting solutions. Use the best hosting plans to fulfill all of your
            needs!
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid sm:grid-cols-2 gap-10">

          {/* ITEM */}
          <div className="flex items-start gap-4">
            <FiShield className="text-blue-400 text-3xl mt-1" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">
                Reliability and data security
              </h4>
              <p className="text-gray-400 text-sm leading-6">
                Secure infrastructure ensuring maximum uptime and protection.
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-4">
            <FiTrendingUp className="text-blue-400 text-3xl mt-1" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">
                High-performance web hosting
              </h4>
              <p className="text-gray-400 text-sm leading-6">
                Optimized servers delivering fast and stable performance.
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-4">
            <FiHeadphones className="text-blue-400 text-3xl mt-1" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">
                24/7 skilled customer support
              </h4>
              <p className="text-gray-400 text-sm leading-6">
                Our experts are available anytime to assist you.
              </p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-start gap-4">
            <FiSettings className="text-blue-400 text-3xl mt-1" />
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">
                Simplified account management
              </h4>
              <p className="text-gray-400 text-sm leading-6">
                Manage your services easily through an intuitive interface.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseHosting;
