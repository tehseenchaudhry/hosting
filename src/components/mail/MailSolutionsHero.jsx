import { ArrowRight } from "lucide-react";
import mailHero from "../../assets/slider-main-mail.webp";

const MailSolutionsHero = () => {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">

      <img
        src={mailHero}
        alt="Mail solutions"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#020c2b]/80" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 h-full flex items-center">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-10 max-w-xl shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Mail <br /> Solutions
          </h1>

          <p className="text-white/90 text-lg mb-6">
            Why is it important to have a messaging solution?
          </p>

          <p className="text-white/70 text-sm mb-8">
            It enhances the credibility, the professionalism and the brand’s reputation.
          </p>

          <button className="group flex items-center gap-2 text-white font-semibold hover:text-[#0b4dff]">
            Discover our offers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MailSolutionsHero;
