import { ShieldCheck, Mail, Activity, Headphones, Filter } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Highly-secure messaging",
  },
  {
    icon: Filter,
    title: "Spam filter",
  },
  {
    icon: Activity,
    title: "Reliability",
  },
  {
    icon: ShieldCheck,
    title: "High performance collaboration tools",
  },
  {
    icon: Headphones,
    title: "24 / 7 support",
  },
];

const WhyChooseGenious = () => {
  return (
    <section className="bg-[#020c2b] py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Why choose <br />
            Genious communications ?
          </h2>

          <p className="text-white/70 max-w-lg leading-7">
            Genious Communications helps you establish business email accounts
            with your company’s name and benefit from appropriate security and
            protection.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div
          data-aos="fade-left"
          className="grid sm:grid-cols-2 gap-x-14 gap-y-10"
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-[#0b4dff]/40 flex items-center justify-center group-hover:bg-[#0b4dff] transition">
                <item.icon className="w-6 h-6 text-[#0b4dff] group-hover:text-white transition" />
              </div>

              <p className="text-white font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseGenious;
