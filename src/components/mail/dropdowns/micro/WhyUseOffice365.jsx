import {
  ShieldCheck,
  Smartphone,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import officeImg from "../../../../assets/why-microsoft.webp"; 
// ⬆️ put the image exactly like SS in assets

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Better security and reliability",
    text: "Store all your data in a secured cloud space and benefit from Microsoft’s advanced protection.",
  },
  {
    icon: Smartphone,
    title: "Mobility and cross-devices",
    text: "Your employees can use Office applications on their laptops, tablets or smartphones, regardless of location.",
  },
  {
    icon: MessageCircle,
    title: "Workflow and communication",
    text: "Office 365 improves internal collaboration with real-time tools for communication.",
  },
  {
    icon: Sparkles,
    title: "Simplicity",
    text: "Take advantage of central management of users, permissions and services.",
  },
];

const WhyUseOffice365 = () => {
  return (
    <section className="w-full bg-[#f8f9fc] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div
            data-aos="fade-right"
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={officeImg}
              alt="Why use Office 365"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-12">
              Why use Office 365?
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-14 gap-y-10">
              {FEATURES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#e8eeff]">
                      <Icon className="w-5 h-5 text-[#0b4dff]" />
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
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUseOffice365;
