import {
  ShieldCheck,
  Headphones,
  Sliders,
  LayoutDashboard,
  Globe,
  Lock,
  Zap,
  Mail,
} from "lucide-react";

const LinuxSharedHostingWhyChoose = () => {
  return (
    <section className="w-full bg-[#fff3cf]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#020c2b] mb-6">
            Why choose Linux shared hosting by Genious?
          </h2>

          <p className="text-[#020c2b]/70 text-lg leading-7">
            Our Linux shared hosting combines performance, reliability and ease
            of use, giving you everything you need to launch and manage your
            website with confidence.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">

          {[
            {
              icon: ShieldCheck,
              title: "Secure and high-performance servers",
              desc: "Advanced protection, daily monitoring and optimized infrastructure ensure maximum uptime and security.",
            },
            {
              icon: Headphones,
              title: "Expert support",
              desc: "Our certified technical team is available to assist you at every step of your hosting journey.",
            },
            {
              icon: Sliders,
              title: "Flexibility",
              desc: "Easily upgrade your resources as your website grows without service interruption.",
            },
            {
              icon: LayoutDashboard,
              title: "Genious Control Panel",
              desc: "Manage your hosting, domains and emails easily with an intuitive control panel.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <item.icon className="w-10 h-10 text-[#f4b400] mb-5" />
              <h3 className="font-bold text-[#020c2b] text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* INCLUDED FEATURES */}
        <div>
          <h3 className="text-2xl font-bold text-[#020c2b] mb-10">
            Included with your shared Linux package
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">

            {[
              { icon: Globe, label: "Web access" },
              { icon: Lock, label: "FTP access" },
              { icon: Zap, label: "Fast servers" },
              { icon: Mail, label: "Email addresses" },
              { icon: ShieldCheck, label: "Anti-spam" },
              { icon: LayoutDashboard, label: "Control panel" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <item.icon className="w-8 h-8 text-[#020c2b] mb-4" />
                <span className="text-sm font-semibold text-[#020c2b]">
                  {item.label}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default LinuxSharedHostingWhyChoose;
