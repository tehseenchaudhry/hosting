import {
  Mail,
  HardDrive,
  Video,
  ShieldCheck,
  Users,
  Cloud,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Mail />,
    title: "Professional Gmail",
    text: "Get a professional email address with your domain name and enhanced security.",
  },
  {
    icon: <HardDrive />,
    title: "Cloud storage",
    text: "Secure cloud storage to keep, share and access your files anywhere.",
  },
  {
    icon: <Video />,
    title: "Google Meet",
    text: "Organize secure video meetings with your team and clients.",
  },
  {
    icon: <Users />,
    title: "Real-time collaboration",
    text: "Work together in real time on Docs, Sheets and Slides.",
  },
  {
    icon: <ShieldCheck />,
    title: "Advanced security",
    text: "Protect your data with built-in security, spam filtering and encryption.",
  },
  {
    icon: <Cloud />,
    title: "Accessible anywhere",
    text: "Access your workspace from any device, anytime.",
  },
];

const WorkspaceFeatures = () => {
  return (
    <section className="w-full bg-[#f6f9ff]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <h2
          className="text-center text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-20"
          data-aos="fade-up"
        >
          Workspace offers the following features
        </h2>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-5xl mx-auto">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#0b4dff] group-hover:bg-[#0b4dff] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              <h4 className="font-bold text-[#020c2b] mb-3">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkspaceFeatures;
