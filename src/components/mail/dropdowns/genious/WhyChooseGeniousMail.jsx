import {
  Database,
  Smartphone,
  ShieldCheck,
  Lock,
  RefreshCcw,
  Settings,
} from "lucide-react";

import whyImage from "../../../../assets/why-sm.webp";

const FEATURES = [
  {
    icon: <Database />,
    title: "Backup",
    text: "All of your business emails, contacts and calendars are backed up daily to keep your data safe.",
  },
  {
    icon: <Smartphone />,
    title: "Mobile compatibility",
    text: "Access your emails seamlessly from mobile and tablet devices with an optimized experience.",
  },
  {
    icon: <ShieldCheck />,
    title: "Security",
    text: "Secure your email with SSL encryption and SMTP/POP/IMAP protocols directly from our webmail.",
  },
  {
    icon: <Lock />,
    title: "SSL",
    text: "Send and receive emails securely with SSL encryption for enhanced protection.",
  },
  {
    icon: <RefreshCcw />,
    title: "Sync contacts/calendars",
    text: "Synchronize all your contacts and calendars across PC, Mac and iOS/Android devices.",
  },
  {
    icon: <Settings />,
    title: "Full management",
    text: "Manage redirections, out-of-office replies and aliases easily from your control panel.",
  },
];

const WhyChooseGeniousMail = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-6"
              data-aos="fade-up"
            >
              Why choose Genious for <br /> your business messaging?
            </h2>

            <p
              className="text-gray-600 text-lg leading-7 mb-14 max-w-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Genious Mail Solution plans vary in terms of storage capacity and
              the number of available business email accounts in each package.
              Since we value user experience, all our plans are compatible with
              both desktop and mobile devices.
            </p>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {FEATURES.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 group"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f6f9ff] flex items-center justify-center text-[#0b4dff] group-hover:bg-[#0b4dff] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#020c2b] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-6">
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
            <img
              src={whyImage}
              alt="Business email solution"
              className="rounded-3xl shadow-xl max-w-md w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseGeniousMail;
