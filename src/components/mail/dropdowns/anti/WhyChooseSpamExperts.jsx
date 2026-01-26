import spamExpertsWhy from "../../../../assets/spam-why.webp";

const WhyChooseSpamExperts = () => {
  return (
    <section className="w-full bg-[#020c2b]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* IMAGE */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="rounded-2xl overflow-hidden mb-20"
        >
          <img
            src={spamExpertsWhy}
            alt="Why choose SpamExperts"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT COLUMN */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
              Why choose SpamExperts ?
            </h2>

            <div className="space-y-8">
              <p className="text-white/80 leading-7">
                SpamExperts applies its own exclusive and intelligent
                auto-learning technology to remove spam before it hits your
                network.
              </p>

              <p className="text-white/80 leading-7">
                Get full control of your email flow and make your teams more
                efficient.
              </p>

              <p className="text-white/80 leading-7">
                Instantly detect any new spam and malware.
              </p>

              <p className="text-white/80 leading-7">
                Improve resources effectiveness & save up to 80% on current
                assets!
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            data-aos="fade-left"
            className="space-y-10 text-white/80 leading-7"
          >
            <p>
              An added layer of inbound protection filtering on both your email
              flow and your infrastructure ensures continuity and control in
              your email messaging.
            </p>

            <p>
              In case the destination mail server cannot be accessed, the
              SpamExperts system will retry automatically.
            </p>

            <p>
              Our SaaS email filter system saves you enormous amounts of time by
              keeping spam processing time to a minimum.
            </p>

            <p>
              SpamExperts constantly upgrades filtering techniques employed in
              the system and proactively detects new patterns and emerging
              threats.
            </p>

            <p>
              Fast tracking protection from new threats is guaranteed since the
              filtering service is being shared in real time with all of our
              customers across the globe.
            </p>

            <p>
              By applying a first level, high efficiency filter to your email
              network, you no longer need to manage high volumes of spam.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSpamExperts;
