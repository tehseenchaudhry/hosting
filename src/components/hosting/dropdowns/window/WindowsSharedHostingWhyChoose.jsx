import {
  Mail,
  ShieldCheck,
  Repeat,
  Send,
  Globe,
  Folder,
  Lock,
  Server,
} from "lucide-react";
import whyImage from "../../../../assets/03.webp";

const INCLUDED_FEATURES = [
  { icon: Globe, label: "FTP access" },
  { icon: Mail, label: "Mail support" },
  { icon: ShieldCheck, label: "Anti-spam protection" },
  { icon: Repeat, label: "Fast data transfer" },
  { icon: Send, label: "Auto-responder" },
  { icon: Lock, label: "SSL certificate" },
  { icon: Folder, label: "File manager" },
  { icon: Server, label: "Windows servers" },
];

const WHY_FEATURES = [
  {
    title: "Pleasure",
    text: "Install, deploy and manage your website easily with hosting services based on the Windows operating system.",
  },
  {
    title: "Technical support",
    text: "24/7 support by experienced professionals to keep your platform running smoothly.",
  },
  {
    title: "Speed and reliability",
    text: "Optimized Windows servers ensure fast loading speed and high performance.",
  },
  {
    title: "Upgrade",
    text: "Upgrade your hosting plan at any time to support your growing business.",
  },
];

const WindowsSharedHostingWhyChoose = () => {
  return (
    <section className="w-full bg-[#ffe3e3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-28">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-28">

          {/* IMAGE */}
          <div data-aos="fade-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={whyImage}
                alt="Why choose Windows shared hosting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-6 leading-tight">
              Why choose Genious’ <br /> Windows shared hosting?
            </h2>

            <p className="text-gray-700 text-lg leading-7 mb-12 max-w-xl">
              Host your ASP.NET websites and SQL Server applications in a
              reliable Windows environment with high performance and security.
            </p>

            {/* WHY GRID */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {WHY_FEATURES.map((item, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  className="group"
                >
                  <h4 className="font-bold text-[#020c2b] mb-2 group-hover:text-[#0b4dff] transition">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-6">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INCLUDED IN PACKS */}
        <div>
          <h3
            className="text-2xl md:text-3xl font-extrabold text-[#020c2b] mb-16"
            data-aos="fade-up"
          >
            Included in the packs
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-20">
            {INCLUDED_FEATURES.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                  className="group flex flex-col items-start"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white text-[#0b4dff] shadow-sm group-hover:bg-[#0b4dff] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <p className="mt-5 text-[15px] font-semibold text-[#020c2b] group-hover:text-[#0b4dff] transition">
                    {item.label}
                  </p>

                  <span className="mt-2 h-[2px] w-6 bg-[#0b4dff]/30 group-hover:w-10 transition-all duration-300"></span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WindowsSharedHostingWhyChoose;
