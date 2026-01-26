import optimizeImg from "../../../../assets/slider-wordpress (1).png";

const WordpressHostingOptimize = () => {
  return (
    <section className="w-full bg-[#050b2e] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Optimize Your <br />
              WordPress Site: Speed, <br />
              Performance and <br />
              Security Guaranteed!
            </h2>

            <p className="text-gray-300 text-lg leading-7 mb-8 max-w-xl">
              A fully optimized solution for WordPress websites. This hosting
              plan is designed to guarantee maximum speed, performance and
              security. WordPress hosting supports high traffic using embedded
              cache modules.
            </p>

            <p className="text-gray-400 text-sm leading-6 mb-12 max-w-xl">
              This module caches all static content, which helps reduce server
              workload significantly. Our technical team provides data backup
              and integrity, along with hosting space security.
            </p>

            {/* COMPATIBILITY */}
            <div className="flex flex-wrap items-center gap-6 opacity-90">
              {[
                "Drupal",
                "WordPress",
                "Joomla!",
                "PHP",
                "MySQL",
                "Magento",
                "PrestaShop",
                "Python",
                "Perl",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="text-gray-300 text-sm hover:text-white transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={optimizeImg}
                alt="Optimized WordPress Hosting"
                className="w-full max-w-md transform transition duration-500 group-hover:scale-105"
              />

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b4dff]/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WordpressHostingOptimize;
