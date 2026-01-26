import {
  Zap,
  Lock,
  Database,
  LifeBuoy,
  Gauge,
  Shield,
  HardDrive,
  Wifi,
} from "lucide-react";
import featuresImg from "../../../../assets/why-wordpress.webp";

const FEATURES = [
  {
    icon: <Zap />,
    title: "LiteSpeed LSAPI",
    text: "Unsurpassed PHP performance with LiteSpeed LSAPI, ensuring blazing fast loading speed.",
  },
  {
    icon: <Lock />,
    title: "SSH",
    text: "Enable SSH access to manage your account from a command-line interface.",
  },
  {
    icon: <Database />,
    title: "Memcache Instance",
    text: "Deploy a Memcache instance in a few clicks to speed up your applications.",
  },
  {
    icon: <HardDrive />,
    title: "Backup",
    text: "All your data is backed up daily with our R1Soft backup tool.",
  },
  {
    icon: <LifeBuoy />,
    title: "Technical Support",
    text: "Our team is available 24/7 to answer your questions and assist you.",
  },
  {
    icon: <Gauge />,
    title: "Fast cache",
    text: "Thanks to embedded cache modules, your websites load faster than ever.",
  },
  {
    icon: <Wifi />,
    title: "Dedicated IP",
    text: "Each website is hosted on a dedicated IP address for better reliability.",
  },
  {
    icon: <Shield />,
    title: "WAF",
    text: "Web Application Firewall protects your website from malicious attacks.",
  },
];

const WordpressHostingFeatures = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-16">
              Strong added value functionalities adapted to fit your website
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-14 gap-y-12">
              {FEATURES.map((item, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 60}
                  className="group flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#f6f9ff] text-[#0b4dff] group-hover:bg-[#0b4dff] group-hover:text-white transition duration-300">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-[#020c2b] mb-1 group-hover:text-[#0b4dff] transition">
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

          {/* RIGHT IMAGE */}
          <div
            data-aos="fade-left"
            className="relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={featuresImg}
                alt="WordPress Hosting Features"
                className="w-full max-w-md object-cover transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b4dff]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WordpressHostingFeatures;
