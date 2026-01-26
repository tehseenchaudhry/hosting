const FAQS = [
  {
    q: "What are the benefits of having my professional email address?",
    a: "Knowledge is taken seriously when you have a professional email address associated with your company’s domain name.",
  },
  {
    q: "Is this offer compatible with Outlook?",
    a: "Genious Mail Solution is compatible with all kinds of email clients including Outlook, Thunderbird, and webmail on Windows, Mac, Linux and mobile.",
  },
  {
    q: "Can I switch between packs at any time?",
    a: "Yes, you can switch to a different pack at any time depending on your needs and you will be charged only for the amount you have used.",
  },
  {
    q: "Can I change my payment periodicity?",
    a: "It is also possible to switch from a monthly subscription to an annual subscription and vice versa.",
  },
  {
    q: "Can I use more than one domain in my mail address account?",
    a: "Only one domain name is authorized for each Mail Solution pack.",
  },
];

const ProfessionalEmailFAQ = () => {
  return (
    <section className="w-full bg-[#020c2b]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-28">

        {/* TITLE */}
        <h2
          className="text-center text-3xl md:text-4xl font-extrabold text-white mb-20"
          data-aos="fade-up"
        >
          For professional emails
        </h2>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-14 max-w-5xl mx-auto">

          {FAQS.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <h4 className="text-white font-semibold mb-3 text-base md:text-lg">
                {item.q}
              </h4>
              <p className="text-white/70 text-sm leading-6">
                {item.a}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProfessionalEmailFAQ;
