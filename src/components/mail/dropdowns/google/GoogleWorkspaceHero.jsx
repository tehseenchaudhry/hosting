import { ArrowRight } from "lucide-react";
import bgVideo from "../../../../assets/homepage.mp4";

const GoogleWorkspaceHero = () => {
  return (
    <section className="relative w-full h-[620px] lg:h-[720px] overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY (IMPORTANT FOR READABILITY) */}
      <div className="absolute inset-0 bg-[#020c2b]/80" />

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="max-w-2xl text-white"
        >
          <span className="inline-block mb-4 text-sm font-semibold text-[#0b4dff]">
            Google Workspace
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
            Gmail, Drive, Docs, Meet <br />
            <span className="text-[#0b4dff]">and more</span>
          </h1>

          <p className="text-white/85 text-lg leading-7 mb-10">
            Everything you need to collaborate securely and efficiently —
            professional email, cloud storage, real-time collaboration and
            business communication tools.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="group bg-[#0b4dff] hover:bg-[#0836cc] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Discover offers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>

            <button className="border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#020c2b] transition">
              Learn more
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default GoogleWorkspaceHero;
