import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import sslHero from "../../assets/slider-ssl.webp";

export default function SSLCertHero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#061a3a] overflow-hidden">

      {/* TOP TEXT CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-14">
        <div data-aos="fade-up">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Certificats <br />
            <span className="block mt-2">SSL</span>
          </h1>

          <p className="mt-6 text-gray-300 text-base max-w-2xl">
            SSL certificates encrypt the exchange of information between the
            visitor’s browser and your website, protecting sensitive data and
            ensuring a secure connection.
          </p>

          {/* INPUT BAR */}
          <div
            className="mt-8 bg-white rounded-full flex items-center px-4 py-2 max-w-md shadow-md"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <span className="text-gray-400 text-sm mr-2">https://</span>
            <input
              type="text"
              placeholder="yourdomain.com"
              className="flex-1 outline-none text-sm text-gray-700"
            />
            <button className="ml-3 bg-[#0b5ed7] hover:bg-[#084298] text-white text-sm font-medium px-5 py-2 rounded-full transition">
              Secure
            </button>
          </div>
        </div>
      </div>

      {/* FULL WIDTH IMAGE */}
      <div
        className="w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img
          src={sslHero}
          alt="SSL Certificates"
          className="w-full h-[260px] md:h-[360px] lg:h-[420px] object-cover"
        />
      </div>

    </section>
  );
}
