import { ArrowRight } from "lucide-react";

const CloudHostingHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* BACKGROUND DECOR */}
      <div className="absolute -top-48 -right-48 w-[520px] h-[520px] bg-[#0b4dff]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-[520px] h-[520px] bg-[#020c2b]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 py-28 lg:py-36">

        {/* HERO CONTENT */}
        <div className="max-w-[820px] mx-auto text-center">

          <h1
            className="text-[34px] md:text-[44px] lg:text-[52px] font-extrabold text-[#020c2b] leading-tight mb-6"
            data-aos="fade-up"
          >
            Cloud Hosting
          </h1>

          <p
            className="text-gray-600 text-base md:text-lg lg:text-xl leading-8 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Tailored and scalable cloud hosting solution designed to give you
            full flexibility, high availability and complete control over your
            infrastructure.
          </p>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0b4dff] text-white font-semibold text-sm md:text-base shadow-lg hover:bg-[#093adf] transition-all duration-300"
            >
              View cloud plans
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="text-sm md:text-base font-semibold text-[#020c2b] hover:text-[#0b4dff] transition"
            >
              Talk to an expert →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CloudHostingHero;
