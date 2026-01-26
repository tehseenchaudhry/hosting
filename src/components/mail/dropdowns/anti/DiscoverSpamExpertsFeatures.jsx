import featureImg from "../../../../assets/slider-reseller-ndd.webp";

const FEATURES = [
  {
    title: "Quarantine and reports",
    desc: "We provide a full report tool to monitor spam activity and review incoming emails at any time."
  },
  {
    title: "Double deployment options",
    desc: "Opt for our Cloud Hosted Service or have the inbound filter directly installed in your local hardware."
  },
  {
    title: "Simple usage",
    desc: "Adding or removing the spam filter requires only minimal configuration."
  },
  {
    title: "Integration and automation",
    desc: "SpamExperts provides easy-made add-ons to seamlessly integrate the solution into your existing infrastructure."
  },
  {
    title: "Supported messaging servers",
    desc: "Compatible with Exchange, Zimbra, Postfix, Sendmail and many other mail servers."
  },
  {
    title: "Full support and updates",
    desc: "Our support teams monitor, maintain and continuously update SpamExperts filters."
  },
  {
    title: "Pending files delivery queue",
    desc: "Emails are stored securely until the destination server becomes available."
  },
  {
    title: "Administration",
    desc: "Advanced admin tools allow full configuration, reporting and user management."
  },
  {
    title: "Filter quality and efficiency",
    desc: "Industry-leading detection rates ensure minimal false positives and maximum protection."
  }
];

const DiscoverSpamExpertsFeatures = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* IMAGE */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={featureImg}
              alt="SpamExperts features"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020c2b] mb-12">
              Discover more <br /> SpamExperts features
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {FEATURES.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  <h4 className="font-semibold text-[#020c2b] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscoverSpamExpertsFeatures;
