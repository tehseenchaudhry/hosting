import feature1 from "../../../../assets/08.webp";
import feature2 from "../../../../assets/06.webp";
import feature3 from "../../../../assets/03 (1).webp";
import feature4 from "../../../../assets/04.webp";
import feature5 from "../../../../assets/07.webp";
import feature6 from "../../../../assets/05.webp";

const FEATURES = [
  {
    image: feature1,
    title: "Mail@Yourcompany",
    desc: "Create your own professional email account using your company email address (e.g. contact@yourcompany.com) and set up your own mailing lists.",
  },
  {
    image: feature2,
    title: "Storage",
    desc: "More than enough storage space. Every user gets 30 GB of online storage space. You can choose unlimited storage packages on Business and Enterprise plans.",
  },
  {
    image: feature3,
    title: "Direct 24/7 Assistance",
    desc: "You can contact Google support by phone or by email if needed. Our help centers are at your disposal for fast processing.",
  },
  {
    image: feature4,
    title: "Advanced administration controls",
    desc: "You can add and remove users, set up groups, and get security reports including login activity and administrator actions.",
  },
  {
    image: feature5,
    title: "Mobile device management",
    desc: "Manage company data and enforce security policies on mobile devices, allowing you to remotely locate your device and wipe data effortlessly.",
  },
  {
    image: feature6,
    title: "Facilitated data migration",
    desc: "Use our migration tools to transfer emails from your current solutions including IMAP servers and Microsoft Exchange.",
  },
];

const GoogleWorkspaceFeatures = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-20 max-w-3xl leading-tight">
          Find out about the many functionalities of Google Workspace
        </h2>

        {/* FEATURES GRID */}
        <div className="grid lg:grid-cols-2 gap-x-24 gap-y-24">
          {FEATURES.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-2xl mb-7 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[270px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft overlay on hover */}
                <div className="absolute inset-0 bg-[#020c2b]/0 group-hover:bg-[#020c2b]/10 transition duration-500" />
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-bold text-[#020c2b] mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7 text-sm max-w-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GoogleWorkspaceFeatures;
