import {
  Layout,
  Wand2,
  Smartphone,
  Globe,
  Settings,
  ShieldCheck,
} from "lucide-react";

const TOOLS = [
  {
    icon: <Layout />,
    title: "Ready-to-use templates",
    desc: "Choose from professionally designed templates adapted to all business sectors.",
  },
  {
    icon: <Wand2 />,
    title: "Easy customization",
    desc: "Customize colors, fonts and content easily with an intuitive drag & drop editor.",
  },
  {
    icon: <Smartphone />,
    title: "Mobile responsive",
    desc: "Your website automatically adapts to all devices: desktop, tablet and mobile.",
  },
  {
    icon: <Globe />,
    title: "Custom domain name",
    desc: "Connect your own domain name to strengthen your brand identity online.",
  },
  {
    icon: <Settings />,
    title: "SEO & performance",
    desc: "Built-in SEO tools to improve visibility and performance on search engines.",
  },
  {
    icon: <ShieldCheck />,
    title: "Security & hosting",
    desc: "Secure hosting, SSL certificate and automatic updates included.",
  },
];

const WebsiteCreationTools = () => {
  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* HEADER */}
        <div
          className="max-w-3xl mb-24"
          data-aos="fade-up"
        >
          <span className="text-sm font-semibold text-[#0b4dff] uppercase tracking-wide">
            Website creation tools
          </span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#020c2b] mt-4 mb-6 leading-tight">
            Create your website <br /> easily and professionally
          </h2>

          <p className="text-gray-600 text-lg leading-7">
            With MonEntreprise, benefit from powerful website creation tools
            designed to help you launch a professional website quickly,
            without technical skills.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {TOOLS.map((tool, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-xl bg-[#020c2b]/5 flex items-center justify-center text-[#0b4dff] mb-6 group-hover:bg-[#0b4dff] group-hover:text-white transition-all duration-300">
                {tool.icon}
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#020c2b] mb-3">
                  {tool.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebsiteCreationTools;
