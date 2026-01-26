import { ArrowRight } from "lucide-react";
import antiSpamHero from "../../../../assets/slider-anti-spam.webp";

const AntiSpamHero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={antiSpamHero}
              alt="SpamExperts Anti-Spam"
              className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" data-aos-duration="900">

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#020c2b] mb-6 leading-tight">
              SpamExperts <br /> Professional anti-spam solution
            </h1>

            <p className="text-gray-600 text-lg leading-7 mb-8 max-w-xl">
              The best solution for blocking unwanted emails before they reach
              your inbox.
            </p>

            <p className="text-gray-500 text-sm leading-6 max-w-xl mb-10">
              SpamExperts is an email filtering system designed to scan inbound
              email for spam before it ever gets to your server.
            </p>

            {/* PRICING OPTIONS */}
            <div className="space-y-4 max-w-sm">

              <div className="flex items-center justify-between border rounded-lg px-5 py-4">
                <span className="font-medium text-[#020c2b]">$30.00</span>
                <span className="text-sm text-gray-500">per month</span>
              </div>

              <div className="flex items-center justify-between border rounded-lg px-5 py-4">
                <span className="font-medium text-[#020c2b]">$53.50</span>
                <span className="text-sm text-gray-500">per quarter</span>
              </div>

              <div className="flex items-center justify-between border-2 border-[#0b4dff] rounded-lg px-5 py-4">
                <span className="font-semibold text-[#020c2b]">$77.50</span>
                <span className="text-sm text-gray-500">per year</span>
              </div>

            </div>

            {/* CTA */}
            <button className="mt-10 group inline-flex items-center gap-3 bg-[#0b4dff] hover:bg-[#0836cc] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Order
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AntiSpamHero;
