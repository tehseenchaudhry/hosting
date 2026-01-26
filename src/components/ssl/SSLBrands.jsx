import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";

// LOCAL LOGOS
import sectigo from "../../assets/sectigo-logo-3EF2BDCC26-seeklogo.com.png";
import digicert from "../../assets/images.png";
import geotrust from "../../assets/geotrustbanner-logo.png";
import thawte from "../../assets/thawte.png";

export default function OtherSSLCertificates() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const certificates = [
    {
      name: "Sectigo",
      logo: sectigo,
      text:
        "Sectigo is an American company that became the world’s largest certification authority after its acquisition of Comodo, with over 12 million active certificates.",
    },
    {
      name: "DigiCert",
      logo: digicert,
      text:
        "DigiCert is the largest provider of SSL business certificates, founded in 2003. This US company is known for having one of the industry’s best validation procedures.",
    },
    {
      name: "GeoTrust",
      logo: geotrust,
      text:
        "GeoTrust is the 2nd largest certification authority in the world with a wide range of SSL certificates adapted to all types of needs. GeoTrust is part of the DigiCert group.",
    },
    {
      name: "Thawte",
      logo: thawte,
      text:
        "Founded in 1995, this South African company is known to be the leading international certification authority. Thawte is part of the DigiCert Group.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#020d2a] to-[#04153d] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-14 mb-20">
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-tight"
            data-aos="fade-right"
          >
            Other SSL Certificate <br /> Labels
          </h2>

          <p
            className="text-lg text-blue-100 leading-relaxed"
            data-aos="fade-left"
          >
            Genious Communications can also offer you SSL certificates issued by
            leading international certification authorities.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* INNER CARD (HOVER HERE) */}
              <div
                className="
                  relative rounded-2xl p-7
                  border border-white/20
                  bg-white/5 backdrop-blur-sm
                  transform translate-y-0
                  transition-transform transition-colors duration-300 ease-out
                  hover:-translate-y-2 hover:border-white/40 hover:bg-white/10
                "
              >
                {/* External Icon */}
                <span className="absolute top-5 right-5 text-white/70">
                  <ArrowUpRight size={18} />
                </span>

                {/* Logo */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-8 mb-6 object-contain"
                  loading="lazy"
                />

                {/* Description */}
                <p className="text-sm text-blue-100 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
