import {
  Zap,
  Settings,
  Server,
  Monitor,
  Clock,
  Headphones,
} from "lucide-react";

import featureImage from "../../../../assets/why-linux-3.webp"; // update path if needed

const FEATURES = [
  {
    icon: <Zap />,
    title: "Fast hardware",
    text: "We rely on high-availability infrastructure with NVMe storage and optimized performance for demanding workloads.",
  },
  {
    icon: <Settings />,
    title: "Full automation",
    text: "Reinstallation, reboot and resource management can be handled directly from your customer interface.",
  },
  {
    icon: <Server />,
    title: "Full access to your servers",
    text: "Root access allows you to fully customize your environment according to your technical needs.",
  },
  {
    icon: <Monitor />,
    title: "Console access",
    text: "Access your cloud server remotely using a secure Java-based console at any time.",
  },
  {
    icon: <Clock />,
    title: "Time is valuable",
    text: "Your cloud servers are ready in minutes after validation so you can start working immediately.",
  },
  {
    icon: <Headphones />,
    title: "24/7 support",
    text: "Our technical experts are available around the clock to assist you with your Cloud Hosting services.",
  },
];

const CloudHostingValuableFeatures = () => {
  return (
    <section className="bg-[#f6f9ff] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT IMAGE */}
          <div data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={featureImage}
                alt="Cloud hosting features"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-16"
              data-aos="fade-up"
            >
              Valuable features!
            </h2>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">
              {FEATURES.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="group flex gap-5"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-[#0b4dff] shadow-md group-hover:bg-[#0b4dff] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-bold text-[#020c2b] mb-2 group-hover:text-[#0b4dff] transition">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-6">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CloudHostingValuableFeatures;
