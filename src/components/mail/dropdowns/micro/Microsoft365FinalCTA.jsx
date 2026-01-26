import { ArrowRight } from "lucide-react";

const Microsoft365FinalCTA = () => {
  return (
    <section className="w-full bg-[#f8f9fc] py-28">
      <div className="max-w-[900px] mx-auto px-6 text-center">

        {/* TITLE */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-6"
        >
          Do you have more questions about this product?
        </h2>

        {/* DESCRIPTION */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 text-lg leading-7 mb-12"
        >
          Our experts are available to help you choose and configure the best
          Microsoft 365 solution for your business.
        </p>

        {/* CTA BUTTON */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <button className="group inline-flex items-center gap-3 bg-[#0b4dff] hover:bg-[#0836cc] text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Contact our experts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Microsoft365FinalCTA;
