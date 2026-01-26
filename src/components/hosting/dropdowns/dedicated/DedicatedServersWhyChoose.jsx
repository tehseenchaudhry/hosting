import whyImage from "../../../../assets/why-dedicat.webp";
import {
  ShieldCheck,
  Cloud,
  RefreshCcw,
  Database,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Cloud />,
    title: "Migration",
    text: "Migrate your data from your previous hosting provider to our platform in full transparency.",
  },
  {
    icon: <ShieldCheck />,
    title: "Managed hosting",
    text: "Entrust the management of your server to our experts for optimal performance and security.",
  },
  {
    icon: <RefreshCcw />,
    title: "Anti-DDoS",
    text: "Protect your servers against massive attacks and ensure maximum security for your services.",
  },
  {
    icon: <Database />,
    title: "Backup",
    text: "Back up all your data on our Cloud infrastructure with high reliability.",
  },
];

const DedicatedServersWhyChoose = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT IMAGE */}
          <div data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={whyImage}
                alt="Why choose dedicated hosting"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020c2b]/20 to-transparent"></div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-6 leading-tight">
              Why choose <br /> dedicated hosting?
            </h2>

            <p className="text-gray-700 text-lg leading-7 mb-14 max-w-xl">
              You are running high traffic platforms requiring large amounts of
              resources beyond the capacity of shared hosting?
              <br /><br />
              A dedicated server is the optimal solution to guarantee
              performance, security and full control over your infrastructure.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">

              {FEATURES.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 120}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center
                      bg-[#f6f9ff] text-[#0b4dff]
                      group-hover:bg-[#0b4dff] group-hover:text-white
                      transition-all duration-300"
                    >
                      {item.icon}
                    </div>

                    <h4 className="font-bold text-[#020c2b] group-hover:text-[#0b4dff] transition">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-gray-600 text-sm leading-6">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedServersWhyChoose;
