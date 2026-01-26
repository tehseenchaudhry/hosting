import {
  Server,
  Settings,
  RefreshCw,
  Sliders,
} from "lucide-react";

const BENEFITS = [
  {
    icon: <Server />,
    title: "Web server",
    text: "LiteSpeed is a secure, fast, high-performance web server that is interoperable with Apache. It is able to handle a large number of simultaneous requests.",
  },
  {
    icon: <Settings />,
    title: "Operating system",
    text: "CloudLinux provides greater stability, more security and higher performance for your hosting environment.",
  },
  {
    icon: <RefreshCw />,
    title: "Daily backup",
    text: "R1Soft is the backup solution ensuring daily backup and protection of your data. You can restore your backup made within the last 30 days.",
  },
  {
    icon: <Sliders />,
    title: "Control panel",
    text: "cPanel is a control panel allowing you to manage your hosting space. Several tools are available to handle emails, databases and files easily.",
  },
];

const SharedHostingMoroccoBenefits = () => {
  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-20"
          data-aos="fade-up"
        >
          Benefits of Linux hosting
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-16">

          {BENEFITS.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group flex gap-6 p-8 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#eaf0ff] text-[#0b4dff] group-hover:bg-[#0b4dff] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div>
                <h4 className="font-bold text-lg text-[#020c2b] mb-2 group-hover:text-[#0b4dff] transition">
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
    </section>
  );
};

export default SharedHostingMoroccoBenefits;
