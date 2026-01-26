import {
  ShieldCheck,
  Server,
  Lock,
  RefreshCcw,
  Activity,
  Cloud,
  Database,
  LifeBuoy,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Server />,
    title: "Dedicated resources",
    desc: "100% of the server resources are exclusively reserved for your projects.",
  },
  {
    icon: <ShieldCheck />,
    title: "Advanced security",
    desc: "Enterprise-grade security with firewall and continuous monitoring.",
  },
  {
    icon: <Lock />,
    title: "Anti-DDoS protection",
    desc: "Protect your infrastructure from volumetric and application attacks.",
  },
  {
    icon: <RefreshCcw />,
    title: "Automated backups",
    desc: "Daily and weekly backups to ensure data integrity and recovery.",
  },
  {
    icon: <Activity />,
    title: "High availability",
    desc: "Optimized infrastructure ensuring uptime and stability.",
  },
  {
    icon: <Cloud />,
    title: "Cloud scalability",
    desc: "Scale your resources easily according to your business growth.",
  },
  {
    icon: <Database />,
    title: "RAID storage",
    desc: "High-performance SSD/NVMe storage with RAID protection.",
  },
  {
    icon: <LifeBuoy />,
    title: "24/7 support",
    desc: "Dedicated technical support available anytime you need.",
  },
];

const DedicatedServersIncluded = () => {
  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <div className="max-w-2xl mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-4">
            Included with your dedicated server
          </h2>
          <p className="text-gray-600 text-lg leading-7">
            All our dedicated servers include essential services to guarantee
            performance, security and peace of mind.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">

          {FEATURES.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 90}
              className="group bg-white rounded-2xl p-8 shadow-sm
              hover:shadow-xl transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6
                bg-[#f0f3ff] text-[#0b4dff]
                group-hover:bg-[#0b4dff] group-hover:text-white
                transition-all duration-300"
              >
                {item.icon}
              </div>

              <h4 className="font-bold text-[#020c2b] mb-3 group-hover:text-[#0b4dff] transition">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm leading-6">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default DedicatedServersIncluded;
