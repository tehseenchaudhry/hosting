const reasons = [
  {
    step: "1",
    title: "Instant deployment",
    description:
      "Your Cloud Hosting service is deployed automatically after invoice settlement, allowing you to get started immediately without delays.",
  },
  {
    step: "2",
    title: "Full server control",
    description:
      "Manage your cloud resources directly from your customer area. Scale CPU, RAM or storage anytime based on your needs.",
  },
  {
    step: "3",
    title: "Flexible & scalable",
    description:
      "Upgrade, downgrade, restart or reinstall your cloud environment in just a few clicks with no service interruption.",
  },
];

const WhyChooseCloudHosting = () => {
  return (
    <section className="bg-gradient-to-br from-[#020c2b] to-[#03164a] py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* TITLE */}
        <div className="max-w-[620px] mb-20">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
            data-aos="fade-up"
          >
            Why choose <br /> Cloud Hosting?
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative group"
            >
              {/* STEP NUMBER */}
              <div className="text-6xl font-extrabold text-white/10 mb-6 transition-all duration-300 group-hover:text-white/20">
                {item.step}
              </div>

              {/* CONTENT */}
              <h3 className="text-lg font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-sm max-w-[320px]">
                {item.description}
              </p>

              {/* HOVER LINE */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0b4dff] transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseCloudHosting;
