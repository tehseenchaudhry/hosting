import featureImage from "../../../../assets/value-shared.webp";
import {
  Server,
  Settings,
  RefreshCcw,
  Box,
} from "lucide-react";

const FEATURES = [
  {
    icon: Server,
    title: "Web server",
    desc: "LiteSpeed is a high-performance Apache compatible web server capable of handling a very high number of concurrent requests.",
  },
  {
    icon: Settings,
    title: "Operating system",
    desc: "CloudLinux is an operating system designed specifically for shared hosting environments to maximize security, stability and performance.",
  },
  {
    icon: RefreshCcw,
    title: "Daily backup",
    desc: "Get the most out of R1Soft backup solution: automatic smart backups allowing you to restore data from the last 30 days.",
  },
  {
    icon: Box,
    title: "Génie",
    desc: "Genie is an App Store designed to help you manage applications, updates, backups and installations with just a few clicks.",
  },
];

const LinuxSharedHostingHighValue = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#020c2b] mb-20 leading-[1.05]">
              High added <br /> value features!
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-20">
              {FEATURES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="
                      group
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                    "
                  >
                    <Icon
                      className="
                        w-7 h-7 mb-5
                        text-[#1f5eff]
                        transition-transform duration-300 ease-out
                        group-hover:scale-110
                        group-hover:-rotate-3
                      "
                    />

                    <h3 className="text-lg font-bold text-[#020c2b] mb-3 transition-colors duration-300 group-hover:text-[#1f5eff]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-6 max-w-[320px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <div
              className="
                group
                relative
                rounded-2xl
                overflow-hidden
                shadow-xl
                transition-all
                duration-500
                ease-out
                hover:shadow-2xl
              "
            >
              <img
                src={featureImage}
                alt="Linux shared hosting features"
                className="
                  w-[520px]
                  h-[560px]
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.04]
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LinuxSharedHostingHighValue;
