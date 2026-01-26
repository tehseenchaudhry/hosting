import { ArrowRight } from "lucide-react";
import ctaImage from "../../../../assets/slider-infogerance-main.webp";

const WindowsSharedHostingCTA = () => {
  return (
    <section className="w-full bg-[#020c2b] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to host your <br /> Windows applications?
            </h2>

            <p className="text-gray-300 text-lg leading-7 mb-10 max-w-xl">
              Launch your websites and applications with reliable Windows shared
              hosting. Enjoy high performance, advanced security, and 24/7
              expert support from Genious.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="/hosting/windows"
                className="inline-flex items-center gap-3 bg-white text-[#020c2b] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Discover our offers
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact our experts
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative"
            data-aos="fade-left"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ctaImage}
                alt="Windows hosting CTA"
                className="w-full h-[420px] object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020c2b]/70 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WindowsSharedHostingCTA;
