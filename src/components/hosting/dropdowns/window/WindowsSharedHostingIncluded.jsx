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

const FEATURES = [
  { icon: Globe, label: "FTP access" },
  { icon: Mail, label: "Mail support" },
  { icon: ShieldCheck, label: "Anti-spam protection" },
  { icon: Repeat, label: "Fast data transfer" },
  { icon: Send, label: "Auto-responder" },
  { icon: Lock, label: "SSL certificate" },
  { icon: Folder, label: "File manager" },
  { icon: Server, label: "Windows servers" },
];

const WindowsSharedHostingIncluded = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-20"
          data-aos="fade-up"
        >
          Included in the packs
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-20">

          {FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="group flex flex-col items-start"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#f5f7fb] text-[#0b4dff] group-hover:bg-[#0b4dff] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>

                {/* TEXT */}
                <p className="mt-5 text-[15px] font-semibold text-[#020c2b] group-hover:text-[#0b4dff] transition">
                  {item.label}
                </p>

                {/* UNDERLINE (SUBTLE, PRO LOOK) */}
                <span className="mt-2 h-[2px] w-6 bg-[#0b4dff]/30 group-hover:w-10 transition-all duration-300"></span>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WindowsSharedHostingIncluded;
