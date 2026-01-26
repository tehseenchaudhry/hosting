import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const MonEntrepriseHero = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="w-full bg-[#020c2b] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <span className="text-sm font-semibold text-[#0b4dff] mb-4 block tracking-wide">
              MonEntreprise Plan
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              Your website <br /> made easy
            </h1>

            <p className="text-white/80 text-lg leading-7 max-w-xl mb-10">
              An all-in-one solution for businesses to build a professional
              online presence with hosting, domains, email and website tools.
            </p>

            <div className="flex gap-5 flex-wrap">
              <button className="group bg-[#0b4dff] hover:bg-[#0836cc] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Get started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button className="border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#020c2b] transition-all duration-300">
                Discover the pack
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div data-aos="fade-left" data-aos-delay="150">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">

              {/* THUMBNAIL + PLAY BUTTON */}
              {!play && (
                <div
                  onClick={() => setPlay(true)}
                  className="relative cursor-pointer group"
                >
                  {/* Thumbnail */}
                  <img
                    src="https://img.youtube.com/vi/z6ebMlfXJa8/maxresdefault.jpg"
                    alt="MonEntreprise video"
                    className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Play className="w-8 h-8 text-[#020c2b] ml-1" />
                    </div>
                  </div>
                </div>
              )}

              {/* VIDEO IFRAME */}
              {play && (
                <iframe
                  className="w-full h-[260px] sm:h-[320px] lg:h-[360px]"
                  src="https://www.youtube.com/embed/z6ebMlfXJa8?autoplay=1&mute=0&controls=1&rel=0"
                  title="MonEntreprise Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MonEntrepriseHero;
